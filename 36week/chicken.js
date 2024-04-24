function solution(chicken) {
  let answer = 0;
  let service = 0;
  let coupone = chicken;

  while (coupone >= 10) {
    service = Math.floor(coupone / 10);
    answer += service;
    coupone = (coupone % 10) + service;
  }
  return answer;
}
