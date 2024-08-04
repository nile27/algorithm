const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim();
const n = Number(input);

let dp = Array.from(Array(n + 1), () => 10000);
dp[0] = 0;
dp[1] = 1;
dp[2] = 2;
dp[3] = 3;

for (let i = 4; i <= n; i++) {
  for (let j = 1; j * j <= i; j++) {
    dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
  }
}

console.log(dp[n]);
