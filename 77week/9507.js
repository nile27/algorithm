const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const T = input[0];
const dp = Array(68).fill(0n);

dp[0] = 1n;
dp[1] = 1n;
dp[2] = 2n;
dp[3] = 4n;

let i = 0,
  n = 0;
for (i = 4; i <= 67; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3] + dp[i - 4];
}

for (i = 1; i <= T; i++) {
  n = input[i];
  console.log(dp[n].toString());
}
