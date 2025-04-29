const fs = require("fs");
const [S, T] = fs.readFileSync("./input.txt").toString().trim().split("\n");
let s = S.trim();
let t = T.split("");

while (t.length > s.length) {
  if (t[t.length - 1] === "A") {
    t.pop();
  } else if (t[t.length - 1] === "B") {
    t.pop();
    t.reverse();
  } else {
    return 0;
  }
}
let result = t.join("");

if (result === s) {
  console.log(1);
} else {
  console.log(0);
}
