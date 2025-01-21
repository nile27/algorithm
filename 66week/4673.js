const limit = 10000;
const selfNum = new Set(Array.from({ length: limit }, (_, i) => i + 1));
let num = 0;
function d(n) {
  let sum = n;
  const digits = n.toString();
  for (let i = 0; i < digits.length; i++) {
    sum += parseInt(digits[i], 10);
  }
  return sum;
}

for (let i = 1; i <= limit; i++) {
  num = d(i);
  selfNum.delete(num);
}

console.log(Array.from(selfNum).join("\n"));
