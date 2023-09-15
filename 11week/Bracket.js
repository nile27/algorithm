//프로그래머스 예상대진표
function solution(n, a, b) {
  let answer = 1;

  for (let i = 0; i < n; i++) {
    if (Math.ceil(a / 2) === Math.ceil(b / 2)) break;
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }

  return answer;
}
