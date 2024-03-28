const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");
const T = Number(input.shift());
let ans = [];
let num = 0;
let arr = [];

function solution(priorities, location) {
  var answer = 0;
  let numbering = [...priorities].sort((a, b) => b - a);
  let posi = Array.from({ length: priorities.length }, (v, i) => i);
  let locationPosi = posi[location];

  while (priorities.length !== 0) {
    if (priorities[0] !== numbering[0]) {
      priorities.push(priorities.shift());
      posi.push(posi.shift());
    } else {
      priorities.shift();
      numbering.shift();
      answer++;

      if (posi.shift() === locationPosi) return answer;
    }
  }

  return answer;
}

for (let i = 0; i < T * 2; i += 2) {
  num = input[i].split(" ")[1];
  arr = input[i + 1].split(" ").map(Number);

  ans.push(solution(arr, Number(num)));
}
console.log(ans.join("\n"));
