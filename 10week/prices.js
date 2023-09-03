//프로그래머스 _ 주식 가격
function solution(prices) {
  var answer = [];
  let count = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] <= prices[j]) {
        count += 1;
      } else {
        count += 1;
        break;
      }
    }
    answer.push(count);
    count = 0;
  }
  answer.push(0);
  return answer;
}
