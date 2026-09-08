const fs = require("fs");
const file = "app/page.tsx";
const lines = fs.readFileSync(file, "utf8").split("\n");
console.log("Line 219 (should be IQ section open):", lines[218].trim());
console.log("Line 272 (should be IQ section close):", lines[271].trim());
// Comment out lines 219-272 (index 218-271)
for (let i = 218; i <= 271; i++) {
  lines[i] = "// " + lines[i];
}
fs.writeFileSync(file, lines.join("\n"), "utf8");
console.log("DONE - Home IQ section hidden");