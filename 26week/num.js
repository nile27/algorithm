// 프로그래머스 자릿수 더하기

function solution(N) {
  var answer = 0;
  let n = String(N);
  for (let i = 0; i < n.length; i++) {
    answer += Number(n[i]);
  }

  return answer;
}
