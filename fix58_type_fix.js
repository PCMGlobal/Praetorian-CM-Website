const fs = require('fs');
let content = fs.readFileSync('app/projects/page.tsx', 'utf8').split('\r\n').join('\n');

// Fix the TypeScript type error in the merge logic
content = content.replace(
  '    // Always use DEFAULT_PROJECTS order as master — Sanity data supplements where available\n    const sanityMap = new Map((fetched || []).map((p: ProjectCard) => [p.slug, p]));\n    return DEFAULT_PROJECTS.map(p => sanityMap.get(p.slug) ?? p);',
  '    // Always use DEFAULT_PROJECTS order as master — Sanity data supplements where available\n    const sanityMap = new Map<string, ProjectCard>((fetched || []).map((p: ProjectCard) => [p.slug, p]));\n    return DEFAULT_PROJECTS.map(p => sanityMap.get(p.slug) ?? p);'
);

fs.writeFileSync('app/projects/page.tsx', content, 'utf8');
console.log('Done.');
