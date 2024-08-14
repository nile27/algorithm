const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


const [n, w, L] = input[0].split(" ").map(Number);
const trucks = input[1].split(' ').map(Number);

let bridge = Array(w).fill(0);
let time = 0;
let bridgeWeight = 0;

while (trucks.length > 0 || bridgeWeight > 0) {
    time++;
    bridgeWeight -= bridge.shift();

    if (trucks.length > 0 && bridgeWeight + trucks[0] <= L) {
        let truck = trucks.shift();
        bridge.push(truck);
        bridgeWeight += truck;
    } else {
        bridge.push(0); 
    }
}

console.log(time);
