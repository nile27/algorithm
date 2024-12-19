const fs = require("fs");
const N = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

const dp = Array(N + 1).fill(false);
dp[1] = true;
if (N >= 2) dp[2] = false;
if (N >= 3) dp[3] = true;
if (N >= 4) dp[4] = true;

for (let i = 5; i <= N; i++) {
  if (!dp[i - 1] || !dp[i - 3] || !dp[i - 4]) {
    dp[i] = true;
  } else {
    dp[i] = false;
  }
}

console.log(dp[N] ? "SK" : "CY");
