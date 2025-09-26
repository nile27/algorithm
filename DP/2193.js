const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim()
const n = Number(input);

const dp = new Array(n + 1);
dp[0] = [0, 0];
dp[1] = [0, 1];

for (let i = 2; i <= n; i++) {
  dp[i] = [];
  dp[i][0] = BigInt(dp[i - 1][0] + dp[i - 1][1]);
  dp[i][1] = BigInt(dp[i - 1][0]);
}

console.log(BigInt(dp[n][0] + dp[n][1]).toString());
