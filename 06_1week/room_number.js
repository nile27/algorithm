/**
 * 백준 방 번호
 * https://www.acmicpc.net/problem/1475
 */

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();

let [j, answer] = [0, 0];
let keyArr = Array.from({ length: 10 }, (v) => 0);

while (j <= 9) {
  for (let i of input) {
    if (Number(i) === j) keyArr[j]++;
  }
  j++;
}

[keyArr[6], keyArr[9]] = [Math.ceil((keyArr[6] + keyArr[9]) / 2), 0];

answer = Math.max(...keyArr);

console.log(answer);
