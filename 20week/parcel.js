// 프로그래머스 택배 배달과 수거하기
function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  let [del, pick] = [cap, cap];
  let i = 0;
  while (deliveries[deliveries.length - 1] === 0) deliveries.pop();
  while (pickups[pickups.length - 1] === 0) pickups.pop();

  while (deliveries.length || pickups.length) {
    i = Math.max(deliveries.length, pickups.length);
    answer += i * 2;
    del = cap;
    pick = cap;
    while (del >= 0 && deliveries.length) {
      if (deliveries[deliveries.length - 1] <= del) {
        del -= deliveries[deliveries.length - 1];
        deliveries.pop();
      } else {
        deliveries[deliveries.length - 1] -= del;
        break;
      }
    }
    while (pick >= 0 && pickups.length) {
      if (pickups[pickups.length - 1] <= pick) {
        pick -= pickups[pickups.length - 1];
        pickups.pop();
      } else {
        pickups[pickups.length - 1] -= pick;
        break;
      }
    }
  }

  return answer;
}
