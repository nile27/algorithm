function solution(sizes) {
  let [x, y] = [sizes[0][0], sizes[0][1]];
  x = Math.max(...sizes.flat());
  y = Math.max(...sizes.map((item) => (item[0] > item[1] ? item[1] : item[0])));

  return x * y;
}
