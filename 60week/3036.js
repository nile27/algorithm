const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [A, B] = input.split(":").map(Number);

function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

const div = gcd(A, B);

const a = A / div;
const b = B / div;

console.log(`${a}:${b}`);
