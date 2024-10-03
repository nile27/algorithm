const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const N = input[0];
const K = input[1];

const isPrime = new Array(N + 1).fill(true);
isPrime[0] = isPrime[1] = false; 

let count = 0;

for (let i = 2; i <= N; i++) {
    if (isPrime[i]) {
        for (let j = i; j <= N; j += i) {
            if (isPrime[j]) {
                isPrime[j] = false;
                count++;
                if (count === K) {
                    console.log(j);
                    return;
                }
            }
        }
    }
}
