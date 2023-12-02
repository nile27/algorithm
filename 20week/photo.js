// 프로그래머스 추억 점수
function solution(name, yearning, photo) {
  var answer = [];
  let table = {};
  let sum = 0;

  for (let i = 0; i < name.length; i++) {
    table[name[i]] = yearning[i];
  }

  for (let arr of photo) {
    for (let item of arr) {
      if (table[item] !== undefined) {
        sum += table[item];
      }
    }
    answer.push(sum);
    sum = 0;
  }

  return answer;
}
