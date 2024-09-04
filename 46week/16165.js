const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
let idx = 1;
const groupToMembers = {}; 
const memberToGroup = {}; 

for (let i = 0; i < N; i++) {
    const groupName = input[idx++];        
    const memberCount = parseInt(input[idx++], 10); 
    const members = [];

    for (let j = 0; j < memberCount; j++) {
        const memberName = input[idx++];
        members.push(memberName);
        memberToGroup[memberName] = groupName;
    }

    groupToMembers[groupName] = members.sort();  
}

let result = [];
for (let i = 0; i < M; i++) {
    const question = input[idx++];
    const type = parseInt(input[idx++], 10);

    if (type === 0) {
        result.push(groupToMembers[question].join('\n'));
    } else if (type === 1) {
        result.push(memberToGroup[question]);
    }
}

console.log(result.join('\n'));
