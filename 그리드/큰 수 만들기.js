function solution(number, k) {
    let answer = '';
    let numArr = number.split("").map(Number);
    let stack = [];
    let count = k;
    
    for(let num of numArr){
        while(count > 0 && stack[stack.length-1] < num){
            count--;
            stack.pop()
        };
        stack.push(num)
    }
    
    if(count > 0){
        return stack.slice(0,number.length-k).join("")
    }
     
    return stack.join("")
}
