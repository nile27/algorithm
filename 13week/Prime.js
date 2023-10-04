// 프로그래머스 소수만들기

function Prime(num) {
  let sqrt = Math.ceil(Math.sqrt(num));

  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) return false;
  }

  return true;
}

function solution(nums) {
  let answer = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (Prime(nums[i] + nums[j] + nums[k])) {
          answer++;
        }
      }
    }
  }

  return answer;
}
