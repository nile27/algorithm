const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const arr = [];
let row = [];
for (let i = 1; i <= N; i++) {
  row = input[i].split(" ").map(Number);
  arr.push(row);
}

const sum = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

let value = 0;
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    value = arr[i - 1][j - 1];
    sum[i][j] = value + sum[i - 1][j] + sum[i][j - 1] - sum[i - 1][j - 1];
  }
}

let result = [];
let x1 = 0,
  y1 = 0,
  x2 = 0,
  y2 = 0;
let total = 0;
for (let k = N + 1; k < input.length; k++) {
  [x1, y1, x2, y2] = input[k].split(" ").map(Number);

  total = sum[x2][y2] - sum[x1 - 1][y2] - sum[x2][y1 - 1] + sum[x1 - 1][y1 - 1];
  result.push(total);
}

console.log(result.join("\n"));
