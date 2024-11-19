const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const matrix = input.slice(1, N + 1).map((line) => line.split(" ").map(Number));
const K = parseInt(input[N + 1], 10);
const queries = input.slice(N + 2).map((line) => line.split(" ").map(Number));

let results = [];
let i = 0,
  j = 0,
  x = 0,
  y = 0,
  sum = 0;

const sumlist = Array.from({ length: N + 1 }, () => Array(M + 1).fill(0));
let psRow = 0,
  psCol = 0;

for (psRow = 1; psRow <= N; psRow++) {
  for (psCol = 1; psCol <= M; psCol++) {
    sumlist[psRow][psCol] =
      matrix[psRow - 1][psCol - 1] +
      sumlist[psRow - 1][psCol] +
      sumlist[psRow][psCol - 1] -
      sumlist[psRow - 1][psCol - 1];
  }
}
queries.forEach((query) => {
  [i, j, x, y] = query;
  sum =
    sumlist[x][y] -
    sumlist[i - 1][y] -
    sumlist[x][j - 1] +
    sumlist[i - 1][j - 1];
  results.push(sum);
});

console.log(results.join("\n"));
