const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [M, N, H] = input.shift().split(" ").map(Number);
const tomato = [];
const dir = [
  [1, 0, 0],
  [-1, 0, 0],
  [0, 1, 0],
  [0, -1, 0],
  [0, 0, 1],
  [0, 0, -1],
];

let queue = [];
let tomatoCount = 0;
let max = 0;
let box = [],
  row = [];
let dz = 0,
  dy = 0,
  dx = 0;
let z = 0,
  y = 0,
  x = 0,
  days = 0;
let nz = 0,
  ny = 0,
  nx = 0;
let direction = [];

for (let h = 0; h < H; h++) {
  box = [];
  for (let n = 0; n < N; n++) {
    row = input.shift().split(" ").map(Number);
    box.push(row);
    for (let m = 0; m < M; m++) {
      if (row[m] === 1) {
        queue.push([h, n, m, 0]);
      } else if (row[m] === 0) {
        tomatoCount++;
      }
    }
  }
  tomato.push(box);
}

function bfs() {
  let front = 0;
  while (front < queue.length) {
    [z, y, x, days] = queue[front++];
    for (direction of dir) {
      dz = direction[0];
      dy = direction[1];
      dx = direction[2];

      nz = z + dz;
      ny = y + dy;
      nx = x + dx;

      if (
        nz >= 0 &&
        nz < H &&
        ny >= 0 &&
        ny < N &&
        nx >= 0 &&
        nx < M &&
        tomato[nz][ny][nx] === 0
      ) {
        tomato[nz][ny][nx] = 1;
        tomatoCount--;
        queue.push([nz, ny, nx, days + 1]);
        max = Math.max(max, days + 1);
      }
    }
  }
}

bfs();

console.log(tomatoCount === 0 ? max : -1);
