/**
 * 백준 개수 세기
 *
 */

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");
let arr = input[1].split(" ");
let answer = 0;

for (let i of arr) {
  if (Number(input[2]) === Number(i)) answer++;
}

console.log(answer);
