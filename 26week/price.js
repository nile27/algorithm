// 프로그래머스 부족한 금액 계산하기

function solution(price, money, count) {
  var answer = 0;

  for (let i = 1; i <= count; i++) {
    answer += i * price;
  }

  return answer - money > 0 ? answer - money : 0;
}
