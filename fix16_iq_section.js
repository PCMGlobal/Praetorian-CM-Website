const fs = require('fs');
const lines = fs.readFileSync('app/page.tsx', 'utf8').split('\r\n').join('\n').split('\n');

let changes = 0;

for (let i = 0; i < lines.length; i++) {

  // 1. Reduce Praetorian IQ heading font size
  if (lines[i].includes('Praetorian IQ') && lines[i].includes('clamp(30px,3.6vw,44px)') && lines[i].includes('fontWeight: "800"')) {
    lines[i] = lines[i].replace('clamp(30px,3.6vw,44px)', 'clamp(22px,2.4vw,30px)');
    lines[i] = lines[i].replace('margin: "20px 0 0"', 'margin: "12px 0 0"');
    changes++; console.log('Line', i+1, ': IQ heading font reduced');
  }

  // 2. Reduce body paragraph margin
  if (lines[i].includes('Praetorian IQ is our proprietary')) {
    lines[i] = lines[i].replace('margin: "18px 0 26px"', 'margin: "12px 0 18px"');
    lines[i] = lines[i].replace('fontSize: "16px"', 'fontSize: "14px"');
    changes++; console.log('Line', i+1, ': IQ body text reduced');
  }

  // 3. Reduce section outer padding
  if (lines[i].includes("background: '#003E52', color: '#e9eef0'")) {
    // Find the inner div with padding
    for (let j = i; j < i + 3; j++) {
      if (lines[j].includes("clamp(28px,3.5vw,52px)") && lines[j].includes("alignItems: 'start'")) {
        lines[j] = lines[j].replace("clamp(28px,3.5vw,52px)", "clamp(20px,2.5vw,36px)");
        changes++; console.log('Line', j+1, ': section padding reduced');
      }
    }
  }

  // 4. "Included in every engagement" card — add alignSelf start and reduce padding
  if (lines[i].includes('Included in every engagement')) {
    // Fix the parent div (line before)
    if (lines[i-1].includes('background: "#04222c"')) {
      lines[i-1] = lines[i-1]
        .replace('padding: "32px 28px"', 'padding: "24px 22px"')
        .replace('border: "1px solid rgba(255,255,255,.22)"', 'border: "1px solid rgba(255,255,255,.22)", alignSelf: "start"');
      changes++; console.log('Line', i, ': Included card padding + alignSelf fixed');
    }
    // Reduce eyebrow margin
    lines[i] = lines[i].replace('marginBottom: "20px"', 'marginBottom: "14px"');
    changes++;
  }

  // 5. Reduce gap between list items inside Included card
  if (lines[i].includes('display: "grid", gap: "20px"')) {
    lines[i] = lines[i].replace('gap: "20px"', 'gap: "14px"');
    changes++; console.log('Line', i+1, ': card item gap reduced');
  }

  // 6. Reduce marginTop on the features grid at bottom of left panel
  if (lines[i].includes("marginTop: '36px'") && lines[i].includes("border: '1px solid rgba(255,255,255,.2)'")) {
    lines[i] = lines[i].replace("marginTop: '36px'", "marginTop: '20px'");
    changes++; console.log('Line', i+1, ': features grid margin reduced');
  }

  // 7. Reduce footer disclaimer margin
  if (lines[i].includes('Access to Praetorian IQ is embedded')) {
    lines[i-1] = lines[i-1]
      .replace('marginTop: "28px"', 'marginTop: "16px"')
      .replace('paddingTop: "20px"', 'paddingTop: "14px"');
    changes++; console.log('Line', i, ': disclaimer margin reduced');
  }
}

fs.writeFileSync('app/page.tsx', lines.join('\n'), 'utf8');
console.log(`\nDone. ${changes} changes made.`);
