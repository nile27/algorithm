const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(Number).sort((a, b) => a - b);

let left = 0;
let right = 0;
let minDiff = Infinity;

while (right < N) {
    const diff = arr[right] - arr[left];

    if (diff >= M) {
        minDiff = Math.min(minDiff, diff);
        left++;
    } else {
        right++;
    }
}

console.log(minDiff);
