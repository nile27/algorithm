// 프로그래머스 예산

function solution(d, budget) {
  let answer = 0;
  let sum = 0;
  d.sort((a, b) => a - b);

  for (let i of d) {
    sum += i;
    answer++;
    if (sum > budget) return answer - 1;
    else if (sum === budget) return answer;
  }
}
