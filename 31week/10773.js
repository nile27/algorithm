const fs = require("fs");
const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const inputLeng = input.shift();

let stack = [];
let ans = 0;

for (let item of input) {
  if (item === 0 && stack.length) {
    ans -= stack.pop();
  } else if (item !== 0) {
    ans += item;
    stack.push(item);
  }
}

console.log(ans);
