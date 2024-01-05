// 프로그래머스 두 정수 사이의 합

function solution(a, b) {
  let [min, max] = a < b ? [a, b] : [b, a];
  let answer = Array.from({ length: max - min + 1 }, (_, i) => i + min).reduce(
    (acc, sum) => acc + sum
  );

  return answer;
}
