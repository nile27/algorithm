const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");
input.shift();

console.log(input.sort((a, b) => Number(b) - Number(a)).join("\n"));
