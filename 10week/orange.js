// 프로그래머스 귤 고르기
function solution(k, tangerine) {
  let answer = 0;
  let map = new Map();
  let arr = [];
  let i = 0;
  let sum = 0;

  while (tangerine.length > i) {
    !map.has(tangerine[i])
      ? map.set(tangerine[i], 1)
      : map.set(tangerine[i], map.get(tangerine[i]) + 1);
    i++;
  }

  arr = [...map].sort((a, b) => b[1] - a[1]);

  for (let i of arr) {
    if (sum >= k) break;
    sum += i[1];
    answer++;
  }

  return answer;
}
