const fs = require("fs");
const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" "));
const [N, M] = input.shift().map(Number);
const arr = input[0].map((item) => Number(item));
let queue = Array.from({ length: N }, (_, i) => i + 1);
let [ans, mid] = [0, 0];

for (let i = 0; i < M; i++) {
  mid = parseInt(queue.length / 2);
  if (mid < queue.findIndex((item) => arr[i] === item)) {
    while (arr[i] !== queue[0]) {
      queue.unshift(queue.pop());
      ans++;
    }
  } else {
    while (arr[i] !== queue[0]) {
      queue.push(queue.shift());
      ans++;
    }
  }

  queue.shift();
}
console.log(ans);
