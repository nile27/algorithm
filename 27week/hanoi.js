// 프로그래머스 하노이의 탑
function solution(n) {
  var answer = [];
  function quad(n, from, to, other) {
    if (n === 0) return;
    quad(n - 1, from, other, to);
    answer.push([from, to]);
    quad(n - 1, other, to, from);
  }
  quad(n, 1, 3, 2);
  return answer;
}
