const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

let N = input;
let count = 0;

while (N > 0) {
    if (N % 5 === 0) {
        count += N / 5;
        console.log(count);
        return;
    }
    N -= 2;
    count++;
}

console.log(N < 0 ? -1 : count);
