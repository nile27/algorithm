function solution(order) {
  var answer = 0;

  for (let item of order) {
    if (item.includes("americano") || item.includes("anything")) answer += 4500;
    else answer += 5000;
  }
  return answer;
}
