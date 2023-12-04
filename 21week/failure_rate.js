// 프로그래머스 실패율
function solution(N, stages) {
  var answer = [];
  let stageArr = {};
  let person = stages.length;
  let temp = 0;
  let arr = [];
  for (let i = 0; i < N; i++) {
    stageArr[i + 1] = 0;
  }

  for (let i of stages) {
    if (i <= N) {
      stageArr[i] += 1;
    }
  }

  Object.keys(stageArr).map((item) => {
    temp = stageArr[item] / person;
    person -= stageArr[item];

    stageArr[item] = temp ? temp : 0;
    return;
  });
  answer = Object.keys(stageArr)
    .map(Number)
    .sort((a, b) => stageArr[b] - stageArr[a]);

  return answer;
}
