const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();
const N = Number(input);

let queue = Array.from({ length: N }, (_, i) => i + 1);
let result = [];

while (queue.length > 0) {
  result.push(queue.shift());

  if (queue.length > 0) queue.push(queue.shift());
}

console.log(result.join(" "));
