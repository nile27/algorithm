const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [S, E, Q] = input[0].split(' ');
const sTime = S.split(':').map(Number);
const eTime = E.split(':').map(Number);
const qTime = Q.split(':').map(Number);

const attend = new Set();
const res = new Set();

for (let i = 1; i < input.length; i++) {
    const [time, name] = input[i].split(' ');
    const [hh, mm] = time.split(':').map(Number);

    if (hh < sTime[0] || (hh === sTime[0] && mm <= sTime[1])) {
        attend.add(name);
    }

    if ((hh > eTime[0] || (hh === eTime[0] && mm >= eTime[1])) && 
        (hh < qTime[0] || (hh === qTime[0] && mm <= qTime[1]))) {
        if (attend.has(name)) {
            res.add(name);
        }
    }
}

console.log(res.size);
