// 프로그래머스 숫자 변환하기
function solution(x, y, n) {
  let answer = -1;
  const queue = [{ num: y, count: 0 }];
  while (queue.length !== 0) {
    const { num, count } = queue.shift();

    if (num === x) {
      answer = count;
      break;
    }

    if (num % 2 === 0) {
      queue.push({ num: num / 2, count: count + 1 });
    }
    if (num % 3 === 0) {
      queue.push({ num: num / 3, count: count + 1 });
    }
    if (num - n >= x) {
      queue.push({ num: num - n, count: count + 1 });
    }
  }
  return answer;
}
