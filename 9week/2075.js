const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const n = Number(input.shift()[0]);

let queue = input
  .shift()
  .map(Number)
  .sort((a, b) => b - a);

function queueSort(num) {
  for (let i = 0; i < n; i++) {
    if (queue[i] < num) {
      queue.splice(i, 0, num);
      queue.pop();
      break;
    }
  }
}

while (input.length > 0) {
  for (let j = 0; j < n; j++) {
    if (queue[queue.length - 1] < Number(input[0][j])) {
      queueSort(Number(input[0][j]));
    }
  }
  input.shift();
}

console.log(queue[queue.length - 1]);
