const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const total = {};
let i = 0,
  useTime = "",
  student = "",
  h = 0,
  m = 0,
  totalTime = 0;
let overTime = 0,
  totalPay = 0;
const result = [];

for (i = 1; i <= n; i++) {
  [useTime, student] = input[i].split(" ");
  [h, m] = useTime.split(":").map(Number);
  totalTime = 60 * h + m;
  total[student] = (total[student] || 0) + totalTime;
}

for (const key in total) {
  student = key;
  overTime = Math.max(total[student] - 100, 0);
  totalPay = 10 + 3 * Math.floor(overTime / 50);
  if (overTime % 50 !== 0) {
    totalPay += 3;
  }
  result.push([student, totalPay]);
}

result.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

for (i = 0; i < result.length; i++) {
  [student, totalPay] = result[i];
  console.log(student, totalPay);
}
