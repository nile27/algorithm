function solution(storey) {
  var answer = 0;
  let [single, double] = [0, 0];
  let num = String(storey).length;
  let numArr = Array.from({ length: num }, (_, i) => 10 ** i);

  for (let i = num - 1; i > -1; i--) {
    single = Math.abs(storey % numArr[i]);
    double = Math.abs(single - numArr[i]);

    if (single <= double) {
      answer += parseInt(storey / numArr[i]);
      storey -= parseInt(storey / numArr[i]) * numArr[i];
    } else {
      answer += parseInt(storey / numArr[i]) + 1;
      storey -= (parseInt(storey / numArr[i]) + 1) * numArr[i];
    }
    storey = Math.abs(storey);
  }

  return answer;
}
