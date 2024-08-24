const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const sequence = input[1].split(' ').map(Number);

let maxLength = 0;
let oddCount = 0;
let left = 0;

for (let right = 0; right < n; right++) {
    if (sequence[right] % 2 !== 0) {
        oddCount++;
    }

    while (oddCount > k) {
        if (sequence[left] % 2 !== 0) {
            oddCount--;
        }
        left++;
    }

    maxLength = Math.max(maxLength, right - left + 1 - oddCount);
}

console.log(maxLength);
