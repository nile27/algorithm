const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");
const numberArr = input[1].split(" ").map(Number);

let arr = Array.from(new Set(numberArr));

console.log(arr.sort((a, b) => a - b).join(" "));
