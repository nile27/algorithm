const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function solve(strArr, start, end) {
  const len = end - start + 1;
  if (len < 3) return;
  const third = Math.floor(len / 3);
  const midStart = start + third;
  const midEnd = start + 2 * third - 1;
  for (let i = midStart; i <= midEnd; i++) {
    strArr[i] = " ";
  }
  solve(strArr, start, midStart - 1);
  solve(strArr, midEnd + 1, end);
}
let N = 0;
let size = 0;
let strArr = [];
for (let i of input) {
  if (i === "") continue;
  N = Number(i);
  size = Math.pow(3, N);
  strArr = new Array(size).fill("-");
  solve(strArr, 0, size - 1);
  console.log(strArr.join(""));
}
