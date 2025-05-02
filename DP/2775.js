const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const T = parseInt(input[0]);
const arr = input.slice(1).map(Number);

const dp = Array.from({ length: 15 }, () => Array(15).fill(0));

for (let i = 1; i <= 14; i++) {
  dp[0][i] = i;
}

for (let k = 1; k <= 14; k++) {
  for (let n = 1; n <= 14; n++) {
    dp[k][n] = dp[k][n - 1] + dp[k - 1][n];
  }
}

let [k, n] = [0, 0];

for (let i = 0; i < T; i++) {
  k = arr[i * 2];
  n = arr[i * 2 + 1];
  console.log(dp[k][n]);
}
