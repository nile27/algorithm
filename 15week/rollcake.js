// 프로그래머스 롤케이크 자르기
function solution(topping) {
  let answer = 0;
  let old = {};
  let young = {};
  let [oleng, yleng] = [0, 0];
  for (let i of topping) {
    if (!old[i]) {
      old[i] = 0;
      oleng++;
    }
    old[i]++;
  }

  for (let key of topping) {
    if (!young[key]) {
      young[key] = 0;
      yleng++;
    }

    young[key]++;
    old[key]--;

    if (old[key] === 0) {
      delete old[key];
      oleng--;
    }

    if (oleng === yleng) {
      answer++;
    }
  }
  return answer;
}

/**
 *  Olog(n)으로 시간을 단축 시키는 문제
 * slice O(n) 시간 초과
 * Object.keys O(n) 시간 초과
 * new Set O(n) 시간 초과
 */

// 시간 초과 코드
// function solution(topping) {
//   let answer = 0;
//   let set1 = new Set([...toppi]);
//   let set2 = {};

//   for (let i = 1; i < topping.length - 1; i++) {
//     topping.slice(0, i).map((item) => {
//       return (set1[item] = true);
//     });
//     topping.slice(i, topping.length).map((item) => {
//       return (set2[item] = true);
//     });

//     if (Object.keys(set1).length === Object.keys(set2).length) answer++;
//     set1 = {};
//     set2 = {};
//   }

//   return answer;
// }
