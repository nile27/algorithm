const fs = require("fs");
const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
input.shift();

let arr = [];
let ans = 0;

let getGCD = (a, b) => {
  if (b === 0) {
    return a;
  } else {
    return getGCD(b, a % b);
  }
};

for (let i = 0; i < input.length - 1; i += 1) {
  arr.push(Math.abs(input[i + 1] - input[i]));
}

let dis = arr[0];

for (let i = 0; i < arr.length; i++) {
  dis = getGCD(dis, arr[i]);
}

for (let i of arr) {
  if (dis !== i) {
    ans += i / dis - 1;
  }
}

console.log(ans);
