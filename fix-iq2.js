const fs = require("fs");
const file = "app/components/Navbar.tsx";
const lines = fs.readFileSync(file, "utf8").split("\n");
console.log("Line 170 (should be Praetorian IQ Link open):", lines[169].trim());
console.log("Line 175 (should be </Link>):", lines[174].trim());
// Comment out lines 170-175 (index 169-174)
for (let i = 169; i <= 174; i++) {
  lines[i] = "// " + lines[i];
}
fs.writeFileSync(file, lines.join("\n"), "utf8");
console.log("DONE - Desktop Praetorian IQ hidden");