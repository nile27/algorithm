const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");
input.shift();
const arr = input[0].split(" ").map(Number);

console.log(Math.min(...arr) * Math.max(...arr));
