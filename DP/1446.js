const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, D] = input.shift().split(" ").map(Number);
const shortcuts = input
  .map((item) => item.split(" ").map(Number))
  .sort((a, b) => a[0] - b[0]);

const dp = Array(D + 1).fill(Infinity);
dp[0] = 0;

for (let i = 0; i <= D; i++) {
  if (i > 0) dp[i] = Math.min(dp[i], dp[i - 1] + 1);

  for (let short of shortcuts) {
    if (short[0] === i && short[1] <= D) {
      dp[short[1]] = Math.min(dp[short[1]], dp[short[0]] + short[2]);
    }
  }
}

console.log(dp[D]);
