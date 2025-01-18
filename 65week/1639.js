const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();

let maxLength = 0;
const n = input.length;
let mid, leftSum, rightSum, found;

for (let length = n - (n % 2); length >= 2; length -= 2) {
  found = false;
  for (let start = 0; start <= n - length; start++) {
    mid = start + length / 2;
    leftSum = input
      .slice(start, mid)
      .split("")
      .reduce((acc, num) => acc + parseInt(num, 10), 0);
    rightSum = input
      .slice(mid, start + length)
      .split("")
      .reduce((acc, num) => acc + parseInt(num, 10), 0);

    if (leftSum === rightSum) {
      maxLength = length;
      found = true;
      break;
    }
  }
  if (found) break;
}

console.log(maxLength);
