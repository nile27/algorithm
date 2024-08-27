const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0], 10);
const eggs = input.slice(1).map(line => line.split(' ').map(Number));

let maxBroken = 0;

function backtrack(index) {
    if (index === N) {
        let brokenCount = eggs.filter(egg => egg[0] <= 0).length;
        maxBroken = Math.max(maxBroken, brokenCount);
        return;
    }

    if (eggs[index][0] <= 0) {
        backtrack(index + 1);
        return;
    }

    let isHit = false;

    for (let i = 0; i < N; i++) {
        if (i !== index && eggs[i][0] > 0) {
            eggs[index][0] -= eggs[i][1];
            eggs[i][0] -= eggs[index][1];
            isHit = true;

            backtrack(index + 1);
            
            eggs[index][0] += eggs[i][1];
            eggs[i][0] += eggs[index][1];
        }
    }

    if (!isHit) {
        backtrack(index + 1);
    }
}

backtrack(0);

console.log(maxBroken);
