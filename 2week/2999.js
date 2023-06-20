/**
 * 백준 비밀 이메일
 * https://www.acmicpc.net/problem/2999
 */

const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim();

const Sqrt = () => {
  let [R, C] = [1, 0];
  for (let i = 1; i < parseInt(Math.sqrt(input.length)) + 0.1; i++) {
    if (input.length % i === 0) {
      R = i;
      C = input.length / i;
    }
  }
  return { R, C };
};

console.log(parseInt(Math.sqrt(input.length)));

let arr = Array.from({ length: Sqrt().R }, (_, i) =>
  Array.from({ length: Sqrt().C }, (_, idx) => input[i + idx * Sqrt().R])
);

console.log(Sqrt());
console.log(arr);
console.log(arr.flat().join(""));
