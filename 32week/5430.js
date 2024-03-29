const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");
const test_case = input.shift();

let func = "";
let arr = [];
let ans = [];
let [start, end] = [0, 0];
let trigger = true;
let reverse = false;

for (let i = 0; i < test_case * 3 - 1; i += 3) {
  func = input[i];
  end = Number(input[i + 1]);
  arr = end ? input[i + 2].slice(1, input[i + 2].length - 1).split(",") : [];

  for (let j = 0; j < func.length; j++) {
    if (arr.length === 0 && func[j] === "D") {
      trigger = false;
      break;
    }
    if (start <= end) {
      switch (func[j]) {
        case "R":
          reverse = !reverse;
          break;
        case "D":
          reverse ? (end -= 1) : (start += 1);
          break;
        default:
          break;
      }
    } else {
      trigger = false;
      break;
    }
  }
  if (!trigger || (start > end && end > 0)) {
    trigger = true;
    ans.push("error");
  } else {
    ans.push(
      reverse
        ? `[${arr.slice(start, end).reverse()}]`
        : `[${arr.slice(start, end)}]`
    );
  }
  start = 0;
  reverse = false;
}

console.log(ans.join("\n"));
