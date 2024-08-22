const fs = require('fs');
const input = fs.readFileSync("./input.txt").toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const space = input.slice(1).map(line => line.split(' ').map(Number));

const dp = Array.from({ length: N }, () => Array.from({ length: M }, () => Array(3).fill(Infinity)));


for (let j = 0; j < M; j++) {
    dp[0][j][0] = dp[0][j][1] = dp[0][j][2] = space[0][j];
}


for (let i = 1; i < N; i++) {
    for (let j = 0; j < M; j++) {
        
        if (j > 0) {
            dp[i][j][0] = Math.min(dp[i][j][0], dp[i - 1][j - 1][1], dp[i - 1][j - 1][2]) + space[i][j];
        }
        
        dp[i][j][1] = Math.min(dp[i][j][1], dp[i - 1][j][0], dp[i - 1][j][2]) + space[i][j];
        
        if (j < M - 1) {
            dp[i][j][2] = Math.min(dp[i][j][2], dp[i - 1][j + 1][0], dp[i - 1][j + 1][1]) + space[i][j];
        }
    }
}


let answer = Infinity;
for (let j = 0; j < M; j++) {
    answer = Math.min(answer, dp[N - 1][j][0], dp[N - 1][j][1], dp[N - 1][j][2]);
}

console.log(answer);
