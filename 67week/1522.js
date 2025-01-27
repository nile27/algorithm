const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();

const s = input;
const aCount = s.split("").filter((char) => char === "a").length;
const changeB = s + s.slice(0, aCount - 1);

let swap = 10000;
let count = 0;

for (let i = 0; i < aCount; i++) {
  if (changeB[i] === "b") count++;
}

swap = Math.min(swap, count);

for (let i = aCount; i < changeB.length; i++) {
  if (changeB[i - aCount] === "b") count--;
  if (changeB[i] === "b") count++;
  swap = Math.min(swap, count);
}

console.log(swap);
