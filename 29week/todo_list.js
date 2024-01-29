// 프로그래머스 할 일 목록
function solution(todo_list, finished) {
  var answer = [];
  for (let i = 0; i < todo_list.length; i++) {
    !finished[i] ? answer.push(todo_list[i]) : null;
  }
  return answer;
}
