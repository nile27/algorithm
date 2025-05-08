const fs = require("fs");
const input = BigInt(fs.readFileSync("./input.txt").toString().trim());

const n = Number(input);
const dp = Array(n + 1).fill(0n);

dp[0] = 1n;

for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    dp[i] += dp[j] * dp[i - 1 - j];
  }
}

console.log(dp[n].toString());
