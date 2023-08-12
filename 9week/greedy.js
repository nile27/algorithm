//프로그래머스 구명 보트

function solution(people, limit) {
  var answer = 0;
  people = people.sort((a, b) => a - b);

  while (people.length) {
    people[0] + people[people.length - 1] <= limit
      ? (answer++, people.shift(), people.pop())
      : (answer++, people.pop());
  }

  return answer;
}
