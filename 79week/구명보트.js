function solution(people, limit) {
    let answer = 0;
    const sortedPeople = people.sort((a,b) => b-a);
    let [i,j] = [0,people.length-1];
    
    while(i <= j){
        if(sortedPeople[i] + sortedPeople[j] > limit){
            i++;
        }
        else {
            i++
            j--
        }
        answer++
    }
    
    return answer;
}
