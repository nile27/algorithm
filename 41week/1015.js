const { join } = require("path");

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

let [leng, arr] = [Number(input[0]), input[1].split(" ").map(Number)];
let ans = Array.from({ length: leng }, (v) => 0);
let num = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < i; j++) {
    arr[i] >= arr[j] ? num++ : ans[j]++;
  }
  ans[i] = num;

  num = 0;
}
console.log(ans.join(" ").trim());
