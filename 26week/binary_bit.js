// 프로그래머스 2개 이하로 다른 비트

function solution(numbers) {
  var answer = [];
  let binary = "";

  for (let bin of numbers) {
    if (bin % 2 === 0) {
      answer.push(bin + 1);
    } else {
      binary = bin.toString(2).split("");

      for (let i = binary.length - 1; i > -1; i--) {
        if (binary[i] === "0") {
          binary[i] = "1";
          binary[i + 1] = "0";

          break;
        } else if (i === 0 && binary[i] !== "0") {
          binary.unshift("1");
          binary[1] = "0";

          break;
        }
      }
      answer.push(parseInt(binary.join(""), 2));
    }
  }

  return answer;
}
