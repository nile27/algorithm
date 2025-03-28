const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, S] = input[0].split(" ").map(Number);
const location = input[1].split(" ").map(Number);

const diff = location.map((pos) => Math.abs(pos - S));

function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}
let answer = diff[0];
for (let i = 1; i < diff.length; i++) {
  answer = gcd(answer, diff[i]);
}

console.log(answer);
