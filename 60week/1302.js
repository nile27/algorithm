const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0], 10);
const books = input.slice(1);

const bookCount = {}; 
let count = 0; 
let book = ''; 
let max = 0; 
let bestBook = ''; 

for (let i = 0; i < books.length; i++) {
    book = books[i];
    bookCount[book] = (bookCount[book] || 0) + 1;
}

for (let key in bookCount) {
    count = bookCount[key];
    if (count > max || (count === max && key < bestBook)) {
        max = count;
        bestBook = key;
    }
}

console.log(bestBook);
