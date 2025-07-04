const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const T = Number(input.shift());
let n = 0,
  current = [],
  success = [],
  B = 0,
  W = 0;
for (let testCase = 0; testCase < input.length; testCase += 3) {
  [n, current, success] = [
    Number(input[testCase]),
    input[testCase + 1].split(""),
    input[testCase + 2].split(""),
  ];
  [B, W] = [0, 0];
  for (let i = 0; i < n; i++) {
    if (current[i] !== success[i]) {
      if (current[i] === "W") B++;
      else W++;
    }
  }
  console.log(Math.max(B, W));
}
