const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const digits = input.split("").map(Number);
const sum = digits.reduce((a, b) => a + b, 0);

if (!digits.includes(0)) {
  console.log(-1);
  return;
}

if (sum % 3 !== 0) {
  console.log(-1);
  return;
}

digits.sort((a, b) => b - a);
console.log(digits.join(""));
