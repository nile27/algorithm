const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

let arr = input[1].split(" ").map(Number)
let set = new Set([...arr]);
set = [...set].sort((a,b) => a-b);
let ans = Array.from( {length: arr.length}, ()=>0);

const findSort = (n, start, end, i) =>{
    if(start > end) return

    let mid = parseInt((start + end) /2)

    if(set[mid] === n){
        ans[i] = mid;
        return;  
    } 
    else if (set[mid] < n) findSort(n, mid+1, end, i);
    else findSort(n, start, mid-1, i);
}


for(let i = 0 ; i < arr.length ; i++ ){
   findSort(arr[i], 0, set.length-1, i);
}
console.log(ans.join(' '));