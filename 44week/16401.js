const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const snacks = input[1].split(' ').map(Number);

let left = 1;
let right = Math.max(...snacks);
let answer = 0;

while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let count = 0;

    for (let snack of snacks) {
        count += Math.floor(snack / mid);
    }

    if (count >= N) {
        answer = mid;
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}

console.log(answer);
