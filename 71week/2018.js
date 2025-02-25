const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();
const N = Number(input);
let start = 1;
let end = 1;
let sum = 1;
let count = 1;

while (start <= Math.floor(N / 2)) {
  if (sum === N) {
    count++;
    end++;
    sum += end;
  } else if (sum < N) {
    end++;
    sum += end;
  } else {
    sum -= start;
    start++;
  }
}

console.log(count);
