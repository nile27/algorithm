const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = parseInt(input[0]);
let res = [];

for (let i = 1; i <= T; i++) {
    const n = parseInt(input[i * 2 - 1], 10);
    const cards = input[i * 2].split(' ');
    let deque = [cards[0]];

    for (let j = 1; j < n; j++) {
        if (cards[j] <= deque[0]) {
            deque.unshift(cards[j]);
        } else {
            deque.push(cards[j]);
        }
    }

    res.push(deque.join(''));
}

console.log(res.join('\n'));
