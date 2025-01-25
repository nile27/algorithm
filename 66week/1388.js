const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const tile = input.slice(1);

let result = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (tile[i][j] === "-") {
      result++;
      while (j < M && tile[i][j] === "-") {
        j++;
      }
    }
  }
}

for (let j = 0; j < M; j++) {
  for (let i = 0; i < N; i++) {
    if (tile[i][j] === "|") {
      result++;
      while (i < N && tile[i][j] === "|") {
        i++;
      }
    }
  }
}

console.log(result);
