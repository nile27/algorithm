const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
input.pop();

let stack = [];
let item = "";
let count = 0;

for (let test_case = 0; test_case < input.length; test_case++) {
    item = input[test_case].split("");
    for (let i = 0; i < item.length; i++) {
        if (item[i] === "{") {
            stack.push(item[i]);
        } else if (item[i] === "}") {
            if (stack[stack.length - 1] === "{") {
                stack.pop();
            } else {
                stack.push(item[i]);
            }
        }
    }
    
    stack.forEach((ch, idx) => {
      if (idx % 2 === 0 && ch === "}") {
        
        count += 1;
      } else if (idx % 2 === 1 && ch === "{") {
        
        count += 1;
      }
    });
    console.log(`${test_case + 1}. ${count}`);
    count = 0;
    stack = [];
}
