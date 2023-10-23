// 프로그래머스 파일명 정리
function sortedFile(files) {
  let count = 0;
  let arr = [];
  let file = ["", "", ""];

  for (let item of files) {
    for (let i = 0; i < item.length; i++) {
      if (!/[0-9]/.test(item[i]) && count === 0) {
        file[0] += item[i];
      } else if (/[0-9]/.test(item[i]) && file[1].length < 6 && count < 2) {
        file[1] += item[i];
        count = 1;
      } else {
        file[2] += item[i];
        count = 2;
      }
    }
    arr.push(file);
    file = ["", "", ""];
    count = 0;
  }
  return arr;
}

function solution(files) {
  var answer = [];
  let arr = sortedFile(files);
  answer = arr.sort((a, b) => {
    let ahead = a[0].toUpperCase();
    let bhead = b[0].toUpperCase();
    let atail = a[2].toUpperCase();
    let btail = b[2].toUpperCase();

    if (ahead < bhead) return -1;
    else if (ahead === bhead) {
      if (Number(a[1]) < Number(b[1])) return -1;
      else if (Number(a[1]) === Number(b[1])) {
        // if(atail && btail && atail < btail)  return -1;
        // else if(!atail && !btail || atail === btail) return 0
        // else return 1
      }
      return 1;
    }
    return 1;
  });

  return answer.map((item) => item.join(""));
}
