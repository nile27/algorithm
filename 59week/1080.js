const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const A = input.slice(1, N + 1).map((line) => line.split("").map(Number));
const B = input.slice(N + 1).map((line) => line.split("").map(Number));

function solve(x, y) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      A[x + i][y + j] = 1 - A[x + i][y + j];
    }
  }
}

let count = 0;

for (let i = 0; i <= N - 3; i++) {
  for (let j = 0; j <= M - 3; j++) {
    if (A[i][j] !== B[i][j]) {
      solve(i, j);
      count++;
    }
  }
}

const isSame = A.every((row, idx) => row.join("") === B[idx].join(""));
console.log(isSame ? count : -1);
