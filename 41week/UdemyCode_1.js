function isPow(n) {
  let sqrt = parseInt(Math.sqrt(n));

  if (n % sqrt !== 0) return -1;
  return (sqrt + 1) ** 2;
}

console.log(isPow(121)); // 144
console.log(isPow(10)); // -1
console.log(isPow(9)); // 16
