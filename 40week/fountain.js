function solution(numer1, denom1, numer2, denom2) {
  var answer = [];
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));

  let numer = numer1 * denom2 + denom1 * numer2;
  let denom = denom1 * denom2;
  let gcdAns = gcd(denom, numer);

  answer = [numer / gcdAns, denom / gcdAns];

  return answer;
}
