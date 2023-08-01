const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n").map((item) => item.replace("\r","").split(" "))
input.shift();

let stack = []
let ans = []
for(let i of input){
    if(i[0] === 'push') stack.push(i[1]);
    else if(i[0] === 'pop'){
        stack.length === 0 ? ans.push(-1) :ans.push(stack.pop());
    } 
    else if(i[0] === 'size') ans.push(stack.length);
    else if(i[0] === 'empty')
        stack.length === 0 ? ans.push(1) : ans.push(0)
    else if(i[0] === 'top')
    stack.length === 0 ? ans.push(-1) : ans.push(stack[stack.length-1]);
    
}

console.log(ans.join("\n"));