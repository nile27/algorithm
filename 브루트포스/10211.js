const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let t = parseInt(input[0]);
let line = 1;
let n = 0,
  arr = [],
  maxSum = 0,
  current = 0;
for (let i = 0; i < t; i++) {
  n = parseInt(input[line++]);
  arr = input[line++].split(" ").map(Number);

  maxSum = arr[0];
  current = arr[0];

  for (let j = 1; j < n; j++) {
    current = Math.max(arr[j], current + arr[j]);
    maxSum = Math.max(maxSum, current);
  }

  console.log(maxSum);
}
