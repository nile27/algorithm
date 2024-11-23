const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const size = parseInt(input[0]);
const packets = input.slice(1).map(Number);

const queue = [];
let res = [];

for (let pkt of packets) {
    if (pkt === -1) break;
    if (pkt === 0) {
        if (queue.length > 0) {
            queue.shift();
        }
    } else {
        if (queue.length < size) {
            queue.push(pkt);
        }
    }
}
if (queue.length === 0) {
    console.log("empty");
} else {
    console.log(queue.join(' '));
}
