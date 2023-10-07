// 프로그래머스 [3차] n진수 게임
function solution(n, t, m, p) {
  let answer = "";
  let sum = "";
  let i = 0;
  let j = 0;

  while (sum.length < t * m) {
    sum += i.toString(n).toUpperCase();
    i++;
  }

  while (answer.length < t) {
    answer += sum[j + p - 1];
    j += m;
  }

  return answer;
}
