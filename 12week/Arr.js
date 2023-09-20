// 프로그래머스 나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
  let answer = arr.filter((item) => item % divisor === 0).sort((a, b) => a - b);

  return answer.length === 0 ? [-1] : answer;
}
