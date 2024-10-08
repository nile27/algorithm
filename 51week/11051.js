const fs = require('fs');
const [N, K] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const MOD = 10007;

const fact = Array(N + 1).fill(1);

for (let i = 2; i <= N; i++) {
    fact[i] = (fact[i - 1] * i) % MOD;
}

function bino(n, k) {
    return (fact[n] * modInv(fact[k], MOD) % MOD * modInv(fact[n - k], MOD) % MOD) % MOD;
}

function modInv(a, p) {
    return power(a, p - 2, p);
}

function power(a, b, p) {
    let res = 1;
    while (b > 0) {
        if (b % 2 === 1) res = (res * a) % p;
        a = (a * a) % p;
        b = Math.floor(b / 2);
    }
    return res;
}

console.log(bino(N, K));
