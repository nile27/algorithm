const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const T = Number(input[0]);
const results = [];
let n = 0;
let open = 0;

for (let i = 1; i <= T; i++) {
  n = Number(input[i]);
  open = Math.floor(Math.sqrt(n));
  results.push(open);
}

console.log(results.join("\n"));
