function solution(polynomial) {
  var answer = "";
  let arr =
    polynomial.length === 1 ? polynomial.split("") : polynomial.split(" + ");
  let [xNum, num] = [0, 0];
  let add = 0;

  for (let i of arr) {
    if (i.includes("x")) {
      add = Number(i.slice(0, i.length - 1));
      add = add ? add : 1;
      xNum += add;
    } else {
      add = Number(i);
      num += add;
    }
  }
  if (xNum !== 0 && num === 0) answer = xNum === 1 ? "x" : `${xNum}x`;
  else if (xNum === 0 && num !== 0) answer = `${num}`;
  else {
    answer = xNum === 1 ? `x + ${num}` : `${xNum}x + ${num}`;
  }

  return answer;
}
