const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const grid = input.slice(1).map((line) => line.split("").map(Number));

let maxSize = 1;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    for (let k = 1; i + k < N && j + k < M; k++) {
      if (
        grid[i][j] === grid[i][j + k] &&
        grid[i][j] === grid[i + k][j] &&
        grid[i][j] === grid[i + k][j + k]
      ) {
        maxSize = Math.max(maxSize, (k + 1) * (k + 1));
      }
    }
  }
}

console.log(maxSize);
