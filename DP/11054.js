const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const T = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);

const dp = Array(T).fill(1);
const reverseDp = Array(T).fill(1);

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[j] < arr[i]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

for (let i = T - 1; i >= 0; i--) {
  for (let j = T - 1; j > i; j--) {
    if (arr[j] < arr[i]) {
      reverseDp[i] = Math.max(reverseDp[i], reverseDp[j] + 1);
    }
  }
}

let result = 0;
for (let i = 0; i < T; i++) {
  result = Math.max(result, dp[i] + reverseDp[i] - 1);
}
console.log(result);
