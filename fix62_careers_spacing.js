const fs = require('fs');
const lines = fs.readFileSync('app/about/page.tsx', 'utf8').split('\r\n').join('\n').split('\n');

let changes = 0;

for (let i = 0; i < lines.length; i++) {
  // 1. Revert grid back to alignItems: start (remove stretch)
  if (lines[i].includes('repeat(auto-fit,minmax(340px,1fr))') && lines[i].includes('stretch')) {
    lines[i] = lines[i].replace('alignItems: "stretch"', 'alignItems: "start"');
    changes++; console.log('Line', i+1, ': grid reverted to start');
  }

  // 2. Remove flex column from left div
  if (lines[i].includes('display: "flex", flexDirection: "column", justifyContent: "space-between"') && 
      lines[i].includes('<div style')) {
    lines[i] = lines[i].replace(' style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}', '');
    changes++; console.log('Line', i+1, ': flex removed from left col');
  }

  // 3. Reduce paragraph margins on left column
  if (lines[i].includes('about.careers.paragraph') && lines[i].includes('margin: "0 0 18px"')) {
    lines[i] = lines[i].replace('margin: "0 0 18px"', 'margin: "0 0 10px"');
    changes++; console.log('Line', i+1, ': paragraph margin reduced');
  }
  if (lines[i].includes('about.careers.paragraph') && lines[i].includes('margin: "0 0 32px"')) {
    lines[i] = lines[i].replace('margin: "0 0 32px"', 'margin: "0 0 10px"');
    changes++; console.log('Line', i+1, ': paragraph3 margin reduced');
  }

  // 4. Reduce padding between reason cards on the right
  if (lines[i].includes('about.careers.reasons') && lines[i].includes('padding: "28px 26px"')) {
    lines[i] = lines[i].replace('padding: "28px 26px"', 'padding: "16px 20px"');
    changes++; console.log('Line', i+1, ': reason card padding reduced');
  }

  // 5. Reduce LinkedIn card top margin
  if (lines[i].includes('marginTop: "20px"') && lines[i].includes('background: "#f7f7f7"')) {
    lines[i] = lines[i].replace('marginTop: "20px"', 'marginTop: "12px"');
    changes++; console.log('Line', i+1, ': LinkedIn card margin reduced');
  }
}

fs.writeFileSync('app/about/page.tsx', lines.join('\n'), 'utf8');
console.log(`Done. ${changes} changes.`);
