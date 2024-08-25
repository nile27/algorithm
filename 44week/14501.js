const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

const n = parseInt(input[0], 10);
const days = [];
const profits = [];
for (let i = 1; i <= n; i++) {
    const [t, p] = input[i].split(' ').map(Number);
    days.push(t);
    profits.push(p);
}

const dp = new Array(n + 1).fill(0);

for (let i = n - 1; i >= 0; i--) {
    const time = days[i];
    const profit = profits[i];

    if (i + time <= n) {
        dp[i] = Math.max(dp[i + 1], profit + dp[i + time]);
    } else {
        dp[i] = dp[i + 1];
    }
}

console.log(dp[0]);
