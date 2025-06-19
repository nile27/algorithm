const fs = require("fs");
const str = fs.readFileSync("/dev/stdin").toString().trim();

let leftLeg = 0;
let count = 0;

for (let i = 0; i < str.length - 1; i++) {
  if (str[i] === '(' && str[i + 1] === '(') {
    leftLeg++;
  }
  if (str[i] === ')' && str[i + 1] === ')') {
    count += leftLeg;
  }
}

console.log(count);
