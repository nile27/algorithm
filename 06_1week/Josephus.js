/**
 * 백준 요세푸스 문제
 * https://www.acmicpc.net/problem/1158
 */

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split(" ");
const N = Number(input[0]);
let K = Number(input[1]);
let j = 0;
let cnt = 0;
let answer = [];
let arr = Array.from({ length: N }, (v, i) => i + 1);

while (answer.length !== N) {
  if (j === N) {
    j = 0;
  }
  if (arr[j] !== 0) cnt++;
  if (cnt === K) {
    answer.push(arr[j]);
    arr[j] = 0;
    cnt = 0;
  }

  j++;
}

console.log("<" + answer.join(", ") + ">");
