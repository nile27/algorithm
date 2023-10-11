// 프로그래머스 스킬트리
function solution(skill, skill_trees) {
  let answer = skill_trees.length;
  let skilltable = {};
  for (let i = 0; i < skill.length; i++) {
    skilltable[skill[i]] = i + 1;
  }
  let count = 1;

  for (let i = 0; i < skill_trees.length; i++) {
    for (let j = 0; j < skill_trees[i].length; j++) {
      if (skilltable[skill_trees[i][j]]) {
        if (count === skilltable[skill_trees[i][j]]) {
          count++;
        } else {
          count = 1;
          answer--;
          break;
        }
      }
    }

    if (count !== 1) {
      count = 1;
    }
  }

  return answer;
}
