const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

let arr = input[1].split(" ").map(Number);
let dp = [];

function search(start, end, n) {
  let mid = 0;

  while (start < end) {
    mid = parseInt((start + end) / 2);
    dp[mid] < n ? (start = mid + 1) : (end = mid);
  }
  return end;
}

dp.push(arr[0]);

for (let i = 1; i < arr.length; i++) {
  if (dp[dp.length - 1] < arr[i]) {
    dp.push(arr[i]);
  } else {
    let idx = search(0, dp.length - 1, arr[i]);
    dp[idx] = arr[i];
  }
}
console.log(dp.length);
