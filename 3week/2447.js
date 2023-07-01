/**
 * 백준 문서 검색
 * https://www.acmicpc.net/problem/2447
 * 블로그 주소:
 * https://velog.io/@nile27/%EB%B0%B1%EC%A4%802447%EB%B2%88
 */
let fs = require("fs");
let input = Number(fs.readFileSync("../input.txt").toString());
let str = "";

function star(i, j) {
  if (i % 3 === 1 && j % 3 === 1) {
    str += " ";
  } else {
    if (Math.floor(i / 3) === 0 && Math.floor(j / 3) === 0) {
      str += "*";
    } else {
      star(Math.floor(i / 3), Math.floor(j / 3));
    }
  }
}

for (let i = 0; i < input; i++) {
  for (let j = 0; j < input; j++) {
    star(i, j);
  }

  str += "\n";
}
console.log(str.trim());
