const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const INF = Infinity;
const graph = Array.from({ length: N + 1 }, () => Array(N + 1).fill(INF));

let a, b, k, i, j;
let baconSum;
let minBacon = INF;
let person = 0;

for (i = 1; i <= N; i++) {
    graph[i][i] = 0;
}

for (i = 1; i <= M; i++) {
    [a, b] = input[i].split(' ').map(Number);
    graph[a][b] = 1;
    graph[b][a] = 1;
}

for (k = 1; k <= N; k++) {
    for (i = 1; i <= N; i++) {
        for (j = 1; j <= N; j++) {
            graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
        }
    }
}

for (i = 1; i <= N; i++) {
    baconSum = graph[i].slice(1).reduce((acc, cur) => acc + cur, 0);
    if (baconSum < minBacon) {
        minBacon = baconSum;
        person = i;
    }
}

console.log(person);
