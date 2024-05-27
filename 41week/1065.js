const input = require("fs").readFileSync("./input.txt").toString();
const max = Number(input);
let count = 0;

for (let i = 1; i <= max; i++) {
  let hun = Math.floor(i / 100);
  let ten = Math.floor((i % 100) / 10);
  let one = i % 10;

  if (i < 100) {
    count++;
  } else if (i >= 100 && i < 1000) {
    if (hun - ten === ten - one) {
      count++;
    }
  }
}

console.log(count);
