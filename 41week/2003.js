const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
let [N, M] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);
let count = 0;
let ans = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length; j++) {
    count += arr[j];
    if (count > M) break;
    if (count === M) {
      ans++;
      break;
    }
  }
  count = 0;
}

console.log(ans);
