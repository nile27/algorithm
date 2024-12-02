const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const arr = input[1].split(' ').map(Number);
const x = parseInt(input[2]);

arr.sort((a, b) => a - b);

let left = 0;
let right = n - 1;
let count = 0;

while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === x) {
        count++;
        left++;
        right--;
    } else if (sum < x) {
        left++;
    } else {
        right--;
    }
}

console.log(count);
