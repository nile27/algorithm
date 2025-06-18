const fs = require("fs");
const n = Number(fs.readFileSync("./input.txt").toString().trim());

const dp = Array(n + 1).fill(0n);
dp[0] = 0n;
dp[1] = 1n;

for (let i = 2; i <= n; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

console.log(dp[n].toString());
