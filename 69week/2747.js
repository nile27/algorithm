const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const N = Number(input);

function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0, b = 1, temp = 0;
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

console.log(fibonacci(N));
