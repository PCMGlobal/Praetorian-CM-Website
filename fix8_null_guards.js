// Add null guards to all array accesses that could crash if Sanity returns empty arrays
const fs = require('fs');
const lines = fs.readFileSync('app/page.tsx', 'utf8').split('\r\n').join('\n').split('\n');

let changes = 0;
const updated = lines.map((line, i) => {
  // Guard .map() calls on Sanity arrays
  const guards = [
    ['home.whatWeDo.cards.map(', '(home.whatWeDo?.cards ?? []).map('],
    ['home.resources.cards.map(', '(home.resources?.cards ?? []).map('],
    ['home.serviceTeasers.map(', '(home.serviceTeasers ?? []).map('],
    ['content.stats.map(', '(content.stats ?? []).map('],
    ['home.onTheGround[0]?.', 'home.onTheGround?.[0]?.'],
    ['home.onTheGround[1]?.', 'home.onTheGround?.[1]?.'],
    ['home.onTheGround[2]?.', 'home.onTheGround?.[2]?.'],
  ];
  let newLine = line;
  guards.forEach(([old, replacement]) => {
    if (newLine.includes(old)) {
      newLine = newLine.replaceAll(old, replacement);
      changes++;
      console.log(`Line ${i+1}: ${old} → ${replacement}`);
    }
  });
  return newLine;
});

fs.writeFileSync('app/page.tsx', updated.join('\n'), 'utf8');
console.log(`\nDone. ${changes} null guards added.`);
