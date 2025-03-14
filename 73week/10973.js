const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);

let i = N - 2;
let j = N - 1;

while (i >= 0 && arr[i] <= arr[i + 1]) i--;

if (i === -1) {
  console.log(-1);
} else {
  while (arr[i] <= arr[j]) j--;

  [arr[i], arr[j]] = [arr[j], arr[i]];

  const left = arr.slice(0, i + 1);
  const right = arr.slice(i + 1).reverse();
  console.log([...left, ...right].join(" "));
}
