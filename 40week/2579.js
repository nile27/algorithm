const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const leng = input.shift();
let dp = Array(leng).fill(0);
let sum = 0;

if (leng <= 2) {
  for (let i of input) {
    sum += i;
  }
  console.log(sum);
} else {
  dp[0] = input[0];
  dp[1] = input[0] + input[1];
  dp[2] = Math.max(input[0], input[1]) + input[2];

  for (let i = 3; i < leng; i++) {
    dp[i] = Math.max(dp[i - 3] + input[i - 1] + input[i], dp[i - 2] + input[i]);
  }
  console.log(dp[leng - 1]);
}
