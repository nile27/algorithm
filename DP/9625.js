const fs = require("fs");
const K = parseInt(fs.readFileSync("./input.txt").toString().trim());

let a = 1,
  b = 0,
  temp = 0;

for (let i = 0; i < K; i++) {
  temp = b;
  b = a + b;
  a = temp;
}

console.log(`${a} ${b}`);
