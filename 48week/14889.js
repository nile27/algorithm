const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0], 10);
const S = input.slice(1).map(line => line.split(' ').map(Number));

let minDiff = Infinity;
const visited = new Array(N).fill(false);

function getTeamScore(team) {
    let score = 0;
    for (let i = 0; i < team.length; i++) {
        for (let j = i + 1; j < team.length; j++) {
            score += S[team[i]][team[j]] + S[team[j]][team[i]];
        }
    }
    return score;
}

function dfs(depth, idx) {
    if (depth === N / 2) {
        const startTeam = [];
        const linkTeam = [];

        for (let i = 0; i < N; i++) {
            if (visited[i]) {
                startTeam.push(i);
            } else {
                linkTeam.push(i);
            }
        }

        const startScore = getTeamScore(startTeam);
        const linkScore = getTeamScore(linkTeam);
        const diff = Math.abs(startScore - linkScore);

        minDiff = Math.min(minDiff, diff);
        return;
    }

    for (let i = idx; i < N; i++) {
        if (!visited[i]) {
            visited[i] = true;
            dfs(depth + 1, i + 1);
            visited[i] = false;
        }
    }
}

dfs(0, 0);
console.log(minDiff);
