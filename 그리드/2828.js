const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const  M = Number(input[0].split(" ")[1])
const arr = input.slice(2).map(Number);
let currentPosi = Array.from({length:M}, (_,i)=> i+1)
let diff = 0;
let ans = 0

for(let posi of arr){
  
  if(currentPosi.includes(posi)) continue
    
  else if (currentPosi[0] > posi){
    diff = currentPosi[0] -posi 
    ans +=  diff
    currentPosi = currentPosi.map((x)=> x- diff)
  }
  else if (currentPosi[M-1] < posi){
    diff = posi - currentPosi[M-1]
    ans += diff  
    currentPosi = currentPosi.map((x)=>  x + diff)
  }
  
}

console.log(ans)
