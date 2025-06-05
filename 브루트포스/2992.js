const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const visit = Array.from({ length: input.length }, () => false);
let result = null;
const inputNum = Number(input);

function backtrack(numStr) {
  if (numStr.length === input.length) {
    const num = Number(numStr);
    if (num > inputNum) {
      if (result === null || num < result) {
        result = num;
      }
    }
    return;
  }

  for (let i = 0; i < input.length; i++) {
    if (!visit[i]) {
      visit[i] = true;
      backtrack(numStr + input[i]);
      visit[i] = false;
    }
  }
}

backtrack("");

console.log(result === null ? 0 : result);
