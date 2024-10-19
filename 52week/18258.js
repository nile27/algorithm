const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const commands = input.slice(1);
let result = [];
let queue = [];
let head = 0;

for (let command of commands) {
    const [cmd, value] = command.split(' ');

    switch (cmd) {
        case 'push':
            queue.push(value);
            break;
        case 'pop':
            result.push(queue.length > head ? queue[head++] : -1);
            break;
        case 'size':
            result.push(queue.length - head);
            break;
        case 'empty':
            result.push(queue.length === head ? 1 : 0);
            break;
        case 'front':
            result.push(queue.length > head ? queue[head] : -1);
            break;
        case 'back':
            result.push(queue.length > head ? queue[queue.length - 1] : -1);
            break;
    }
}

console.log(result.join('\n'));
