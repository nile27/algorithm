const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [R, C] = input[0].split(" ").map(Number);
const image = input.slice(1, R + 1).map((line) => line.split(" ").map(Number));
const T = Number(input[R + 1]);

function getMiddle(arr) {
  const sorted = arr.slice().sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)];
}

let count = 0;
let filter = [];
let middle = 0;

for (let i = 0; i <= R - 3; i++) {
  for (let j = 0; j <= C - 3; j++) {
    filter.length = 0;
    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
        filter.push(image[i + x][j + y]);
      }
    }
    middle = getMiddle(filter);
    if (middle >= T) {
      count++;
    }
  }
}

console.log(count);
