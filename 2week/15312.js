/**
 * 백준 이름 궁합
 * https://www.acmicpc.net/problem/15312
 */

const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");
const [A, B] = [input[0], input[1]];
const writeArr = [
  3, 2, 1, 2, 3, 3, 2, 3, 3, 2, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 2, 1,
];
function asciiFunc(str, str1) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(String(writeArr[str[i].charCodeAt(0) - 65]));
    arr.push(String(writeArr[str1[i].charCodeAt(0) - 65]));
  }
  return arr;
}

let ans = asciiFunc(A, B);

while (ans.length > 2) {
  let cnt = ans.length;

  for (let i = 0; i < cnt - 1; i++) {
    ans.push(String(Number(ans.shift()) + Number(ans[0])));
    if (ans[ans.length - 1].length > 1)
      ans[ans.length - 1] = ans[ans.length - 1][1];
  }
  ans.shift();
}

console.log(ans.join(""));
