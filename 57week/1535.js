const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0], 10);
const hp = input[1].split(' ').map(Number);
const happy = input[2].split(' ').map(Number);

const maxHp = 100;
const dp = Array(maxHp).fill(0);

let h = 0, ha = 0, j = 0,max = 0;
for (let i = 0; i < n; i++) {
    h = hp[i];
    ha = happy[i];
    for (j = maxHp - 1; j >= h; j--) {
        dp[j] = Math.max(dp[j], dp[j - h] + ha);
    }
}
for (j = 1; j < maxHp; j++) {
    max = Math.max(max, dp[j]);
}

console.log(max);
