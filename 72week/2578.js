const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const board = [];
const call = [];
const position = {};

for (let i = 0; i < 5; i++) {
  board.push(input[i].split(" ").map(Number));
  for (let j = 0; j < 5; j++) {
    position[board[i][j]] = [i, j];
  }
}

for (let i = 5; i < 10; i++) {
  call.push(...input[i].split(" ").map(Number));
}

function checkBingo() {
  let count = 0;

  for (let i = 0; i < 5; i++) {
    if (board[i].every((v) => v === "X")) count++;
  }

  for (let j = 0; j < 5; j++) {
    if (board.every((row) => row[j] === "X")) count++;
  }

  if ([0, 1, 2, 3, 4].every((i) => board[i][i] === "X")) count++;

  if ([0, 1, 2, 3, 4].every((i) => board[i][4 - i] === "X")) count++;

  return count >= 3;
}
let num = 0;
let [x, y] = [0, 0];
for (let turn = 0; turn < 25; turn++) {
  num = call[turn];
  [x, y] = position[num];
  board[x][y] = "X";

  if (checkBingo()) {
    console.log(turn + 1);
    break;
  }
}
