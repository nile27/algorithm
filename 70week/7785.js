const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const n = Number(input[0]);
const employee = new Set();
let name = "";
let action = "";
let result = [];

for (let i = 1; i <= n; i++) {
  [name, action] = input[i].split(" ");
  if (action === "enter") {
    employee.add(name);
  } else {
    employee.delete(name);
  }
}

result = Array.from(employee).sort().reverse();
console.log(result.join("\n"));
