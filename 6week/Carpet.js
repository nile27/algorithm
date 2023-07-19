function measure(n) {
  let measureArrX = [];
  let measureArrY = [];
  if (n === 0) return { measureArrX, measureArrY };
  for (let i = 1; i <= parseInt(Math.sqrt(n)) + 1; i++) {
    n % i === 0 ? (measureArrY.push(i), measureArrX.push(n / i)) : null;
  }
  return { measureArrX, measureArrY };
}

function solution(brown, yellow) {
  let answer = [];
  let center = measure(yellow);
  let [x, y] = [0, 0];

  for (let i = 0; i < center.measureArrY.length; i++) {
    if ((brown - 2 * center.measureArrY[i]) / 2 === center.measureArrX[i] + 2)
      x = center.measureArrX[i] + 2;
    y = parseInt((brown + yellow) / x);
    x >= y ? (answer = [x, y]) : null;
  }

  return answer;
}
