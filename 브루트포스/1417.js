const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const arr = input.slice(1).map(Number);
let count = 0;
let maxIdx = arr.length;
let max = 0;
function maxNumber(num) {
  let N = 0;
  let idx = 0;

  for (let i = 0; i < arr.length; i++) {
    if (N <= arr[i]) {
      N = arr[i];
      idx = i;
    }
  }
  return [N, idx];
}

while (maxIdx !== 0) {
  [max, maxIdx] = maxNumber();
  count++;
  arr[0]++;
  arr[maxIdx]--;
}
console.log(count - 1);
