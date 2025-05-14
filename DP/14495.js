const fs = require("fs");
const n = parseInt(fs.readFileSync("./input.txt").toString().trim());

const f = Array(n + 1).fill(0);
if (n >= 1) f[1] = 1n;
if (n >= 2) f[2] = 1n;
if (n >= 3) f[3] = 1n;

for (let i = 4; i <= n; i++) {
  f[i] = f[i - 1] + f[i - 3];
}

console.log(f[n].toString());
