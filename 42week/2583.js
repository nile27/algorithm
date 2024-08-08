const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [M, N, K] = input[0].split(" ").map(Number);
const grid = Array.from({ length: M }, () => Array(N).fill(0));

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

for (let i = 1; i <= K; i++) {
  const [x1, y1, x2, y2] = input[i].split(" ").map(Number);
  for (let y = y1; y < y2; y++) {
    for (let x = x1; x < x2; x++) {
      grid[y][x] = 1;
    }
  }
}

function bfs(startY, startX) {
  const queue = [[startY, startX]];
  grid[startY][startX] = 1;
  let areaSize = 0;

  while (queue.length > 0) {
    const [y, x] = queue.shift();
    areaSize++;

    for (const [dy, dx] of directions) {
      const ny = y + dy;
      const nx = x + dx;

      if (ny >= 0 && ny < M && nx >= 0 && nx < N && grid[ny][nx] === 0) {
        queue.push([ny, nx]);
        grid[ny][nx] = 1;
      }
    }
  }

  return areaSize;
}

const areas = [];

for (let y = 0; y < M; y++) {
  for (let x = 0; x < N; x++) {
    if (grid[y][x] === 0) {
      areas.push(bfs(y, x));
    }
  }
}

areas.sort((a, b) => a - b);
console.log(areas.length);
console.log(areas.join(" "));
