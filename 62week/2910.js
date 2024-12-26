const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, C] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

const map = {};
const order = [];

for (let num of arr) {
  if (map[num]) {
    map[num]++;
  } else {
    map[num] = 1;
    order.push(num);
  }
}

order.sort((a, b) => {
  if (map[b] === map[a]) {
    return arr.indexOf(a) - arr.indexOf(b);
  }
  return map[b] - map[a];
});

const result = [];
for (let num of order) {
  result.push(...Array(map[num]).fill(num));
}
console.log(result.join(" "));
