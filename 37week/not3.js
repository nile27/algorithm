function solution(n) {
  var answer = 0;
  let arr = [];
  let i = 1;

  while (arr.length < n) {
    if (i % 3 !== 0 && !String(i).includes("3")) arr.push(i);
    i += 1;
  }

  return arr[arr.length - 1];
}
