const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

const t = parseInt(input[0], 10);
const results = [];

for (let i = 1; i <= t; i++) {
    const [n, m] = input[i].split(' ').map(Number);
    
    // 조합 계산: mCn
    let result = 1;
    for (let j = 0; j < n; j++) {
        result *= (m - j);
        result /= (j + 1);
    }
    
    results.push(result);
}

console.log(results.join('\n'));
