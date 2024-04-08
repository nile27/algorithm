const fs = require("fs");
const input = fs
  .readFileSync("../input.txt")
  .toString()
  .split("\n")
  .map((item) => item.trim());
let str = input.shift().split("");
let str_right = [];

for (let cursor of input) {
  switch (cursor[0]) {
    case "L":
      if (str.length) {
        str_right.push(str.pop());
      }
      break;
    case "D":
      if (str_right.length) {
        str.push(str_right.pop());
      }
      break;
    case "B":
      if (str.length) {
        str.pop();
      }
      break;
    case "P":
      let addStr = cursor.split(" ");
      str.push(addStr[1]);

      break;
  }
}

console.log(str.join("") + str_right.reverse().join(""));
