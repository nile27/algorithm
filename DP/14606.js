const fs = require("fs");
const n = parseInt(fs.readFileSync("./input.txt").toString().trim(), 10);

const dp = Array(n + 1).fill(0);
dp[1] = 0;

for (let i = 2; i <= n; i++) {
  dp[i] = dp[i - 1] + (i - 1);
}

console.log(dp[n]);
