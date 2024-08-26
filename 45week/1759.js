const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [L, C] = input[0].split(' ').map(Number);
const characters = input[1].split(' ').sort();

const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
let results = [];

function backtrack(start, path) {
    if (path.length === L) {
        let vowelCount = 0;
        let consonantCount = 0;

        for (const char of path) {
            if (vowels.has(char)) {
                vowelCount++;
            } else {
                consonantCount++;
            }
        }

        if (vowelCount >= 1 && consonantCount >= 2) {
            results.push(path.join(''));
        }
        return;
    }

    for (let i = start; i < C; i++) {
        path.push(characters[i]);
        backtrack(i + 1, path);
        path.pop();
    }
}

backtrack(0, []);

console.log(results.join('\n'));
