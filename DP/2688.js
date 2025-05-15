const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const T = input[0];
const arr = input.slice(1);

const MAX = 64;
const dp = Array.from({ length: MAX + 1 }, () => Array(10).fill(0n));

for (let j = 0; j <= 9; j++) {
  dp[1][j] = 1n;
}

for (let i = 2; i <= MAX; i++) {
  for (let j = 0; j <= 9; j++) {
    for (let k = j; k <= 9; k++) {
      dp[i][j] += dp[i - 1][k];
    }
  }
}

for (let n of arr) {
  let sum = 0n;
  for (let j = 0; j <= 9; j++) {
    sum += dp[n][j];
  }
  console.log(sum.toString());
}
