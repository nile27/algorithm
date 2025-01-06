const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const X = Number(input);

let line = 1;
let sum = 0;

while (sum + line < X) {
  sum += line;
  line++;
}

const offset = X - sum - 1;

if (line % 2 === 0) {
  console.log(`${1 + offset}/${line - offset}`);
} else {
  console.log(`${line - offset}/${1 + offset}`);
}
