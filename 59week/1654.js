const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [K, N] = input[0].split(" ").map(Number);
const cable = input.slice(1).map(Number);

let low = 1;
let high = Math.max(...cable);
let result = 0;
let mid, count;

while (low <= high) {
  mid = Math.floor((low + high) / 2);
  count = cable.reduce((acc, cable) => acc + Math.floor(cable / mid), 0);

  if (count >= N) {
    result = mid;
    low = mid + 1;
  } else {
    high = mid - 1;
  }
}

console.log(result);
