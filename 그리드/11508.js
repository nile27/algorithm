const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const N = Number(input[0]);
  const arr = input
    .slice(1)
    .map(Number)
    .sort((a, b) => b - a);

  let answer = 0;
  for (let i = 0; i < N; i++) {
    if ((i + 1) % 3 !== 0) {
      answer += arr[i];
    }
  }

  console.log(answer);
  process.exit();
});
출처: https://homile.tistory.com/391 [Homile:티스토리]
