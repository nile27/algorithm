const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();

let result = "";
let stack = [];
let isTag = false;

for (let str of input) {
  if (str === "<") {
    while (stack.length) {
      result += stack.pop();
    }
    isTag = true;
    result += str;
  } else if (str === ">") {
    isTag = false;
    result += str;
  } else if (isTag) {
    result += str;
  } else {
    if (str === " ") {
      while (stack.length) {
        result += stack.pop();
      }
      result += str;
    } else {
      stack.push(str);
    }
  }
}

while (stack.length) {
  result += stack.pop();
}

console.log(result);
