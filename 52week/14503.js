const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
let [r, c, d] = input[1].split(' ').map(Number);
const room = input.slice(2).map(line => line.split(' ').map(Number));

const dir = [
    [-1, 0],
    [0, 1],  
    [1, 0], 
    [0, -1] 
];

let count = 0;
let visited = Array.from({ length: N }, () => Array(M).fill(false));

function turnLeft(d) {
    return (d + 3) % 4;
}

function clean() {
    while (true) {
        if (!visited[r][c]) {
            visited[r][c] = true;
            count++;
        }

        let canClean = false;

        for (let i = 0; i < 4; i++) {
            d = turnLeft(d);
            const [dx, dy] = dir[d];
            const nx = r + dx;
            const ny = c + dy;

            if (nx >= 0 && ny >= 0 && nx < N && ny < M && !visited[nx][ny] && room[nx][ny] === 0) {
                r = nx;
                c = ny;
                canClean = true;
                break;
            }
        }

        if (!canClean) {
            const back = (d + 2) % 4;
            const [dx, dy] = dir[back];
            const bx = r + dx;
            const by = c + dy;

            if (bx >= 0 && by >= 0 && bx < N && by < M && room[bx][by] === 0) {
                r = bx;
                c = by;
            } else {
                break;
            }
        }
    }
}

clean();
console.log(count);
