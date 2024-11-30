const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const [N, K] = input.split(' ').map(Number);

const queue = Array.from({ length: N }, (_, i) => i + 1);
const result = [];

let index = 0;

while (queue.length > 0) {
    index = (index + K - 1) % queue.length; 
    result.push(queue.splice(index, 1)[0]); 
}

console.log(`<${result.join(', ')}>`);
