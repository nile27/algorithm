function solution(myString) {
  var answer = [];
  let count = 0;

  for (let i of myString) {
    if (i === "x") {
      answer.push(count);
      count = 0;
    } else {
      count++;
    }
  }
  answer.push(count);
  return answer;
}
