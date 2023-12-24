// 프로그래머스 마법의 엘리베이터
function solution(storey) {
  var answer = 0;
  let storeyArr = String(storey).split("").map(Number).reverse();

  for (let i = 0; i < storeyArr.length; i++) {
    if (storeyArr[i] < 5) answer += storeyArr[i];
    else if (storeyArr[i] === 5) {
      answer += 5;
      if (storeyArr[i + 1] && storeyArr[i + 1] >= 5) storeyArr[i + 1]++;
    } else {
      answer += 10 - storeyArr[i];
      if (storeyArr[i + 1] || storeyArr[i + 1] === 0) storeyArr[i + 1]++;
      if (i === storeyArr.length - 1) answer += 1;
    }
  }
  return answer;
}
