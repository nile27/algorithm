const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split(" ");

function minMax(num) {
  let min = "";
  let max = "";
  for (let i of num) {
    if (i === "5" || i === "6") {
      min += 5;
      max += 6;
    } else {
      min += i;
      max += i;
    }
  }
  return [Number(min), Number(max)];
}
let A = minMax(input[0]);
let B = minMax(input[1]);

console.log(A[0] + B[0], A[1] + B[1]);
