const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [keyword, N] = [input[0].trim(), Number(input[1])];
const arr = input.slice(2).map((item) => item.trim());
let result = 0;
let plusStr = "";

for (let str of arr) {
  plusStr = str + str.slice(0, keyword.length);

  for (let i = 0; i < str.length; i++) {
    if (plusStr[i] === keyword[0]) {
      if (plusStr.slice(i, i + keyword.length) === keyword) {
        result++;
        break;
      }
    }
  }
}
console.log(result);
