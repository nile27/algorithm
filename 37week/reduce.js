function solution(a, d, included) {
  let answer = included.reduce((acc, include, idx) => {
    return include ? acc + a + d * idx : acc;
  }, 0);

  return answer;
}
