const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0], 10);
const students = input.slice(1).map(line => {
    const [name, day, month, year] = line.split(' ');
    return { name, day: parseInt(day, 10), month: parseInt(month, 10), year: parseInt(year, 10) };
});

students.sort((a, b) => {
    if (a.year !== b.year) return a.year - b.year;
    if (a.month !== b.month) return a.month - b.month;
    return a.day - b.day;
});

console.log(students[N - 1].name); 
console.log(students[0].name);     
