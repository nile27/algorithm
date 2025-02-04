const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split(" ");

const A = BigInt(input[0]);
const B = BigInt(input[1]);

let count = 0;

function MinsooFunc(currentNum) {
  const num = BigInt(currentNum);
  if (num > B) return;
  if (num >= A && num <= B) count++;

  MinsooFunc(currentNum + "4");
  MinsooFunc(currentNum + "7");
}

MinsooFunc("4");
MinsooFunc("7");

console.log(count);
