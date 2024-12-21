const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let idx = 0;

const [N, M] = input[idx++].split(" ").map(Number);
const A = [];
let row = [];
for (let i = 0; i < N; i++) {
  row = input[idx++].split(" ").map(Number);
  A.push(row);
}

const [M2, K] = input[idx++].split(" ").map(Number);
const B = [];
for (let i = 0; i < M2; i++) {
  row = input[idx++].split(" ").map(Number);
  B.push(row);
}

const C = Array.from({ length: N }, () => Array(K).fill(0));
let sum = 0;
let j = 0,
  k = 0,
  l = 0;

for (let i = 0; i < N; i++) {
  for (j = 0; j < K; j++) {
    sum = 0;
    for (k = 0; k < M; k++) {
      sum += A[i][k] * B[k][j];
    }
    C[i][j] = sum;
  }
}

let result = "";
for (let i = 0; i < N; i++) {
  result += C[i].join(" ") + "\n";
}
console.log(result.trim());
