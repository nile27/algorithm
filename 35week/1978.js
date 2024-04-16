const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");
input.shift();

const arr = input[0].split(" ");
let ans = 0;

function prime(num) {
  if (num <= 1) {
    return false;
  } else if (num === 2) {
    return true;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

for (let item of arr) {
  if (prime(item)) {
    ans += 1;
    console.log(item);
  }
}

console.log(ans, Math.sqrt(14));
