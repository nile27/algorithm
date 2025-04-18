const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split(" ");
const N = parseInt(input[0]);
const num = Number(input[1]);
let arr = [],
  result = 0;

for (let i = 1; i <= N; i++) {
  arr = i.toString().split("").map(Number);
  for (let item of arr) {
    item === num ? result++ : 0;
  }
}

console.log(result);
