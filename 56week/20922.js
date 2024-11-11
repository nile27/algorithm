const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number);

let left = 0;
let right = 0;
let maxLen = 0;
const count = Array(100001).fill(0);

while (right < N) {
    if (count[nums[right]] < K) {
        count[nums[right]]++;
        maxLen = Math.max(maxLen, right - left + 1);
        right++;
    } else {
        count[nums[left]]--;
        left++;
    }
}

console.log(maxLen);
