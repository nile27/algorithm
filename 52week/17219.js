const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const sitePasswords = new Map();
let result = [];

for (let i = 1; i <= N; i++) {
    const [site, password] = input[i].split(' ');
    sitePasswords.set(site, password);
}

for (let i = N + 1; i < input.length; i++) {
    result.push(sitePasswords.get(input[i]));
}

console.log(result.join('\n'));
