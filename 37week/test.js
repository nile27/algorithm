function solution(rank, attendance) {
  var answer = 0;
  let obj = {};
  let arr = [];
  let i = 1;
  rank.forEach((item, idx) => (attendance[idx] ? (obj[item] = idx) : null));

  while (arr.length < 3) {
    obj[i] !== undefined ? arr.push(obj[i]) : null;
    i++;
  }

  answer = 10000 * arr[0] + 100 * arr[1] + arr[2];
  return answer;
}
