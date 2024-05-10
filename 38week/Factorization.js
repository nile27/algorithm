function solution(n) {
  let set = new Set();
  let div = 2;
  while (n > 1) {
    if (n % div === 0) {
      set.add(div);
      n = n / div;
    } else div += 1;
  }

  return [...set];
}
