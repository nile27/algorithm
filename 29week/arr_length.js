// 프로그래머스 배열의 길이에 따라 다른 연산하기
function solution(arr, n) {
  let num = arr.length % 2 !== 0 ? 0 : 1;

  for (let i = num; i < arr.length; i += 2) {
    arr[i] = arr[i] + n;
  }

  return arr;
}
