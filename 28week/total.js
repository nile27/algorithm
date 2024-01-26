// 프로그래머스 연속된 수의 합

function solution(num, total) {
  let max = Math.ceil(total / num);
  let sum = 0;
  let answer = Array.from({ length: num }, () => {
    max += 1;
    sum += max;
    return max;
  });
  if (num === 1) return [total];

  while (sum !== total) {
    a;
    if (sum < total) {
      sum -= answer.shift();
      answer.push(answer[answer.length - 1] + 1);
      sum += answer[answer.length - 1];
    } else if (sum > total) {
      sum -= answer.pop();
      answer.unshift(answer[0] - 1);
      sum += answer[0];
    }
  }

  return answer;
}
