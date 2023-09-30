// 프로그래머스 124 나라의 숫자

function solution(n) {
  let answer = "";
  let arr = [4, 1, 2];
  let ans = Number(n);

  while (ans > 0) {
    answer = arr[ans % 3] + answer;
    ans = Math.floor((ans - 1) / 3);
  }

  return answer;
}
