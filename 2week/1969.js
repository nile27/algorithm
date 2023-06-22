/**
 * 백준 문서 검색
 * https://www.acmicpc.net/problem/1969
 */

const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().split("\n");
const [N, M] = [input[0].split(" ")[0], input.shift().split(" ")[1]];
const diction = { A: 0, T: 3, G: 2, C: 1 };
let table = {};
let [ans, cnt] = [[], 0];
let j = 0;
const maxFunc = (table) => {
  let [maxStr, maxNum, count] = ["", 0, 0];
  for (let i of table) {
    count += i[1];
    if (maxNum < i[1]) {
      [maxStr, maxNum] = [i[0], i[1]];
    } else if (maxNum === i[1] && diction[i[0]] < diction[maxStr]) {
      maxStr = i[0];
    }
  }

  cnt += count - maxNum;
  return maxStr;
};

while (ans.length < M) {
  for (let i = 0; i < N; i++) {
    if (!table[input[i][j]]) {
      table[input[i][j]] = 1;
    } else table[input[i][j]]++;
  }
  ans.push(maxFunc(Object.entries(table)));
  table = {};
  j += 1;
}
console.log(ans.join(""));
console.log(cnt);
