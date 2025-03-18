const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const map = input.slice(1).map((line) => line.split(""));
const visit = Array.from({ length: N }, () => Array(M).fill(false));
const queue = [];

const dr = [-1, 0, 1, 0];
const dc = [0, 1, 0, -1];
let [x, y] = [-1, -1];
let count = 0;

let r = 0,
  c = 0,
  nr = 0,
  nc = 0,
  d = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === "I") {
      x = i;
      y = j;
      queue.push([x, y]);
      visit[x][y] = true;
      break;
    }
  }
}

while (queue.length) {
  [r, c] = queue.shift();

  for (d = 0; d < 4; d++) {
    nr = r + dr[d];
    nc = c + dc[d];

    if (
      nr >= 0 &&
      nr < N &&
      nc >= 0 &&
      nc < M &&
      !visit[nr][nc] &&
      map[nr][nc] !== "X"
    ) {
      visit[nr][nc] = true;
      queue.push([nr, nc]);

      if (map[nr][nc] === "P") count++;
    }
  }
}

console.log(count > 0 ? count : "TT");
