// 프로그래머스 두 큐 합 같게 만들기

function solution(queue1, queue2) {
  let answer = 0;
  let [one, two] = [
    queue1.reduce((re, ac) => re + ac),
    queue2.reduce((re, ac) => re + ac),
  ];
  let [i, j] = [0, 0];
  let istrue = false;
  let shift = 0;
  let total = (queue2.length + queue1.length) * 2;

  while (answer <= total && queue1.length && queue2.length) {
    if (one > two) {
      shift = queue1[i];
      queue2.push(shift);
      i++;
      one -= shift;
      two += shift;
    } else if (one < two) {
      shift = queue2[j];
      queue1.push(shift);
      j++;
      one += shift;
      two -= shift;
    } else {
      istrue = true;
      break;
    }
    answer += 1;
  }

  return istrue ? answer : -1;
}
