const fs = require("fs");
const N = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

function solution(n) {
  let count = 0;
  let x = 5;

  while (n >= x) {
    count += Math.floor(n / x);
    x *= 5;
  }

  return count;
}

console.log(solution(N));
