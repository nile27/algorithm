const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, d, k, c] = input[0].split(' ').map(Number);
const belt = input.slice(1).map(Number);

let sushiCount = new Array(d + 1).fill(0);
let currentType = 0;

for (let i = 0; i < k; i++) {
    if (sushiCount[belt[i]] === 0) {
        currentType++;
    }
    sushiCount[belt[i]]++;
}

let maxTypes = currentType;


for (let i = 0; i < N; i++) {

    let removeSushi = belt[i];
    sushiCount[removeSushi]--;
    if (sushiCount[removeSushi] === 0) {
        currentType--;
    }


    let addSushi = belt[(i + k) % N];
    if (sushiCount[addSushi] === 0) {
        currentType++;
    }
    sushiCount[addSushi]++;
    

    maxTypes = Math.max(maxTypes, currentType + (sushiCount[c] === 0 ? 1 : 0));
}

console.log(maxTypes);
