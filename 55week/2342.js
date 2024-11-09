const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const lessons = input[1].split(' ').map(Number);

let left = Math.max(...lessons);
let right = lessons.reduce((acc, cur) => acc + cur, 0);
let result = right;

function canDivide(mid) {
    let count = 1;
    let sum = 0;

    for (let lesson of lessons) {
        if (sum + lesson > mid) {
            count++;
            sum = 0;
        }
        sum += lesson;
    }

    return count <= M;
}

while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (canDivide(mid)) {
        result = mid;
        right = mid - 1;
    } else {
        left = mid + 1;
    }
}

console.log(result);
