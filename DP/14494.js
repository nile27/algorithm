const fs = require("fs");
const [n, m] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const MOD = 1000000007;
const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

dp[1][1] = 1;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    if (i === 1 && j === 1) continue;
    dp[i][j] = (dp[i - 1][j] + dp[i][j - 1] + dp[i - 1][j - 1]) % MOD;
  }
}

console.log(dp[n][m]);
