const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0], 10);
const board = input.slice(1).map(line => line.split(' ').map(Number));

const dp = Array.from({ length: N }, () => Array.from({ length: N }, () => [0, 0, 0]));

dp[0][1][0] = 1;

for (let i = 0; i < N; i++) {
    for (let j = 1; j < N; j++) {
        if (board[i][j] === 1) continue;
        if (j - 1 >= 0) dp[i][j][0] += dp[i][j - 1][0] + dp[i][j - 1][2];
        if (i - 1 >= 0) dp[i][j][1] += dp[i - 1][j][1] + dp[i - 1][j][2];
        if (i - 1 >= 0 && j - 1 >= 0 && board[i - 1][j] === 0 && board[i][j - 1] === 0) {
            dp[i][j][2] += dp[i - 1][j - 1][0] + dp[i - 1][j - 1][1] + dp[i - 1][j - 1][2];
        }
    }
}
const result = dp[N - 1][N - 1][0] + dp[N - 1][N - 1][1] + dp[N - 1][N - 1][2];
console.log(result);
