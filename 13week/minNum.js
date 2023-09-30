// 프로그래머스 가장 작은 수

function solution(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  arr.splice(arr.indexOf(min), 1);

  return max === min ? [-1] : arr;
}
