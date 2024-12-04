const fs = require('fs');
const lines = fs.readFileSync('./day-4.txt', 'utf-8').split('\n');

let total = 0;

const matrix = [];

for (const line of lines) {
    const row = []
    matrix.push(row);
    for (const char of line.split('')) {
        row.push(char);
    }
}

const possibleCrossCenters = []

for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
        if (row > 0 && row < matrix.length - 1 && col > 0 && col < matrix[row].length -1 && matrix[row][col] === 'A') {
            possibleCrossCenters.push([row, col]);
        }
    }
}

possibleCrossCenters.forEach(([row, col]) => {
    if (matrix[row-1][col-1] === 'S' && matrix[row+1][col+1] === 'M' && matrix[row+1][col-1] === 'S' && matrix[row-1][col+1] === 'M') {
        total++;
    }
    if (matrix[row-1][col-1] === 'M' && matrix[row+1][col+1] === 'S' && matrix[row+1][col-1] === 'S' && matrix[row-1][col+1] === 'M') {
        total++;
    }
    if (matrix[row-1][col-1] === 'S' && matrix[row+1][col+1] === 'M' && matrix[row+1][col-1] === 'M' && matrix[row-1][col+1] === 'S') {
        total++;
    }
    if (matrix[row-1][col-1] === 'M' && matrix[row+1][col+1] === 'S' && matrix[row+1][col-1] === 'M' && matrix[row-1][col+1] === 'S') {
        total++;
    }
});

console.log(total);

