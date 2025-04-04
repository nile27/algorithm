const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split(" ");

const N = BigInt(input[0]);
const M = BigInt(input[1]);

const factorial = (num) => {
  if (num <= 1n) return 1n;
  return num * factorial(num - 1n);
};
let answer = factorial(N) / (factorial(M) * factorial(N - M));

console.log(answer.toString());
