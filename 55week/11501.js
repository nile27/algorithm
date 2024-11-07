const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = parseInt(input[0], 10);
let result = [];

let N, prices, maxPrice, profit;

for (let i = 1; i <= T; i++) {
    N = parseInt(input[i * 2 - 1], 10);
    prices = input[i * 2].split(' ').map(Number);
    maxPrice = 0;
    profit = 0;

    for (let j = N - 1; j >= 0; j--) {
        if (prices[j] > maxPrice) {
            maxPrice = prices[j];
        } else {
            profit += maxPrice - prices[j];
        }
    }

    result.push(profit);
}

console.log(result.join('\n'));
