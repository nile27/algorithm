// 프로그래머스 정수를 나선형으로 배치하기

function solution(n) {
  let answer = Array.from({ length: n }, (_) =>
    Array.from({ length: n }, (_) => 0)
  );
  let xArr = [1, 0, -1, 0];
  let yArr = [0, 1, 0, -1];
  let count = 1;
  let [x, y, i] = [0, 0, 0];
  while (count <= n * n) {
    if (
      x + xArr[i % 4] >= n ||
      x + xArr[i % 4] < 0 ||
      y + yArr[i % 4] >= n ||
      y + yArr[i % 4] < 0 ||
      answer[y + yArr[i % 4]][x + xArr[i % 4]]
    )
      i += 1;
    answer[y][x] = count;
    x += xArr[i % 4];
    y += yArr[i % 4];
    count += 1;
  }

  return answer;
}
