const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const [N,M] = input[0].split(" ").map(Number);

if(N === 0 || M === 0){
   console.log(0)
  return
}

const arr = input[1].split(" ").map(Number)
let weight = 0 , ans = 0

for(let item of arr){
  if(weight + item > M) {
    weight = item
    ans++
    continue
  }
  else{
    weight += item
  }
}

console.log(weight === 0 ? ans : ans+1)

