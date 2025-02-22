const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const n = Number(input[0]);
const scores = input[1].split(" ").map(Number);
const dp = new Array(n + 1).fill(0);

let max = 0;
let min = 0;
let temp = 0;

for (let i = 1; i <= n; i++) {
  max = scores[i - 1];
  min = scores[i - 1];

  for (let j = i; j > 0; j--) {
    if (scores[j - 1] > max) max = scores[j - 1];
    if (scores[j - 1] < min) min = scores[j - 1];

    temp = max - min;
    if (dp[j - 1] + temp > dp[i]) dp[i] = dp[j - 1] + temp;
  }
}

console.log(dp[n]);
