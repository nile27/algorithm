// 프로그래머스 콜라 문제

function solution(a, b, n) {
  var answer = 0;
  let floor = 0;
  while (n >= a) {
    floor = Math.floor(n / a);
    answer += floor * b;
    n -= floor * a - floor * b;
  }

  return answer;
}
