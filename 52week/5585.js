const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let change = 1000 - parseInt(input, 10);
const coins = [500, 100, 50, 10, 5, 1];
let count = 0;

for (let coin of coins) {
    count += Math.floor(change / coin);
    change %= coin;
}

console.log(count);
