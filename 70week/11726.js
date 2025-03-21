const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();
const n = Number(input);

const mod = 10007;
const dp = new Array(n + 1).fill(0);

dp[1] = 1;
if (n > 1) dp[2] = 2;

for (let i = 3; i <= n; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % mod;
}

console.log(dp[n]);
