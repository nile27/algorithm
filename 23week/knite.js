// 프로그래머스 기사단원의 무기

function solution(number, limit, power) {
  var answer = 1;
  let sum = 0;

  for (let i = 2; i < number + 1; i++) {
    for (let j = 1; j < Math.sqrt(i); j++) {
      if (i % j === 0) {
        sum += 2;
      }
    }
    if (i % Math.sqrt(i) === 0) sum++;
    sum <= limit ? (answer += sum) : (answer += power);
    sum = 0;
  }

  return answer;
}
