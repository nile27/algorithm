const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
const [A, B] = [
  input[1].split(" ").map(Number),
  input[2].split(" ").map(Number),
];

let set = [...new Set([...A, ...B])];

console.log(set.length - A.length + set.length - B.length);
