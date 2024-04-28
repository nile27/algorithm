function solution(arr, k) {
  var answer = [];
  let set = new Set(arr);
  let setArr = [...set];
  answer = setArr.slice(0, k);
  if (answer.length < k) {
    for (let i = answer.length; i < k; i++) {
      answer.push(-1);
    }
  }

  return answer;
}
