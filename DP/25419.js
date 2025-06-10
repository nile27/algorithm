const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split(" ");

let [A, K] = input.map(Number);
let count = 0;

while (K !== A) {
  if (Math.ceil(K / 2) >= A) {
    if (K % 2 === 0) K = K / 2;
    else K--;
  } else K--;
  count += 1;
}

console.log(count);
