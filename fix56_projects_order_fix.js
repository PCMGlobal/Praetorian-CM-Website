const fs = require('fs');
let content = fs.readFileSync('app/projects/page.tsx', 'utf8').split('\r\n').join('\n');

// Replace the merge logic entirely — always use DEFAULT_PROJECTS order as the master
// Sanity data only supplements missing details, but order comes from DEFAULT_PROJECTS
const oldMerge = `    if (!fetched || fetched.length === 0) return DEFAULT_PROJECTS;
    const sanityslugs = new Set(fetched.map((p: ProjectCard) => p.slug));
    const extras = DEFAULT_PROJECTS.filter(p => !sanityslugs.has(p.slug));
    return [...fetched, ...extras];`;

const newMerge = `    // Always use DEFAULT_PROJECTS order as master — Sanity data supplements where available
    const sanityMap = new Map((fetched || []).map((p: ProjectCard) => [p.slug, p]));
    return DEFAULT_PROJECTS.map(p => sanityMap.get(p.slug) ?? p);`;

content = content.replace(oldMerge, newMerge);
fs.writeFileSync('app/projects/page.tsx', content, 'utf8');
console.log('Done — DEFAULT_PROJECTS order now always respected.');
