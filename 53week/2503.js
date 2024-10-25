const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0], 10);
const guess = input.slice(1).map(line => {
    const [num, s, b] = line.split(' ').map(Number);
    return { num: num.toString(), s, b };
});

let cnt = 0;

for (let i = 123; i <= 987; i++) {
    const cand = i.toString();
    if (new Set(cand).size !== 3 || cand.includes('0')) continue;

    let isValid = true;
    for (const g of guess) {
        let sCnt = 0;
        let bCnt = 0;

        for (let j = 0; j < 3; j++) {
            if (cand[j] === g.num[j]) {
                sCnt++;
            } else if (g.num.includes(cand[j])) {
                bCnt++;
            }
        }

        if (sCnt !== g.s || bCnt !== g.b) {
            isValid = false;
            break;
        }
    }

    if (isValid) cnt++;
}

console.log(cnt);
