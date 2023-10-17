// 프로그래머스 내적

function solution(a, b) {
  let [answer, leng] = [0, a.length - 1];

  for (let i = 0; i < leng; i++) {
    answer += a[i] * b[i];
  }
  return answer + a[leng] * b[leng];
}
