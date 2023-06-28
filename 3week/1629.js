/**
 * 백준 문서 검색
 * https://www.acmicpc.net/problem/1629
 */

const fs = require("fs");
const [A, B, C] = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

function Power(x, y) {
  if (y === BigInt(0)) return BigInt(1);

  let pow = Power(x, BigInt(parseInt(y / BigInt(2))));
  if (y % BigInt(2) === BigInt(0)) {
    return (pow * pow) % C;
  } else {
    return (pow * pow * x) % C;
  }
}
console.log(parseInt(Power(A, B)));
