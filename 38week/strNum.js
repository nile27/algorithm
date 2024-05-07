function solution(my_string) {
  var answer = Array.from({ length: 52 }, () => 0);
  let charCode = 0;

  for (let i of my_string) {
    charCode = i.charCodeAt();
    charCode > 96
      ? (answer[charCode - 97 + 26] += 1)
      : (answer[charCode - 65] += 1);
  }

  return answer;
}
