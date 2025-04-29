function solution(n, w, num) {
  let answer = 1;
  let boxArr = Array.from({ length: Math.ceil(n / w) }, (_, i) =>
    Array.from({ length: w }, (_, j) => {
      if (i % 2 === 0) {
        return i * w + j + 1;
      } else {
        return (i + 1) * w - j;
      }
    })
  );
  let idx = 0;

  for (let i = 0; i < boxArr.length; i++) {
    idx = boxArr[i].findIndex((x) => x === num);

    if (idx !== -1) {
      break;
    }
  }

  boxArr.forEach((item) => {
    if (item[idx] > num && item[idx] <= n) answer++;
  });

  return answer;
}
