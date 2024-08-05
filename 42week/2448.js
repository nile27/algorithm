function drawStar(n) {
  if (n === 3) {
    return ["  *  ", " * * ", "*****"];
  }

  const prevPattern = drawStar(n / 2);
  const pattern = [];

  const len = prevPattern.length;

  for (let i = 0; i < len; i++) {
    pattern.push(" ".repeat(len) + prevPattern[i] + " ".repeat(len));
  }

  for (let i = 0; i < len; i++) {
    pattern.push(prevPattern[i] + " " + prevPattern[i]);
  }

  return pattern;
}

function solve(input) {
  const n = parseInt(input);
  const result = drawStar(n);
  console.log(result.join("\n"));
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
solve(input);
