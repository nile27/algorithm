const fs = require("fs");
const input = Number(fs.readFileSync("./input.txt").toString().trim());

let [current, next, i] = [1, 7, 1];

if (input === 1) console.log(1);
else {
  while (true) {
    if (input > current && input <= next) {
      console.log(i + 1);
      break;
    }
    i++;
    [current, next] = [next, next + 6 * i];
  }
}
