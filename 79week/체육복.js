function solution(n, lost, reserve) {
  let realLost = lost.filter(x => !reserve.includes(x));
  let realReserve = reserve.filter(x => !lost.includes(x));

  realLost.sort((a, b) => a - b);
  realReserve.sort((a, b) => a - b);

  for (let i = 0; i < realReserve.length; i++) {
    const borrower = realLost.find(
      x => x === realReserve[i] - 1 || x === realReserve[i] + 1
    );
    if (borrower) {
      realLost = realLost.filter(x => x !== borrower);
    }
  }

  return n - realLost.length;
}
