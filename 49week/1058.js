const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0], 10);
const graph = input.slice(1).map(line => line.split(''));

let maxFriends = 0;

for (let i = 0; i < N; i++) {
    let count = 0;
    
    for (let j = 0; j < N; j++) {
        if (i === j) continue;

        if (graph[i][j] === 'Y') {
            count++;
        } else {
            for (let k = 0; k < N; k++) {
                if (graph[i][k] === 'Y' && graph[k][j] === 'Y') {
                    count++;
                    break;
                }
            }
        }
    }
    
    maxFriends = Math.max(maxFriends, count);
}

console.log(maxFriends);
