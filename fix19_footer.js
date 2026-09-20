const fs = require('fs');
const lines = fs.readFileSync('app/components/Footer.tsx', 'utf8').split('\r\n').join('\n').split('\n');

let changes = 0;

for (let i = 0; i < lines.length; i++) {

  // 1. Change grid from 2fr 1fr 1fr 1fr to 1fr 1fr 1fr 1fr
  if (lines[i].includes('gridTemplateColumns: "2fr 1fr 1fr 1fr"')) {
    lines[i] = lines[i].replace('"2fr 1fr 1fr 1fr"', '"1fr 1fr 1fr 1fr"');
    changes++; console.log('Line', i+1, ': grid columns equalised');
  }

  // 2. Reduce logo maxWidth to 160px (about 1/3 of 480px)
  if (lines[i].includes('maxWidth: "480px"')) {
    lines[i] = lines[i].replace('maxWidth: "480px"', 'maxWidth: "160px"');
    changes++; console.log('Line', i+1, ': logo size reduced');
  }

  // 3. Reduce social icon circle size from 80px to 36px
  if (lines[i].includes('width: "80px", height: "80px"')) {
    lines[i] = lines[i].replaceAll('width: "80px", height: "80px"', 'width: "36px", height: "36px"');
    changes++; console.log('Line', i+1, ': social icon size reduced');
  }

  // 4. Reduce SVG icon sizes from 32px to 16px
  if (lines[i].includes('width="32" height="32"')) {
    lines[i] = lines[i].replaceAll('width="32" height="32"', 'width="16" height="16"');
    changes++; console.log('Line', i+1, ': SVG icon size reduced');
  }

  // 5. Remove paddingTop from Company/Services/Resources columns so they align with logo
  if (lines[i].includes('paddingTop: "40px"')) {
    lines[i] = lines[i].replace('paddingTop: "40px"', 'paddingTop: "0"');
    changes++; console.log('Line', i+1, ': column paddingTop removed');
  }

  // 6. Reduce heading font size
  if (lines[i].includes('fontSize: "24px"') && lines[i].includes('letterSpacing')) {
    lines[i] = lines[i].replace('fontSize: "24px"', 'fontSize: "13px"');
    changes++; console.log('Line', i+1, ': heading font size reduced');
  }
}

fs.writeFileSync('app/components/Footer.tsx', lines.join('\n'), 'utf8');
console.log(`Done. ${changes} changes.`);
