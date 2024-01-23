// 프로그래머스 겹치는 선분의 길이
function solution(lines) {
  let set = new Set();
  let [start, end] = [0, 0];

  let stack = [];

  for (let i = 0; i < lines.length; i++) {
    [start, end] = [lines[i][0], lines[i][1]];
    for (let j = start + 0.5; j < end + 0.5; j++) {
      if (!set.has(j)) {
        set.add(j);
      } else {
        if (!stack.includes(j)) {
          stack.push(j);
        }
      }
    }
  }

  return stack.length;
}
