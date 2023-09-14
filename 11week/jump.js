// 프로그래머스 멀리 뛰기
function solution(n) {
  let answer = 0;
  let [first, second] = [0, 1];
  for (let i = 2; i <= n + 1; i++) {
    answer = (first + second) % 1234567;
    first = second;
    second = answer;
  }
  return answer % 1234567;
}
