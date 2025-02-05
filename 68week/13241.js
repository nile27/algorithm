const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split(" ");
const [a, b] = input;

function gcd(a, b) {
  temp = 0;
  while (b > 0) {
    temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
};

console.log(lcm(a, b));
