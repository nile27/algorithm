const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();
const N = Number(input);

const numArr = ["1", "2", "3"];
let found = false;

function testFunc(str) {
  let len = str.length;
  let leftPart = "";
  let rightPart = "";

  for (let i = 1; i <= Math.floor(len / 2); i++) {
    leftPart = str.slice(len - i * 2, len - i);
    rightPart = str.slice(len - i);
    if (leftPart === rightPart) {
      return false;
    }
  }
  return true;
}

function backTrackFunc(N, str = "") {
  if (found) return;

  if (str.length === N) {
    console.log(str);
    found = true;
    return;
  }

  let newStr = "";
  for (let i = 0; i < 3; i++) {
    newStr = str + numArr[i];
    if (testFunc(newStr)) {
      backTrackFunc(N, newStr);
    }
  }
}

backTrackFunc(N);
