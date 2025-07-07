const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [A, B] = input[0].split(" ").map(Number);
const N = Number(input[1]);
const lists = input.slice(2).map(Number);

let minClick = Math.abs(B - A);
let list = 0,
  click = 0;

for (let i = 0; i < N; i++) {
  list = lists[i];
  click = Math.abs(B - list) + 1;
  minClick = Math.min(minClick, click);
}

console.log(minClick);
