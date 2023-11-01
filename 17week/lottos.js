// 프로그래머스 로또의 최고 순위와 최저 순위
function solution(lottos, win_nums) {
  var answer = [0, 0];
  let [max, min] = [0, 0];
  let table = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
  };
  for (let i of lottos) {
    if (win_nums.includes(i)) min++;
    if (i === 0) max++;
  }
  max = min + max;
  answer[0] = table[max] ? table[max] : 6;
  answer[1] = table[min] ? table[min] : 6;

  return answer;
}
