// 13909
const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();

console.log(Math.floor(Math.sqrt(Number(input))));



// 9656
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
console.log(Number(input)%2 === 0 ? "SK":"CY")
