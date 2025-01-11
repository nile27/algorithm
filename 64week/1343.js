const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solve(board) {
  let result = "";
  let count = 0;

  for (let char of board) {
    if (char === "X") {
      count++;
    } else {
      if (count > 0) {
        if (count % 2 !== 0) {
          return "-1";
        }
        result +=
          "AAAA".repeat(Math.floor(count / 4)) + "BB".repeat((count % 4) / 2);
        count = 0;
      }
      result += ".";
    }
  }

  if (count > 0) {
    if (count % 2 !== 0) {
      return "-1";
    }
    result +=
      "AAAA".repeat(Math.floor(count / 4)) + "BB".repeat((count % 4) / 2);
  }

  return result;
}

console.log(solve(input));
