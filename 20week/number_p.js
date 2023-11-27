// 프로그래머스_숫자 짝꿍

function solution(X, Y) {
  let table = {};

  for (let i of Y) {
    table[i] === undefined ? (table[i] = 1) : (table[i] += 1);
  }

  let x = X.split("").filter((item) => {
    if (table[item]) {
      table[item]--;
      return item;
    }
    return false;
  });

  let answer = x.sort((a, b) => Number(b) - Number(a)).join("");
  if (answer[0] === "0") answer = "0";

  return x.length === 0 ? "-1" : answer;
}
