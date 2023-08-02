const fs = require("fs");
const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.replace("\r", "").split(" "));
input.shift();
let deque = [];
let ans = [];

for (let i of input) {
  switch (i[0]) {
    case "push_front":
      deque.unshift(i[1]);
      break;

    case "push_back":
      deque.push(i[1]);
      break;

    case "pop_front":
      deque.length !== 0 ? ans.push(deque.shift()) : ans.push(-1);
      break;

    case "pop_back":
      deque.length !== 0 ? ans.push(deque.pop()) : ans.push(-1);
      break;

    case "size":
      ans.push(deque.length);
      break;

    case "empty":
      deque.length !== 0 ? ans.push(0) : ans.push(1);
      break;

    case "front":
      deque.length !== 0 ? ans.push(deque[0]) : ans.push(-1);
      break;

    case "back":
      deque.length !== 0 ? ans.push(deque[deque.length - 1]) : ans.push(-1);
  }
}

console.log(ans.join("\n"));
