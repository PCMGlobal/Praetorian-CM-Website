const fs = require('fs');
const lines = fs.readFileSync('app/projects/page.tsx', 'utf8').split('\r\n').join('\n').split('\n');

// Find the getProjects function return line and update merge logic
const idx = lines.findIndex(l => l.includes('return fetched && fetched.length > 0 ? fetched : DEFAULT_PROJECTS'));
console.log('Found merge line at:', idx + 1);

// Replace with logic that always includes DEFAULT_PROJECTS entries not in Sanity
lines[idx] = `    if (!fetched || fetched.length === 0) return DEFAULT_PROJECTS;
    const sanityslugs = new Set(fetched.map((p: ProjectCard) => p.slug));
    const extras = DEFAULT_PROJECTS.filter(p => !sanityslugs.has(p.slug));
    return [...fetched, ...extras];`;

fs.writeFileSync('app/projects/page.tsx', lines.join('\n'), 'utf8');
console.log('Done.');
