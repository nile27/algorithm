const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();

let [str1, str2, str3] = ["", "", ""];
let temp = "";
let result = "";

for (let i = 1; i < input.length - 1; i++) {
  for (let j = i + 1; j < input.length; j++) {
    str1 = input.slice(0, i).split("").reverse().join("");
    str2 = input.slice(i, j).split("").reverse().join("");
    str3 = input.slice(j).split("").reverse().join("");
    temp = str1 + str2 + str3;

    if (result.length === 0 || temp < result) {
      result = temp;
    }
  }
}

console.log(result);
