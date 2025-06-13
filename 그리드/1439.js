const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();

let count0 = 0;
let count1 = 0;

let prev = input[0];
if (prev === "0") count0++;
else count1++;

for (let i = 1; i < input.length; i++) {
  if (input[i] !== prev) {
    if (input[i] === "0") count0++;
    else count1++;
    prev = input[i];
  }
}

console.log(Math.min(count0, count1));
