const fs = require('fs');
const lines = fs.readFileSync('app/about/page.tsx', 'utf8').split('\r\n').join('\n').split('\n');

let changes = 0;

for (let i = 0; i < lines.length; i++) {
  // 1. Reduce section padding
  if (lines[i].includes('id="pcml-careers"') && lines[i].includes('clamp(28px,3.5vw,48px)')) {
    lines[i] = lines[i].replace('clamp(28px,3.5vw,48px)', 'clamp(16px,2vw,28px)');
    changes++; console.log('Line', i+1, ': section padding reduced');
  }

  // 2. Reduce eyebrow marginBottom
  if (lines[i].includes('about.careers.eyebrow') && lines[i].includes('marginBottom: "12px"')) {
    lines[i] = lines[i].replace('marginBottom: "12px"', 'marginBottom: "8px"');
    changes++; console.log('Line', i+1, ': eyebrow margin reduced');
  }

  // 3. Reduce all paragraph margins on left column
  if (lines[i].includes('about.careers.paragraph')) {
    lines[i] = lines[i]
      .replace('margin: "0 0 10px"', 'margin: "0 0 6px"')
      .replace('margin: "0 0 18px"', 'margin: "0 0 6px"')
      .replace('margin: "0 0 32px"', 'margin: "0 0 6px"');
    changes++; console.log('Line', i+1, ': paragraph margin tightened');
  }

  // 4. Reduce resumeIntro margin
  if (lines[i].includes('about.careers.resumeIntro') && lines[i].includes('margin: "0 0 8px"')) {
    lines[i] = lines[i].replace('margin: "0 0 8px"', 'margin: "0 0 6px"');
    changes++; console.log('Line', i+1, ': resumeIntro margin reduced');
  }

  // 5. Reduce LinkedIn card top margin
  if (lines[i].includes('marginTop: "12px"') && lines[i].includes('background: "#f7f7f7"')) {
    lines[i] = lines[i].replace('marginTop: "12px"', 'marginTop: "8px"');
    changes++; console.log('Line', i+1, ': LinkedIn card margin reduced');
  }

  // 6. Reduce grid gap
  if (lines[i].includes('repeat(auto-fit,minmax(340px,1fr))') && lines[i].includes('clamp(36px,5vw,72px)')) {
    lines[i] = lines[i].replace('clamp(36px,5vw,72px)', 'clamp(24px,3vw,44px)');
    changes++; console.log('Line', i+1, ': grid gap reduced');
  }
}

fs.writeFileSync('app/about/page.tsx', lines.join('\n'), 'utf8');
console.log(`Done. ${changes} changes.`);
