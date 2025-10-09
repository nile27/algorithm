const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [A, B] = input[0].split(" ").map(Number);
const m = Number(input[1]);
const arr = input[2].split(" ").map(Number);

const sum = arr.reduce((acc, cur) => acc * A + cur, 0);

const result = [];
let n = sum;
if (sum === 0) console.log(0);
else {
  while (n > 0) {
    result.push(n % B);
    n = Math.floor(n / B);
  }
  console.log(result.reverse().join(" "));
}
