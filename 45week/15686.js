const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const city = input.slice(1).map(line => line.split(' ').map(Number));

const houses = [];
const chickenStores = [];

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (city[i][j] === 1) {
            houses.push([i, j]);
        } else if (city[i][j] === 2) {
            chickenStores.push([i, j]);
        }
    }
}

let minDistance = Infinity;

function getCombination(arr, n) {
    const result = [];
    if (n === 1) return arr.map(e => [e]);

    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        const combinations = getCombination(rest, n - 1);
        const attached = combinations.map(combination => [fixed, ...combination]);
        result.push(...attached);
    });

    return result;
}

const chickenCombinations = getCombination(chickenStores, M);

chickenCombinations.forEach(combination => {
    let cityDistance = 0;

    houses.forEach(([hx, hy]) => {
        let houseDistance = Infinity;

        combination.forEach(([cx, cy]) => {
            const distance = Math.abs(hx - cx) + Math.abs(hy - cy);
            houseDistance = Math.min(houseDistance, distance);
        });

        cityDistance += houseDistance;
    });

    minDistance = Math.min(minDistance, cityDistance);
});

console.log(minDistance);
