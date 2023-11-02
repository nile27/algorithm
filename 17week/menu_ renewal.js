// 프로그래머스 메뉴 리뉴얼
const Combinations = (arr, num) => {
  const result = [];
  if (num === 1) return arr.map((el) => [el]);

  arr.forEach((fix, idx, array) => {
    const restArray = array.slice(idx + 1);
    const combiArr = Combinations(restArray, num - 1);
    const combiFix = combiArr.map((el) => [fix, ...el]);

    result.push(...combiFix);
  });

  return result;
};

function solution(orders, course) {
  var answer = [];
  let ordersArr = orders.map((item) => item.split("").sort());
  let set = new Set();
  let objtable = {};
  let word = [];
  let [max, maxArr] = [0, []];

  for (let i = 0; i < course.length; i++) {
    max = 0;
    maxArr = [];
    objtable = {};
    for (let j = 0; j < ordersArr.length; j++) {
      word = Combinations(ordersArr[j], course[i]);

      word.map((item) => {
        objtable[item] ? objtable[item]++ : (objtable[item] = 1);
        if (max < objtable[item]) {
          max = objtable[item];
          maxArr = [item];
        } else if (max === objtable[item]) {
          maxArr.push(item);
        }
      });
    }
    if (max > 1) answer.push(maxArr);
  }

  return answer
    .flat()
    .map((item) => item.join(""))
    .sort();
}
