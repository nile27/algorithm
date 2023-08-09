// 프로그래머스 level3 테스트  베스트앨범
//https://school.programmers.co.kr/learn/courses/30/lessons/42579
function solution(genres, plays) {
    var answer = [];
    let table = {};
    let sum = {};
    let total = [];
    
    for(let i = 0 ; i < genres.length ; i++){
        if(!table[`${genres[i]}`]){
            table[`${genres[i]}`] = [[i,plays[i]]];
            sum[`${genres[i]}`] = plays[i];
        }
        else {
            table[`${genres[i]}`].push([i,plays[i]]);
            sum[`${genres[i]}`] = sum[`${genres[i]}`] + plays[i];
        }
    }
    for(let key in table){
        table[key].sort((a,b) => b[1]-a[1]);
    }
    total = Object.keys(sum).sort((a,b) => sum[b] - sum[a])
    
    for(let i = 0 ; i < total.length ; i++){
        if(table[total[i]][1]){
            answer.push(table[total[i]][0][0])
            answer.push(table[total[i]][1][0])
        }
        else{
            answer.push(table[total[i]][0][0])
        }
    }
    
    
    return answer;
}