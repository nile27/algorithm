// 프로그래머스 성격 유형 검사하기

function solution(survey, choices) {
  var answer = "";
  let tableArr = ["RT", "CF", "JM", "AN"];
  let table = {
    R: 0,
    C: 0,
    J: 0,
    A: 0,
    T: 0,
    F: 0,
    M: 0,
    N: 0,
  };
  let center = 4;

  for (let i = 0; i < survey.length; i++) {
    if (center - choices[i] < 0) {
      table[survey[i][0]] += center - choices[i];
    } else {
      table[survey[i][1]] += choices[i] - center;
    }
  }

  tableArr.map((item) => {
    table[item[0]] >= table[item[1]]
      ? (answer += item[0])
      : (answer += item[1]);
  });

  return answer;
}
