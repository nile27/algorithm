// 프로그래머스 카카오 인턴 개인정보 수집 유효기간

function solution(today, terms, privacies) {
  var answer = [];
  let todayArr = today.split(".");
  let termsObj = {};
  terms
    .map((item) => item.split(" "))
    .map((item) => (termsObj[item[0]] = Number(item[1])));
  let arr = [];
  let prive = [];
  let term = 0;

  for (let i = 0; i < privacies.length; i++) {
    arr = privacies[i].split(" ");
    prive = arr[0].split(".").map(Number);
    term = termsObj[arr[1]];

    if (term + prive[1] > 12) {
      prive[0] = prive[0] + Math.floor((term + prive[1]) / 12);
      prive[1] = (term + prive[1]) % 12;
    } else {
      prive[1] = term + prive[1];
    }
    prive[2] = prive[2] - 1;
    for (let j = 2; j > -1; j--) {
      if (prive[j] <= 0) {
        switch (j) {
          case 1:
            prive[0]--;
            prive[1] = 12;
            break;
          case 2:
            prive[2] = 28;
            prive[1]--;
            break;
        }
      }
    }

    prive = prive.map((item) => {
      return String(item).length >= 2 ? String(item) : "0" + String(item);
    });
    console.log(Number(todayArr.join("")), Number(prive.join("")));

    if (Number(todayArr.join("")) > Number(prive.join(""))) {
      answer.push(i + 1);
    }
  }
  return answer;
}
