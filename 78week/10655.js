const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = input.shift();
const map = input.map((item) => item.split(" ").map(Number));
const start = input.shift();
let shortscut = 0;
let total = 0;

function manhattan(p1, p2) {
  return Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);
}

for (let i = 0; i < N - 1; i++) {
  total += manhattan(map[i], map[i + 1]);
}

let max = 0;
let term = 0;

for (let i = 1; i < N - 1; i++) {
  term = manhattan(map[i - 1], map[i]) + manhattan(map[i], map[i + 1]);
  shortscut = term - manhattan(map[i - 1], map[i + 1]);

  if (shortscut > max) {
    max = shortscut;
  }
}

console.log(total - max);
