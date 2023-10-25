// 프로그래머스 연속된 부분 수열의 합
// 시간 초과 코드
function solution(sequence, k) {
  if (sequence.includes(k)) return [sequence.indexOf(k), sequence.indexOf(k)];
  let start = 0;
  let i = 0;
  let sum = 0;
  let sumArr = [0, sequence.length];

  while (start < sequence.length) {
    if (sequence[start] > k) break;
    if (sequence[i] > k) {
      start++;
      i = start;
      sum = 0;
    }
    sum += sequence[i];
    if (sum < k) {
      i++;
    } else if (sum === k) {
      if (sumArr[1] - sumArr[0] > i - start) {
        sumArr[1] = i;
        sumArr[0] = start;
      }
      start++;
      i = start;
      sum = 0;
    } else {
      start++;
      i = start;
      sum = 0;
    }
  }

  return sumArr;
}

// 정답
function solution(sequence, k) {
  let start = 0;
  let i = 0;
  let sum = 0;
  let sumArr = [0, sequence.length];

  while (sequence[start] <= k) {
    if (sequence[start] > k) break;

    sum += sequence[i];

    if (sum < k) {
      i++;
    } else if (sum === k) {
      if (sumArr[1] - sumArr[0] > i - start) {
        sumArr[1] = i;
        sumArr[0] = start;
      }
      sum -= sequence[i] + sequence[start];
      start++;
    } else {
      sum -= sequence[i] + sequence[start];
      start++;
    }
  }

  return sumArr;
}
// 시간 초과 코드
