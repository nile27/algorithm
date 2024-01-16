// 프로그래머스 특이한 정렬

function solution(numlist, n) {
  var answer = [];
  let dptable = [];

  for (let i = 0; i < numlist.length; i++) {
    dptable.push({ gap: Math.abs(numlist[i] - n), index: i });
  }

  dptable.sort((a, b) => {
    if (a.gap === b.gap) return numlist[b.index] - numlist[a.index];
    else if (a.gap < b.gap) return -1;
    else return 1;
  });

  for (let i of dptable) {
    answer.push(numlist[i.index]);
  }

  return answer;
}
