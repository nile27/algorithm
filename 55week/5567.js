const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0], 10);
const m = parseInt(input[1], 10);
const arr = Array.from({ length: n + 1 }, () => []);

for (let i = 2; i < 2 + m; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    arr[a].push(b);
    arr[b].push(a);
}

const set = new Set();
set.add(1);

arr[1].forEach(friend => {
    set.add(friend);
    arr[friend].forEach(f => set.add(f));
});

console.log(set.size - 1);
