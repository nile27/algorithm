const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);
const table = {};
let ext = "";
let fileName = "";
let splitName = "";

for (let i = 1; i <= N; i++) {
  fileName = input[i].trim();
  splitName = fileName.split(".");

  if (splitName.length > 1) {
    ext = splitName.pop();
    table[ext] = (table[ext] || 0) + 1;
  }
}

Object.keys(table)
  .sort()
  .forEach((ext) => console.log(`${ext} ${table[ext]}`));
