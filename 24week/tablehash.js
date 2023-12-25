// 프로그래머스 테이블 해시 함수
function solution(data, col, row_begin, row_end) {
  let answer = "";
  let sortData = data.sort((a, b) => {
    if (a[col - 1] === b[col - 1]) {
      return b[0] - a[0];
    } else {
      return a[col - 1] - b[col - 1];
    }
  });
  let sumArr = [];
  let sum = 0;
  let leng = 0;
  let trigger = "";

  for (let i = row_begin - 1; i < row_end; i++) {
    sum = 0;
    sortData[i].forEach((item) => {
      sum += item % (i + 1);
    });
    sumArr.push(sum.toString(2));
    leng = Math.max(leng, sum.toString(2).length);
  }

  sumArr = sumArr.map((item) => {
    while (item.length < leng) {
      item = "0" + item;
    }
    return item;
  });

  for (let i = 0; i < sumArr.length - 1; i++) {
    trigger = "";

    for (let j = 0; j < leng; j++) {
      trigger += sumArr[i][j] === sumArr[i + 1][j] ? 0 : 1;
    }
    sumArr[i + 1] = trigger;
  }
  answer = sumArr[sumArr.length - 1];

  return parseInt(answer, 2);
}
