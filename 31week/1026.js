const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");
const leng = Number(input.shift());

let [a, b] = [
  input[0]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b),
  input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a),
];
let ans = 0;
for (let i = 0; i < leng; i += 1) {
  ans += a[i] * b[i];
}

console.log(ans);
