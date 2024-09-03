const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

let [N, M] = input.shift().split(" ").map(Number);
const coinArr = input.map(Number).reverse();
let ans = 0
let cnt = 0
for(let coin of coinArr){
  if(coin > M) continue;
  cnt = Math.floor(M/coin);
  ans += cnt
  M = M % coin
}

console.log(ans)
