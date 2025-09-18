const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [d, k] = [Number(input[0]), Number(input[1])];

let dp = Array.from({ length: d + 1 }, () => 0);
dp[0] = 1;
dp[1] = 1;

while (true) {
    for (let i = 2; i < d; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    if (dp[d - 1] === k) {
        console.log(dp[0]);
        console.log(dp[1]);
        break;
    } else if (dp[d - 1] > k) {
        dp[0] += 1;
        dp[1] = dp[0];
    } else {
        dp[1] += 1;
    }
}
