const fs = require("fs");
const input = Number(fs.readFileSync("./input.txt").toString().trim());

function solve() {
  if (input === 1) {
    console.log("*");
    return;
  }

  const size = 4 * (input - 1) + 1;
  const arr = Array.from({ length: size }, () =>
    Array.from({ length: size }, () => " ")
  );

  let start = 0;
  let end = size - 1;

  while (start <= end) {
    for (let j = start; j <= end; j++) {
      arr[start][j] = "*";
      arr[end][j] = "*";
    }

    for (let i = start + 1; i < end; i++) {
      arr[i][start] = "*";
      arr[i][end] = "*";
    }

    start += 2;
    end -= 2;
  }

  console.log(arr.map(row => row.join("")).join("\n"));
}

solve();
