const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, Q] = input.shift().split(" ").map(Number);

const arr = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const ans = [];

const sum = [0];
for (let i = 0; i < N; i++) {
  sum[i + 1] = sum[i] + arr[i];
}

for (let i = 0; i < Q; i++) {
  const [start, end] = input[i].split(" ").map(Number);

  const result = sum[end] - sum[start - 1];
  ans.push(result);
}

console.log(ans.join("\n"));
