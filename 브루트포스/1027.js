const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, building] = [input[0], input[1].split(" ").map(Number)];

let ans = 0;
const solve = (idx) => {
    let [left, right] = [0, 0];
    let [leftMax, rightMax] = [null, null];
    let count = 0;
    for (let i = idx - 1; i >= 0; i--) {
        left = (building[i] - building[idx]) / (i - idx);

        if (left < leftMax || leftMax === null) {
            leftMax = left;
            count += 1;
        }
    }
    for (let i = idx + 1; i < N; i++) {
        right = (building[i] - building[idx]) / (i - idx);

        if (right > rightMax || rightMax === null) {
            rightMax = right;
            count += 1;
        }
    }
    return count;
};
let current = 0;
for (let i = 0; i < N; i++) {
    current = solve(i);
    ans < current ? (ans = current) : (ans = ans);
}

console.log(ans);
