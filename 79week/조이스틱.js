// 프로그래머스 조이스틱
function solution(name) {
  let answer = 0;
  const len = name.length;
  let ch = 0;
  let move = len - 1;
  let next = 0;
  
  for (let i = 0; i < len; i++) {
    ch = name.charCodeAt(i);
    answer += Math.min(ch - 65, 91 - ch); 
  }

  
  for (let i = 0; i < len; i++) {
    next = i + 1;

    while (next < len && name[next] === 'A') {
      next++;
    }

    move = Math.min(move, i + len - next + Math.min(i, len - next));
  }

  return answer + move;
}
