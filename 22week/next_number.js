/** LV2_다음 큰 숫자
 */

function solution(n) {
  let binary = n
    .toString(2)
    .split("")
    .filter((item) => (item === "1" ? item : null)).length;
  let result = n + 1;
  while (true) {
    let leng = result
      .toString(2)
      .split("")
      .filter((item) => (item === "1" ? item : null)).length;
    if (leng === binary) return result;
    else result++;
  }
}
