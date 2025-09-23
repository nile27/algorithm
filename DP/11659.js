const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
const sum = new Array(N + 1).fill(0);

for (let i = 1; i <= N; i++) {
  sum[i] = sum[i - 1] + arr[i - 1];
}

for (let i = 2; i < 2 + M; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  console.log(sum[end] - sum[start - 1]);
}
