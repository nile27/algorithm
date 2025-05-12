const fs = require("fs");
const S = fs.readFileSync("./input.txt").toString().trim();

let zero = 0;
let one = 0;

for (let ch of S) {
  if (ch === "0") zero++;
  else one++;
}

let removeZero = zero / 2;
let removeOne = one / 2;

let temp = "";
for (let ch of S) {
  if (ch === "1" && removeOne > 0) {
    removeOne--;
  } else {
    temp += ch;
  }
}
let result = "";
removeZero = zero / 2;
for (let i = temp.length - 1; i >= 0; i--) {
  if (temp[i] === "0" && removeZero > 0) {
    removeZero--;
    continue;
  }
  result = temp[i] + result;
}

console.log(result);
