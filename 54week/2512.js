const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0], 10);
const req = input[1].split(' ').map(Number);
const budget = parseInt(input[2], 10);

let left = 0;
let right = Math.max(...req);
let result = 0;

while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let total = req.reduce((acc, r) => acc + Math.min(r, mid), 0);

    if (total <= budget) {
        result = mid;
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}

console.log(result);
