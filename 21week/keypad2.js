// 프로그래머스 대충 만든 자판

function solution(keymap, targets) {
  var answer = [];
  let table = {};
  let sum = 0;

  for (let i of keymap) {
    for (let j = 0; j < i.length; j++) {
      table[i[j]] === undefined
        ? (table[i[j]] = j)
        : (table[i[j]] = Math.min(table[i[j]], j));
    }
  }

  for (let target of targets) {
    for (let i = 0; i < target.length; i++) {
      sum += table[target[i]] + 1;
    }
    sum ? answer.push(sum) : answer.push(-1);
    sum = 0;
  }

  return answer;
}
