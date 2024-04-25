function solution(number, n, m) {
  var answer = (number % n) + (number % m);
  return answer === 0 ? 1 : 0;
}
