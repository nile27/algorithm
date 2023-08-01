const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n").map((item) => item.replace("\r","").split(" "))
input.shift();

let queue = [];
let ans = [];

for(let i of input){
    
    switch (i[0]){
        case 'push':
            queue.push(i[1]);
            break;

        case 'pop' : 
            ans.push(queue.length !==0 ? queue.shift() : '-1')
            break;

        case 'size':
            ans.push(queue.length)
            break;
        
        case 'empty':
            ans.push(queue.length !==0 ? 0 : 1)
            break;

        case 'front':
            ans.push(queue.length !==0 ? queue[0] : '-1');
            break;

        case 'back':
            ans.push(queue.length !==0 ? queue[queue.length-1] : '-1');
            break; 
    }
    
}

console.log(ans.join("\n"));
