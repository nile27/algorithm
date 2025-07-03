const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);
const K = Number(input[1]);

const board = Array.from({ length: N }, () => Array(N).fill(0));
const dr = [1, 0, -1, 0];
const dc = [0, 1, 0, -1];

let num = N * N;
let r = 0,
  c = 0,
  d = 0;
let target = [];
let nr = 0,
  nc = 0;

while (num > 0) {
  board[r][c] = num;
  if (num === K) target = [r + 1, c + 1];

  nr = r + dr[d];
  nc = c + dc[d];

  if (nr < 0 || nr >= N || nc < 0 || nc >= N || board[nr][nc] !== 0) {
    d = (d + 1) % 4;
    nr = r + dr[d];
    nc = c + dc[d];
  }

  r = nr;
  c = nc;
  num--;
}

console.log(board.map((row) => row.join(" ")).join("\n"));
console.log(target.join(" "));
