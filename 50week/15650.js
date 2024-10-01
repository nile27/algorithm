const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const [N, M] = input;
const result = [];
const ans = [];

function back(start) {
    if (ans.length === M) {
        result.push(ans.join(' '));
        return;
    }

    for (let i = start; i <= N; i++) {
        ans.push(i);
        back(i + 1);
        ans.pop(); 
    }
}

back(1);
console.log(result.join('\n'));
