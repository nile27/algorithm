// 프로그래머스 _ 호텔 대실
function solution(book_time) {
  let answer = 0;
  let table = book_time
    .map((item) => {
      let start = item[0].split(":");
      let end = item[1].split(":");
      let stime = Number(start[0]) * 60 + Number(start[1]);
      let etime = Number(end[0]) * 60 + Number(end[1]);

      return [stime, etime];
    })
    .sort((a, b) => a[0] - b[0]);
  let stack = [table.shift()[1] + 10];
  let trigger = false;

  for (let i of table) {
    for (let j = 0; j < stack.length; j++) {
      if (stack[j] <= i[0]) {
        stack[j] = i[1] + 10;
        trigger = true;
        break;
      }
    }
    if (!trigger) stack.push(i[1] + 10);
    trigger = false;
  }

  return stack.length;
}
