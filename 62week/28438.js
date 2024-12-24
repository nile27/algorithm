const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M, Q] = input[0].split(" ").map(Number);

const row_add = Array(N + 1).fill(0);
const col_add = Array(M + 1).fill(0);
let result = "";
let row = "";
let type = 0,
  index = 0,
  value = 0;

for (let i = 1; i <= Q; i++) {
  [type, index, value] = input[i].split(" ").map(Number);
  if (type === 1) {
    row_add[index] += value;
  } else if (type === 2) {
    col_add[index] += value;
  }
}

for (let i = 1; i <= N; i++) {
  row = "";
  for (let j = 1; j <= M; j++) {
    row += row_add[i] + col_add[j] + " ";
  }
  result += row.trim() + "\n";
}

console.log(result.trim());
