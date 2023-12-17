// 프로그래머스 신규 아이디 추천

function solution(new_id) {
  var answer = "";
  let lower = new_id
    .toLowerCase()
    .split("")
    .filter((item) => {
      return Number(item) !== 0 &&
        !Number(item) &&
        item !== "." &&
        item !== "-" &&
        item !== "_" &&
        (item.charCodeAt() < 97 || item.charCodeAt() > 122)
        ? false
        : true;
    });
  let j = 0;

  for (let i = 0; i < lower.length; i++) {
    if (lower[i] === ".") {
      j = i + 1;
      while (lower[j] === ".") {
        lower.splice(j, 1);
      }
    }
  }
  if (lower[0] === ".") lower.shift();

  answer = lower.slice(0, 15);

  if (answer[0] === ".") answer.shift();
  if (answer[answer.length - 1] === ".") answer.pop();
  if (answer.length === 0) answer.push("a");
  if (answer.length < 3) {
    let keyword = answer[answer.length - 1];
    while (answer.length < 3) {
      answer.push(keyword);
    }
  }

  return answer.join("");
}
