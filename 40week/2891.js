const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[N, S, R], broken, rest] = data.map((el) => el.split(" ").map(Number));

  const check = Array.from({ length: N }, () => 1);

  broken.forEach((el) => check[el - 1]--);
  rest.forEach((el) => check[el - 1]++);

  for (let i = 0; i < N; i++) {
    if (check[i] == 2) {
      if (0 < i && !check[i - 1]) {
        check[i]--;
        check[i - 1]++;
      } else if (i < N - 1 && !check[i + 1]) {
        check[i]--;
        check[i + 1]++;
      }
    }
  }

  console.log(check.filter((el) => !el).length);
}

solution(input);
