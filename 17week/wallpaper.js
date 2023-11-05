// 프로그래머스 바탕화면 정리

function solution(wallpaper) {
  var answer = [wallpaper.length, wallpaper[0].length, 0, 0];

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] === "#") {
        answer[0] = Math.min(i, answer[0]);
        answer[1] = Math.min(j, answer[1]);
        answer[2] = Math.max(i + 1, answer[2]);
        answer[3] = Math.max(j + 1, answer[3]);
      }
    }
  }
  return answer;
}
