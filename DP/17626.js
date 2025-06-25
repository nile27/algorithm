const fs = require("fs");
const n = Number(fs.readFileSync("/dev/stdin").toString().trim());

const dp = Array(n + 1).fill(Infinity);
dp[0] = 0;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j * j <= i; j++) {
    dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
  }
}

console.log(dp[n]);
