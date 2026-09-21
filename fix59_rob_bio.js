const fs = require('fs');
const lines = fs.readFileSync('app/about/page.tsx', 'utf8').split('\r\n').join('\n').split('\n');

const idx = lines.findIndex(l => l.includes('Rob Ledgister') && l.includes('Biography details to follow'));
console.log('Found at line:', idx + 1);

lines[idx] = lines[idx].replace(
  'Biography details to follow.',
  'Rob brings almost three decades of multidisciplinary project management experience, with a strong foundation in project controls, scheduling and QA/QC. The greatest portion of his career has been spent on mining and industrial projects across Canada, where his methodical approach to project setup and execution has earned him a reputation for reliability and technical rigour.'
);

fs.writeFileSync('app/about/page.tsx', lines.join('\n'), 'utf8');
console.log('Done.');
