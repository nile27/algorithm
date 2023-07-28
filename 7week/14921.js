const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");
let arr = input[1].split(" ").map(Number);
let ans = arr[0] + arr[arr.length - 1];
let [start, end] = [0, arr.length - 1];

while (start < end) {
  let plus = arr[start] + arr[end];

  if (plus > 0) end--;
  else if (plus < 0) start++;
  else {
    ans = 0;
    break;
  }

  if (Math.abs(plus) < Math.abs(ans)) {
    ans = plus;
  }
}

console.log(ans);
