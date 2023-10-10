// 프로그래머스 방문 길이
function solution(dirs) {
  let answer = -1;
  let location = [0, 0];
  let prev = [0, 0];
  let moveBox = new Set();
  let i = 0;

  while (i < dirs.length) {
    switch (dirs[i]) {
      case "U":
        location[1]++;
        break;
      case "D":
        location[1]--;
        break;
      case "R":
        location[0]++;
        break;
      case "L":
        location[0]--;
        break;
    }
    if (
      location[0] < 6 &&
      location[0] > -6 &&
      location[1] < 6 &&
      location[1] > -6
    ) {
      moveBox.add(prev.join("") + location.join(""));
      moveBox.add(location.join("") + prev.join(""));
      prev = [...location];
      i++;
    } else {
      switch (dirs[i]) {
        case "U":
          location[1]--;
          break;
        case "D":
          location[1]++;
          break;
        case "R":
          location[0]--;
          break;
        case "L":
          location[0]++;
          break;
      }
      i++;
    }
  }

  return moveBox.size / 2;
}
