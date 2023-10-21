// 프로그래머스 가장 가까운 같은 글자.js
function solution(s) {
  var answer = [];
  let table = {};

  for (let i = 0; i < s.length; i++) {
    if (table[s[i]] === undefined) {
      table[s[i]] = i;
      answer.push(-1);
    } else {
      answer.push(i - table[s[i]]);
      table[s[i]] = i;
    }
  }
  return answer;
}
