const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');


const [N,M] = input[0].split(" ").map(Number)
const Marr = input[1].split(" ").map(Number).sort((a,b) => a-b);

let ans = []

function backTraking (depth, arr) {
  if(arr.length >= M){
    let join = arr.join(" ")
    ans.includes(join)? null:ans.push(join)
    return
  }
  for(let i = depth ; i < N; i++){
    arr.push(Marr[i])
    backTraking(i, arr);
    arr.pop();
  }
  return
}

backTraking(0,[])

console.log(ans.join("\n"))
