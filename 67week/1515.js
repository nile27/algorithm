const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();

let n = 0;
let idx = 0;
let numStr = "";

while (idx < input.length) {
  n++;
  numStr = n.toString();
  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] === input[idx]) {
      idx++;
      if (idx === input.length) {
        console.log(n);
        return;
      }
    }
  }
}
