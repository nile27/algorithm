const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ");
const [A, B] = [Number(input[0]), Number(input[1])];
let cnt = 0;
let result = 0;
const divFunc = (num) => {
  let div = 2;
  let arr = [];

  while (num >= 2) {
    if (num % div === 0) {
      arr.push(div);
      num = num / div;
    } else div += 1;
  }

  return arr.length;
};

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num % 2 === 0) return num === 2 ? true : false;

  let sqrt = Number(Math.sqrt(num));

  for (let i = 3; i <= sqrt; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

for (let i = A; i <= B; i++) {
  cnt = divFunc(i);

  if (isPrime(cnt)) result += 1;
}

console.log(result);
