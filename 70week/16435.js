const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, L] = input[0].split(" ").map(Number);
const fruits = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let length = L;

for (let i = 0; i < N; i++) {
  if (fruits[i] <= length) {
    length++;
  } else {
    break;
  }
}

console.log(length);
