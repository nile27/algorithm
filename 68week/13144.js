const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const numCount = new Array(100001).fill(0);

let [start, end] = [0, 0];
let count = 0n;
let current = 0;
let startNum = 0;

while (end < N) {
  current = arr[end];
  numCount[current]++;

  while (numCount[current] > 1) {
    startNum = arr[start];
    numCount[startNum]--;
    start++;
  }

  count += BigInt(end - start + 1);
  end++;
}

console.log(count.toString());
