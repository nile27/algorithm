const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0], 10);
const arr = input.slice(1, N + 1).map(Number);
let [a,b,c] = [0,0,0]

if (N < 3) {
    console.log(-1);
    return;
}


arr.sort((a, b) => b - a);

let ans = -1;
for (let i = 0; i < N - 2; i++) {
     a = arr[i];
     b = arr[i + 1];
     c = arr[i + 2];

    if (b + c > a) {
        ans = a + b + c;
        break;
    }
}

console.log(ans);
