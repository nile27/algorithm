const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split(" ");
const S = parseInt(input[0]);
const K = parseInt(input[1]);

const q = Math.floor(S / K);
const r = S % K;

let result = 1;
for (let i = 0; i < K; i++) {
  if (i < r) {
    result *= q + 1;
  } else {
    result *= q;
  }
}

console.log(result);
