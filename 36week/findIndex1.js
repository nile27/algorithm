function solution(arr, idx) {
  let ans = arr.slice(idx).findIndex((item) => item === 1);
  return ans === -1 ? -1 : ans + idx;
}
