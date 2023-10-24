// 프로그래머스 2016년
function solution(a, b) {
  var answer = "";
  let days = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  let date = 0;
  let date31 = [1, 3, 5, 7, 8, 10, 12];
  for (let i = 1; i < a; i++) {
    if (i === 2) date += 29;
    else if (date31.includes(i)) date += 31;
    else date += 30;
  }
  answer = days[(date + b) % 7];

  return answer;
}
