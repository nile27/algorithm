const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split(" ");
const r = Number(input[0]),
  c = Number(input[1]);

const dp = Array.from({ length: r + 1 }, () => Array(r + 1).fill(0));

for (let i = 1; i <= r; i++) {
  for (let j = 1; j <= i; j++) {
    if (j === 1 || j === i) {
      dp[i][j] = 1;
    } else {
      dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
    }
  }
}

console.log(dp[r][c]);
