const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let str = "";

let isTrue = true;
let match = "";
let set = new Set();

for (let i = 0; i < input.length; i++) {
  str = input[i];
  if (str === "*") break;

  str.length;
  isTrue = true;

  for (let j = 1; j < str.length; j++) {
    set.clear();

    for (k = 0; k + j < str.length; k++) {
      match = str[k] + str[k + j];

      if (set.has(match)) {
        isTrue = false;
        break;
      }
      set.add(match);
    }

    if (!isTrue) break;
  }

  console.log(`${str} is ${isTrue ? "" : "NOT "}surprising.`);
}
