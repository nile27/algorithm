const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split(" ");

let a = input[0];
let b = input[1];
while (a % b !== 0) {
  let r = a % b;
  if (r !== 0) {
    a = b;
    b = r;
  }
}
console.log(b);
console.log((input[0] * input[1]) / b);
