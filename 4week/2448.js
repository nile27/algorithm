const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");
const n = Number(input[0]);

function top(x) {
  const blank = " ".repeat((x[0].length + 1) / 2);
  return x.map((i) => blank + i + blank);
}

function bottom(x) {
  return x.map((i) => i + " " + i);
}

function star(n) {
  if (n === 3) {
    return ["  *  ", " * * ", "*****"];
  }
  n = Math.floor(n / 2);
  let x = star(n);
  return [...top(x), ...bottom(x)];
}

console.log(star(n).join("\n"));
