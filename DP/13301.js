const fs = require("fs");
const N = parseInt(fs.readFileSync("./input.txt").toString().trim());

if (N === 1) {
  console.log(4);
  return;
}

const fib = [1n, 1n];

for (let i = 2; i < N; i++) {
  fib[i] = fib[i - 1] + fib[i - 2];
}

const result = (fib[N - 1] * 2n + fib[N - 2]) * 2n;
console.log(result.toString());
