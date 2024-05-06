function solution(arr) {
  var answer = [];
  let x = arr.length;
  let y = arr[0].length;
  let i = 0;

  if (x < y) {
    i = y - x;
    let pushArr = Array.from({ length: y }, (_) => 0);
    answer = [...arr];
    while (i > 0) {
      answer.push(pushArr);
      i--;
    }
  } else if (y < x) {
    answer = arr.map((item) => {
      i = x - y;

      while (i > 0) {
        item.push(0);
        i -= 1;
      }

      return item;
    });
  } else {
    answer = [...arr];
  }
  return answer;
}
