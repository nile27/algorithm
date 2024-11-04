const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const maze = input.slice(1).map(line => line.split(' ').map(Number));

const dp = Array.from({ length: N }, () => Array(M).fill(0));

dp[0][0] = maze[0][0];

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (i > 0) dp[i][j] = Math.max(dp[i][j], dp[i - 1][j] + maze[i][j]);
        if (j > 0) dp[i][j] = Math.max(dp[i][j], dp[i][j - 1] + maze[i][j]);
    }
}

console.log(dp[N - 1][M - 1]);
