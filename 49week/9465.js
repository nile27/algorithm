const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = parseInt(input[0], 10);
let index = 1;

for (let t = 0; t < T; t++) {
    const n = parseInt(input[index], 10);
    const sticker = [
        input[index + 1].split(' ').map(Number),
        input[index + 2].split(' ').map(Number)
    ];

    const dp = Array.from({ length: n }, () => [0, 0, 0]);

    dp[0][0] = sticker[0][0];
    dp[0][1] = sticker[1][0];
    dp[0][2] = 0;

    for (let i = 1; i < n; i++) {
        dp[i][0] = Math.max(dp[i - 1][1], dp[i - 1][2]) + sticker[0][i];
        dp[i][1] = Math.max(dp[i - 1][0], dp[i - 1][2]) + sticker[1][i];
        dp[i][2] = Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][2]);
    }

    const result = Math.max(dp[n - 1][0], dp[n - 1][1], dp[n - 1][2]);
    console.log(result);

    index += 3;
}
