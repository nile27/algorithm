const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);

arr.sort((a, b) => a - b);
const mid = Math.floor((N - 1) / 2);
console.log(arr[mid]);
