const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
input.shift();
let [zero, one, temp] = [0, 0, 0];

for (let item of input) {
  zero = 1;
  one = 0;
  for (let i = 1; i <= item; i++) {
    temp = zero;
    zero = one;
    one = zero + temp;
  }

  console.log(`${zero} ${one}`);
}
