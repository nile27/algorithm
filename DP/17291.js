const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const N = parseInt(input, 10);

function solve(N) {
  if (N === 1) return 1;
  if (N === 2) return 2;
  if (N === 3) return 4;
  if (N === 4) return 7;

  const dp = new Array(N + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;
  dp[4] = 7;

  for (let i = 5; i <= N; i++) {
    if (i % 2 === 1) {
      dp[i] = dp[i - 1] * 2;
    } else {
      dp[i] = dp[i - 1] * 2 - (dp[i - 4] + dp[i - 5]);
    }
  }

  return dp[N];
}

console.log(solve(N));
