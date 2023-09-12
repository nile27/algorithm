// 프로그래머스 피보나치 수

// 시간 초과
function solution(n) {
  if (n === 0) return 0;
  else if (n === 1) return 1;
  else return solution((n - 1) % 1234567) + solution((n - 2) % 1234567);
}

// 정답 코드
function solution(n) {
  let answer = [];
  for (let i = 0; i <= n; i++) {
    if (i == 0) answer.push(0);
    if (i == 1) answer.push(1);
    if (i >= 2) {
      let sum = answer[i - 1] + answer[i - 2];
      answer.push(sum % 1234567);
    }
  }
  let result = answer[n] % 1234567;
  return result;
}
