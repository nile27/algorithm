function solution(word) {
  var answer = 0;
  let arr = ["A", "E", "I", "O", "U"];
  let keyword = [];

  function moum(arr, n) {
    if (word === keyword.join("") || keyword.length >= 5) return;

    for (let i = 0; i < arr.length; i++) {
      keyword.push(arr[i]);
      answer++;
      moum(arr, n);
      if (word === keyword.join("")) break;
      keyword.pop(arr[i]);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    moum(arr, 0);
    arr.push(arr.shift());
    if (word === keyword.join("")) break;
  }

  return answer;
}
