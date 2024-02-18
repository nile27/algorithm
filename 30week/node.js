function solution(n, wires) {
  var answer = n;
  let wire = [];
  let ans = Array.from({ length: n }, () => new Set());
  let visit = Array.from({ length: n - 1 }, () => false);
  let queue = [];
  let diff = 0;

  for (let i = 0; i < wires.length; i++) {
    wire = [...wires.slice(0, i), ...wires.slice(i + 1, n)];
    queue.push(wire[0]);
    visit[0] = true;
    let j = 1;
    while (queue.length) {
      if (
        !visit[j] &&
        (queue[0].includes(wire[j][0]) || queue[0].includes(wire[j][1]))
      ) {
        queue.push(wire[j]);
        visit[j] = true;
      }

      j++;

      if (j === wire.length) {
        j = 1;
        queue.shift().map((item) => ans[i].add(item));
      }
    }
    visit = visit.map((item) => (item = false));
  }

  for (let i = 0; i < ans.length; i++) {
    diff = Math.abs(ans[i].size - (n - ans[i].size));
    answer > diff ? (answer = diff) : null;
  }

  return answer;
}
