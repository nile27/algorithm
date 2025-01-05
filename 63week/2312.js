const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const T = parseInt(input[0]);
const results = [];

let n = 0,
  p = 0,
  cnt = 0,
  primeCnt = [];

for (let i = 1; i <= T; i++) {
  n = parseInt(input[i]);
  p = 2;
  primeCnt = [];

  while (n > 1) {
    cnt = 0;

    while (n % p === 0) {
      cnt++;
      n /= p;
    }

    if (cnt > 0) {
      primeCnt.push(`${p} ${cnt}`);
    }

    p++;
    if (p * p > n) break;
  }

  if (n > 1) {
    primeCnt.push(`${n} 1`);
  }

  results.push(primeCnt.join("\n"));
}

console.log(results.join("\n"));
