const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n").map((item) => Number(item.replace("\r","")))
const N = input.shift();
const stack = [];
let card = 1;
let ans = [];
for(let i = 0; i < input.length ; i++){
    while(card <= input[i]){
            stack.push(card);
            ans.push("+");
            card++
        }
    if(stack[stack.length - 1] !== input[i]){
        ans = [];
        break;
    }
    else{
        stack.pop();
        ans.push("-");
    }

    

}
console.log(ans.length === 0 ? "NO" : ans.join("\n"))


