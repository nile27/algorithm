function solution(numbers, k) {
  return ((2 * (k - 1)) % numbers[numbers.length - 1]) + 1;
}
