const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const snow = [0, ...input[1].split(" ").map(Number)];
let answer = 0;

function dfs(time, size, pos) {
  if (time === M || pos >= N) {
    answer = Math.max(answer, size);
    return;
  }
  let next = 0;
  for (let i = 1; i <= 2; i++) {
    next = pos + i;
    if (next <= N) {
      if (i === 1) {
        dfs(time + 1, size + snow[next], next);
      } else {
        dfs(time + 1, Math.floor(size / 2) + snow[next], next);
      }
    }
  }
}

dfs(0, 1, 0);
console.log(answer);
