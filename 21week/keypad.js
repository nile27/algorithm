// 프로그래머스 키패드 누르기

function solution(numbers, hand) {
  var answer = "";
  let [left, right] = [11, 12];
  let [leftsum, rightsum] = [
    [4, 1],
    [4, 3],
  ];
  let [leftArr, rightArr] = [
    [1, 4, 7],
    [3, 6, 9],
  ];
  let keypad = {
    0: [4, 2],
    1: [1, 1],
    2: [1, 2],
    3: [1, 3],
    4: [2, 1],
    5: [2, 2],
    6: [2, 3],
    7: [3, 1],
    8: [3, 2],
    9: [3, 3],
    11: [4, 1],
    12: [4, 3],
  };

  for (let i of numbers) {
    if (leftArr.includes(i)) {
      left = i;
      answer += "L";
    } else if (rightArr.includes(i)) {
      right = i;
      answer += "R";
    } else {
      leftsum = [
        Math.abs(keypad[left][0] - keypad[i][0]),
        Math.abs(keypad[left][1] - keypad[i][1]),
      ];
      rightsum = [
        Math.abs(keypad[right][0] - keypad[i][0]),
        Math.abs(keypad[right][1] - keypad[i][1]),
      ];
      if (leftsum[0] + leftsum[1] > rightsum[0] + rightsum[1]) {
        answer += "R";
        right = i;
      } else if (leftsum[0] + leftsum[1] < rightsum[0] + rightsum[1]) {
        answer += "L";
        left = i;
      } else {
        if (hand === "right") {
          answer += "R";
          right = i;
        } else {
          answer += "L";
          left = i;
        }
      }
    }
  }

  return answer;
}
