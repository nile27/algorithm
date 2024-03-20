/**
 * 백준 알파벳 개수
 * https://www.acmicpc.net/problem/10808
 */

const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim();
const answer = Array.from({ length: 26 }, (v, i) => 0);

for (let i of input) {
  answer[i.charCodeAt(0) - 97]++;
}

console.log(answer.join(" ").trim());
