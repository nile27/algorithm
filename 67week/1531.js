const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const result = Array.from({ length: 100 }, () => Array(100).fill(0));

let [x1, y1, x2, y2] = [0, 0, 0, 0];
let count = 0;

for (let t = 1; t <= N; t++) {
  [x1, y1, x2, y2] = input[t].split(" ").map(Number);

  for (i = x1 - 1; i < x2; i++) {
    for (j = y1 - 1; j < y2; j++) {
      result[i][j] += 1;
    }
  }
}

for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    if (result[i][j] > M) {
      count++;
    }
  }
}

console.log(count);
