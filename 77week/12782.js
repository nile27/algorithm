const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const T = Number(input[0]);

let a = "",
  b = "";
let swap = 0,
  remain = 0;

for (let t = 1; t <= T; t++) {
  [a, b] = input[t].split(" ");

  let zeroToOne = 0;
  let oneToZero = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      if (a[i] === "0" && b[i] === "1") zeroToOne++;
      else if (a[i] === "1" && b[i] === "0") oneToZero++;
    }
  }

  swap = Math.min(zeroToOne, oneToZero);
  remain = Math.abs(zeroToOne - oneToZero);
  console.log(swap + remain);
}
