function solution(num_list) {
  let [a, b] = ["", ""];
  num_list.forEach((el) => {
    el % 2 === 0 ? (b += el) : (a += el);
  });
  return Number(a) + Number(b);
}
