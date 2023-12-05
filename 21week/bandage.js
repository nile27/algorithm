// 프로그래머스 [PCCP 기출문제] 붕대감기
function solution(bandage, health, attacks) {
  let hp = health;
  let count = 0;
  let leng = attacks[attacks.length - 1][0] + 1;

  for (let i = 0; i < leng; i++) {
    if (hp <= 0) {
      hp = -1;
      break;
    }
    if (attacks.length && attacks[0][0] === i) {
      hp -= attacks[0][1];
      attacks.shift();
      count = 0;
    } else {
      if (health > hp && count < bandage[0] - 1) {
        hp += bandage[1];
        count += 1;
      } else if (health > hp && count === bandage[0] - 1) {
        hp += bandage[2] + bandage[1];
        count = 0;
      }
      hp = hp > health ? health : hp;
    }
  }

  return hp <= 0 ? -1 : hp;
}
