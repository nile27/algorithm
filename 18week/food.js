//프로그래머스 푸드 파이터 대회

function solution(food) {
  let answer = "";
  let reverse = "";
  for (let i = 1; i < food.length; i++) {
    for (let j = 0; j < Math.floor(food[i] / 2); j++) {
      answer += String(i);
    }
  }
  reverse = answer.split("").reverse().join("");

  return answer + "0" + reverse;
}
