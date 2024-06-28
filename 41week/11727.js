const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim();
const n = Number(input);

let dp = {
  1: 1,
  2: 3,
};

for (let i = 3; i <= n; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 10007;
}

console.log(dp[n]);
