const fs = require("fs");
const [A, P] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const arr = [];
const set = new Set();
let str = "";
let current = A;
let next = 0;
let d = 0;

while (!set.has(current)) {
  set.add(current);
  arr.push(current);

  next = 0;
  str = current.toString();
  for (let i = 0; i < str.length; i++) {
    d = Number(str[i]);
    next += d ** P;
  }

  current = next;
}

console.log(arr.indexOf(current));
