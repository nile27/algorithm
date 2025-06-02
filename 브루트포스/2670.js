const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = parseInt(input[0]);
const arr = input.slice(1).map(Number);

const dp = [...arr];
let max = arr[0];

for (let i = 1; i < N; i++) {
  dp[i] = Math.max(arr[i], dp[i - 1] * arr[i]);
  if (dp[i] > max) max = dp[i];
}

console.log(max.toFixed(3));
