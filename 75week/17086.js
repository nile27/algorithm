const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const map = input.slice(1).map((line) => line.split(" ").map(Number));
const visited = Array.from({ length: N }, () => Array(M).fill(false));
const dist = Array.from({ length: N }, () => Array(M).fill(0));

const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
const dy = [-1, 0, 1, -1, 1, -1, 0, 1];

const queue = [];

let x = 0,
  y = 0,
  nx = 0,
  ny = 0;
let result = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === 1) {
      queue.push([i, j]);
      visited[i][j] = true;
    }
  }
}

while (queue.length) {
  [x, y] = queue.shift();

  for (let i = 0; i < 8; i++) {
    nx = x + dx[i];
    ny = y + dy[i];

    if (nx >= 0 && nx < N && ny >= 0 && ny < M && !visited[nx][ny]) {
      visited[nx][ny] = true;
      dist[nx][ny] = dist[x][y] + 1;
      queue.push([nx, ny]);
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (dist[i][j] > result) {
      result = dist[i][j];
    }
  }
}

console.log(result);
