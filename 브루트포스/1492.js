const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();

const [n, m] = input.split(" ").map(Number);

const visited = Array.from({ length: m }, () => Array(n).fill(false));

const dx = [0, -1, 0, 1];
const dy = [1, 0, -1, 0];

let x = m - 1;
let y = 0;
visited[x][y] = true;

let dir = 0;
let count = 1;

let a = 0,
  b = 0;

while (count < n * m) {
  let nx = x + dx[dir];
  let ny = y + dy[dir];

  if (nx < 0 || nx >= m || ny < 0 || ny >= n || visited[nx][ny]) {
    dir = (dir + 1) % 4;
    continue;
  }

  x = nx;
  y = ny;
  visited[x][y] = true;
  count++;

  a += dy[dir];
  b += -dx[dir];
}

console.log(a, b);
