function solution(k, dungeons) {
  let set = [];
  let ans = 0;
  let visit = Array.from({ length: dungeons.length }, () => true);

  function dfs(arr, k) {
    if (k < 0) {
      ans < set.length - 1 ? (ans = set.length - 1) : null;
      return;
    } else if (
      k === 0 ||
      set.length === arr.length ||
      visit[visit.length - 1] === false
    ) {
      ans < set.length ? (ans = set.length) : null;
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (visit[i] && k >= arr[i][0]) {
        set.push(arr[i][0]);
        visit[i] = false;
        dfs(arr, k - arr[i][1]);
        set.pop();
        visit[i] = true;
      }
    }
  }

  for (let i = 0; i < dungeons.length; i++) {
    dungeons.push(dungeons.shift());
    dfs(dungeons, k);
  }

  return ans;
}
