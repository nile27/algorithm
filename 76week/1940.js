const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);
const M = Number(input[1]);
const arr = input[2]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let left = 0,
  right = N - 1;
let count = 0,
  sum = 0;

while (left < right) {
  sum = arr[left] + arr[right];

  if (sum === M) {
    count++;
    left++;
    right--;
  } else if (sum < M) {
    left++;
  } else {
    right--;
  }
}

console.log(count);
