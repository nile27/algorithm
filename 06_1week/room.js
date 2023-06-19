/**
 *  백준 방 배정
 * https://www.acmicpc.net/problem/13300
 */

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let memberArr = input.slice(1, input.length);
let maxMember = Number(input[0].split(" ")[1]);
let room = 0;
let roomObj = {
  1: {
    0: 0,
    1: 0,
  },
  2: {
    0: 0,
    1: 0,
  },
  3: {
    0: 0,
    1: 0,
  },
  4: {
    0: 0,
    1: 0,
  },
  5: {
    0: 0,
    1: 0,
  },
  6: {
    0: 0,
    1: 0,
  },
};

for (let i of memberArr) {
  roomObj[i[2]][i[0]]++;

  if (roomObj[i[2]][i[0]] === maxMember) {
    roomObj[i[2]][i[0]] = 0;
    room++;
  }
}

for (let i of Object.keys(roomObj)) {
  if (roomObj[i][1] !== 0) room++;
  if (roomObj[i][0] !== 0) room++;
}

console.log(room);
