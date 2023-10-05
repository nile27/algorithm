// 프로그래머스 뉴스 클러스터링
function changeFunc(str) {
  let arr = str.toUpperCase().split("");
  let [first, second] = [0, 0];
  let twoWord = [];

  for (let i = 0; i < arr.length - 1; i++) {
    first = arr[i].charCodeAt(0);
    second = arr[i + 1].charCodeAt(0);

    if (first >= 65 && first <= 90 && second >= 65 && second <= 90)
      twoWord.push(arr[i] + arr[i + 1]);
  }

  return twoWord;
}

function solution(str1, str2) {
  var answer = 0;
  let X = changeFunc(str1);
  let Y = changeFunc(str2);
  let queue1 = [];
  let queue2 = [...Y];
  let shift = "";

  while (X.length) {
    if (Y.includes(X[0])) {
      shift = X.shift();
      queue1.push(shift);
      Y[Y.indexOf(shift)] = 0;
    } else {
      queue2.push(X.shift());
    }
    if (X[0] === undefined) break;
  }
  if (queue2.length <= Y && queue1.length === 0) answer = 65536;
  else answer = Math.floor((queue1.length / queue2.length) * 65536);

  return answer;
}
