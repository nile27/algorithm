const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0], 10);
const numbers = input[1].split(' ').map(Number);
let max = 0;

function sumFunc(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        sum += Math.abs(arr[i] - arr[i + 1]);
    }
    return sum;
}

function solution(arr, l, r) {
    if (l === r) {
        const diff = sumFunc(arr);
        max = Math.max(max, diff);
    } else {
        for (let i = l; i <= r; i++) {
            [arr[l], arr[i]] = [arr[i], arr[l]]; // swap
            solution(arr, l + 1, r);
            [arr[l], arr[i]] = [arr[i], arr[l]]; // swap back
        }
    }
}

solution(numbers, 0, N - 1);
console.log(max);
