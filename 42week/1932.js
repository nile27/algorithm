const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const n = Number(input.shift());
const triangle = input.map((line) => line.split(" ").map(Number));
const dp = Array.from({ length: n }, (_, i) => triangle[i]);

for (let i = n - 2; i >= 0; i--) {
  for (let j = 0; j <= i; j++) {
    dp[i][j] += Math.max(dp[i + 1][j], dp[i + 1][j + 1]);
  }
}

console.log(dp[0][0]);
