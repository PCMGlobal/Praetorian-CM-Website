<#
.SYNOPSIS
  One-command deploy: pushes the Sanity schema, commits and pushes the website
  code, then seeds every new page and project into Sanity.

.DESCRIPTION
  This replaces doing "npx sanity deploy", "git add/commit/push", and
  "node scripts/seed-*.js" by hand as three separate steps. Run this one
  script instead, any time Claude has added new page or schema files that
  still need to go live.

  Steps it runs, in order:
    1. Deploys the Sanity Studio schema (pcml-studio)
    2. Commits and pushes any pending website code changes (pcml-website),
       which triggers Vercel to redeploy automatically
    3. Seeds the About/Careers/Contact/HSSE/Praetorian IQ/Privacy/News pages
    4. Seeds the six project case studies (Amulsar, Conga, Diavik, Emigrant,
       Penasquito, SO2Clean)

  If any step fails, the script stops immediately so you can see exactly
  what happened before anything downstream runs.

.PARAMETER DeleteOldProjectFolders
  Optional. After a fully successful run, also deletes the six old static
  project folders (amulsar, conga, diavik, emigrant, penasquito, so2clean)
  under app\projects\, since their content now lives in Sanity and is served
  by app\projects\[slug]\page.tsx instead. This is a permanent delete with
  no undo, so it is off by default -- pass this switch once you've checked
  the live site and are ready to clean up.

.USAGE
  Open PowerShell in the pcml-website folder and run:
    .\scripts\deploy-and-seed.ps1

  Or, to also clean up the old project folders once you're confident:
    .\scripts\deploy-and-seed.ps1 -DeleteOldProjectFolders

  If PowerShell blocks the script from running, use:
    powershell -ExecutionPolicy Bypass -File .\scripts\deploy-and-seed.ps1

  You will be prompted once for your Sanity write token (input hidden as you
  type it). Get one at https://manage.sanity.io -> Praetorian-CM-Website
  project -> API -> Tokens (Editor permission or higher). It is only held in
  memory for this run and is never written to disk.
#>

param(
    [switch]$DeleteOldProjectFolders
)

$ErrorActionPreference = "Stop"

function Write-Step($msg) {
    Write-Host ""
    Write-Host "==> $msg" -ForegroundColor Cyan
}

function Fail($msg) {
    Write-Host ""
    Write-Host "FAILED: $msg" -ForegroundColor Red
    exit 1
}

# Resolve folder locations relative to this script, assuming pcml-website and
# pcml-studio are sibling folders (as they are on this machine).
$websiteRoot = Split-Path $PSScriptRoot -Parent
$parentDir   = Split-Path $websiteRoot -Parent
$studioRoot  = Join-Path $parentDir "pcml-studio"

if (-not (Test-Path $studioRoot)) {
    Fail "Could not find pcml-studio at $studioRoot. If your folders are laid out differently, edit `$studioRoot near the top of this script."
}

# ---- Step 0: get the Sanity write token (never saved to disk) ----
if (-not $env:SANITY_WRITE_TOKEN) {
    Write-Step "Sanity write token needed (input is hidden, used only for this run)"
    $secureToken = Read-Host "Paste your Sanity write token" -AsSecureString
    $bstr = [System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($secureToken)
    $env:SANITY_WRITE_TOKEN = [System.Runtime.InteropServices.Marshal]::PtrToStringAuto($bstr)
    [System.Runtime.InteropServices.Marshal]::ZeroFreeBSTR($bstr)
}
if (-not $env:SANITY_WRITE_TOKEN) {
    Fail "No Sanity write token provided."
}

# ---- Step 1: deploy the Sanity Studio schema ----
Write-Step "Deploying Sanity Studio schema from $studioRoot"
Push-Location $studioRoot
try {
    npx sanity deploy
    if ($LASTEXITCODE -ne 0) { Fail "npx sanity deploy failed (exit code $LASTEXITCODE)." }
} finally {
    Pop-Location
}

# ---- Step 2: commit and push the website code ----
Write-Step "Committing and pushing website changes from $websiteRoot"
Push-Location $websiteRoot
try {
    git add -A
    $pending = git status --porcelain
    if ([string]::IsNullOrWhiteSpace($pending)) {
        Write-Host "Nothing to commit -- working tree already matches the last commit." -ForegroundColor Yellow
    } else {
        git commit -m "Add CMS-driven pages and projects collection"
        if ($LASTEXITCODE -ne 0) { Fail "git commit failed (exit code $LASTEXITCODE)." }
        git push
        if ($LASTEXITCODE -ne 0) { Fail "git push failed (exit code $LASTEXITCODE)." }
    }
} finally {
    Pop-Location
}

# ---- Step 3: seed the seven remaining pages into Sanity ----
Write-Step "Seeding About, Careers, Contact, HSSE, Praetorian IQ, Privacy and News into Sanity"
Push-Location $websiteRoot
try {
    node scripts/seed-all-pages.js
    if ($LASTEXITCODE -ne 0) { Fail "seed-all-pages.js failed (exit code $LASTEXITCODE)." }
} finally {
    Pop-Location
}

# ---- Step 4: seed the six project case studies into Sanity ----
Write-Step "Seeding the six project case studies into Sanity"
Push-Location $websiteRoot
try {
    node scripts/seed-projects.js
    if ($LASTEXITCODE -ne 0) { Fail "seed-projects.js failed (exit code $LASTEXITCODE)." }
} finally {
    Pop-Location
}

Write-Host ""
Write-Host "All done. Schema deployed, code pushed (Vercel will redeploy automatically), and every page and project is live in Sanity." -ForegroundColor Green

# ---- Optional step 5: clean up the old static project folders ----
$oldFolders = @("amulsar", "conga", "diavik", "emigrant", "penasquito", "so2clean")
$projectsRoot = Join-Path $websiteRoot "app\projects"

if ($DeleteOldProjectFolders) {
    Write-Step "Deleting old static project folders (content now served from Sanity)"
    foreach ($folder in $oldFolders) {
        $path = Join-Path $projectsRoot $folder
        if (Test-Path $path) {
            Remove-Item -Path $path -Recurse -Force
            Write-Host "Deleted $path" -ForegroundColor Yellow
        }
    }
    Write-Host ""
    Write-Host "Old folders removed. Run git add -A / git commit / git push once more to push that cleanup." -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "Once you've checked the live site, re-run this script with -DeleteOldProjectFolders to remove the six now-unused folders:" -ForegroundColor Green
    Write-Host "  app\projects\amulsar, conga, diavik, emigrant, penasquito, so2clean" -ForegroundColor Green
}
