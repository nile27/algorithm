// 프로그래머스 3*n 타일링
function solution(n) {
  if (n % 2 === 1) {
    return 0;
  }
  let arr = [3, 11];
  n = n / 2 - 1;

  for (let i = 2; i <= n; i++) {
    arr[i] =
      ((arr.reduce((a, b) => a + b, 0) * 2) % 1000000007) +
      (arr[i - 1] % 1000000007) +
      2;
  }

  return arr[n] % 1000000007;
}
