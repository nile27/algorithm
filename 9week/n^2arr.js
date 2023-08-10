//프로그래머스 n^2 배열 자르기

function solution(n, left, right) {
    let arr = []
    let x = 0 ;
    let y = 0;
    for(let i = left ; i < right+1 ;i++){
        x = Math.ceil((i+1) / n);
        y = (i+1) % n !== 0 ? parseInt((i+1) % n) : n;
        
        if(x >= y) arr.push(x);
        else {
            arr.push((y-x)+x)
        }
    }
    return arr
}