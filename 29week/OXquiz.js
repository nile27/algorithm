// 프로그래머스 OX퀴즈

function solution(quizs) {
  var answer = [];
  let arr = [];
  let trigger = false;

  for (let quiz of quizs) {
    arr = quiz.split(" ");

    trigger =
      arr[1] === "+"
        ? Number(arr[0]) + Number(arr[2]) === Number(arr[4])
        : Number(arr[0]) - Number(arr[2]) === Number(arr[4]);
    answer.push(trigger ? "O" : "X");
  }

  return answer;
}
