const fs = require("fs");
const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const sqrt = (num) => {
  const numSqrt = Math.sqrt(num);
  for (let i = 2; i <= numSqrt; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

let start = input[0] === 1 ? 2 : input[0];
let ans = [];

for (let i = start; i <= input[1]; i++) {
  if (sqrt(i)) ans.push(i);
}
console.log(ans.join("\n"));
