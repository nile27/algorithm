// 프로그래머스 연속 부분 수열 합의 개수

function solution(elements) {
  let sum = 0;
  let leng = elements.length;
  let set = new Set([...elements]);
  for (let i = 1; i <= leng; i++) {
    for (let j = 0; j < leng; j++) {
      sum = sum + elements[(j + i) % leng];
      set.add(sum);
    }
    sum = 0;
  }

  return set.size;
}
