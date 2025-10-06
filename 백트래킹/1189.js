const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [R, C, K] = input[0].split(" ").map(Number);
const board = input.slice(1, 1 + R).map((row) => row.split(""));

const visited = Array.from({ length: R }, () => Array(C).fill(false));
const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

let countPaths = 0;

function dfs(r, c, d) {
  if (r === 0 && c === C - 1) {
    if (d === K) {
      countPaths += 1;
    }
    return;
  }

  for (let i = 0; i < 4; i++) {
    const nr = r + dr[i];
    const nc = c + dc[i];
    if (nr < 0 || nr >= R || nc < 0 || nc >= C) continue;
    if (board[nr][nc] === "T" || visited[nr][nc]) continue;

    visited[nr][nc] = true;
    dfs(nr, nc, d + 1);
    visited[nr][nc] = false;
  }
}

visited[R - 1][0] = true;
dfs(R - 1, 0, 1);

console.log(countPaths);
