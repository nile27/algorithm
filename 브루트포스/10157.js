const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [R, C] = input[0].split(" ").map(Number);
const K = Number(input[1]);
const seat = Array.from({ length: C }, () => Array(R).fill(0));

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

if (K > R * C) {
  console.log(0);
  return;
}

let x = 0,
  y = 0,
  dir = 0,
  nx = 0,
  ny = 0;
let count = 1;

while (count <= K) {
  seat[x][y] = count;
  if (count === K) {
    console.log(`${y + 1} ${x + 1}`);
    return;
  }

  nx = x + dx[dir];
  ny = y + dy[dir];

  if (nx < 0 || nx >= C || ny < 0 || ny >= R || seat[nx][ny] !== 0) {
    dir = (dir + 1) % 4;
  }

  x += dx[dir];
  y += dy[dir];
  count++;
}
