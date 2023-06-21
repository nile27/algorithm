/**
 * 백준 문서 검색
 * https://www.acmicpc.net/problem/1543
 */

const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().split("\n");
const arr = input[0];
const word = input[1];
let ans = 0;
let cnt = 1;
for (let i = 0; i < input[0].length; i += cnt) {
  if (arr.slice(i, word.length + i).includes(word)) {
    ans++;
    cnt = word.length;
  } else {
    cnt = 1;
  }
}

console.log(ans);
