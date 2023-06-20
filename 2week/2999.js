/**
 * 백준 비밀 이메일
 * https://www.acmicpc.net/problem/2999
 */

const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("");

const Sqrt = () => {
  let [R, C] = [1, 1];
  for (let i = 1; i <= Math.ceil(Math.sqrt(input.length)); i++) {
    if (input.length % i === 0) {
      R = i;
      C = input.length / i;
    }
  }
  return { R, C };
};
console.log(Sqrt());
let arr = Array.from({ length: Sqrt().C }, (_, i) =>
  Array.from({ length: Sqrt().R }, (_, idx) => input[i + idx * Sqrt().C])
);

console.log(arr.flat().join(""));
