const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();

let N = BigInt(input);
let result = BigInt(0);
let power = BigInt(1);

while (N > 0) {
  if (N % BigInt(2) === BigInt(1)) {
    result += power;
  }
  N = N / BigInt(2);
  power *= BigInt(3);
}

console.log(result.toString());
