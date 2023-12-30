// 프로그래머스 직사각형 별찍기
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  let star = "";
  let answer = "";

  for (let i = 0; i < a; i++) {
    star += "*";
  }

  for (let i = 0; i < b; i++) {
    answer += star + "\n";
  }

  console.log(answer.trim());
});
