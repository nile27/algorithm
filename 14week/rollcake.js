function solution(topping) {
  let answer = 0;
  let set1 = new Set([...toppi]);
  let set2 = {};

  for (let i = 1; i < topping.length - 1; i++) {
    topping.slice(0, i).map((item) => {
      return (set1[item] = true);
    });
    topping.slice(i, topping.length).map((item) => {
      return (set2[item] = true);
    });

    if (Object.keys(set1).length === Object.keys(set2).length) answer++;
    set1 = {};
    set2 = {};
  }

  return answer;
}
