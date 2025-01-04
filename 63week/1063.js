const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [X, Y, N] = input.shift().split(" ");
let king = [X[0].charCodeAt() - 64, Number(X[1])];
let stone = [Y[0].charCodeAt() - 64, Number(Y[1])];
const map = {
  R: [1, 0],
  L: [-1, 0],
  B: [0, -1],
  T: [0, 1],
  RT: [1, 1],
  LT: [-1, 1],
  RB: [1, -1],
  LB: [-1, -1],
};

let result = "";
let dist = [];
for (let item of input) {
  dist = map[`${item}`];
  king = [king[0] + dist[0], king[1] + dist[1]];

  if (king[0] < 1 || king[0] > 8 || king[1] < 1 || king[1] > 8) {
    king = [king[0] - dist[0], king[1] - dist[1]];
  }

  if (king[0] === stone[0] && king[1] === stone[1]) {
    stone = [stone[0] + dist[0], stone[1] + dist[1]];

    if (stone[0] < 1 || stone[0] > 8 || stone[1] < 1 || stone[1] > 8) {
      stone = [stone[0] - dist[0], stone[1] - dist[1]];
      king = [king[0] - dist[0], king[1] - dist[1]];
    }
  }
}
result = `${String.fromCharCode(king[0] + 64)}${king[1]}\n${String.fromCharCode(
  stone[0] + 64
)}${stone[1]}`;
console.log(result);
