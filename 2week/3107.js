/**
 * 백준 문서 검색
 * https://www.acmicpc.net/problem/3107
 * .trim()의 중요성........
 */

const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim();
let inputArr = input.split(":");

function fillFunc(arr) {
  if (inputArr[0] === "") {
    let cnt = 8 - (arr.length - 2);
    let fillArr = Array.from({ length: cnt }, () => "0000");
    inputArr = [...fillArr, ...arr.slice(2, inputArr.legnth)];
    return;
  } else {
    let cnt = 8 - (arr.length - 1);
    let blank = arr.indexOf("");
    let fillArr = Array.from({ length: cnt }, () => "0000");
    inputArr = [...arr.slice(0, blank), ...fillArr, ...arr.slice(blank + 1)];
  }
}

if (inputArr.length < 8 || inputArr.includes("")) fillFunc(inputArr);

for (let i = 0; i < inputArr.length; i++) {
  while (inputArr[i].length < 4) {
    inputArr[i] = "0" + inputArr[i];
  }
}

console.log(inputArr.join(":"));
