const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();
const N = parseInt(input, 10);

function getPrimes(limit) {
    const sieve = Array(limit + 1).fill(true);
    sieve[0] = sieve[1] = false;
    for (let i = 2; i * i <= limit; i++) {
        if (sieve[i]) {
            for (let j = i * i; j <= limit; j += i) {
                sieve[j] = false;
            }
        }
    }

    return sieve.reduce((primes, isPrime, idx) => {
        if (isPrime) primes.push(idx);
        return primes;
    }, []);
}

const primes = getPrimes(N);

let start = 0;
let end = 0;
let sum = 0;
let count = 0;

while (end <= primes.length) {
    if (sum < N) {
        sum += primes[end++];
    } else if (sum > N) {
        sum -= primes[start++];
    } else {
        count++;
        sum += primes[end++];
    }
}

console.log(count);
