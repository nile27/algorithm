const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const t = Number(input[0]);
const nums = input.slice(1).map(Number);

const MOD = 1000000009;
const dp = Array(1000001).fill(0);

dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i <= 1000000; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % MOD;
}

nums.forEach(n => {
  console.log(dp[n]);
});
