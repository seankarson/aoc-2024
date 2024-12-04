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

for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
        if (matrix[row][col] === 'X') {
            if (matrix[row][col+1] === 'M' && matrix[row][col+2] === 'A' && matrix[row][col+3] === 'S') {
                total++
            }
            if (matrix[row][col-1] === 'M' && matrix[row][col-2] === 'A' && matrix[row][col-3] === 'S') {
                total++
            }
            if (matrix[row+3]) {
                if (matrix[row+1][col] === 'M' && matrix[row+2][col] === 'A' && matrix[row+3][col] === 'S') {
                    total++;
                }
                if (matrix[row+1][col+1] === 'M' && matrix[row+2][col+2] === 'A' && matrix[row+3][col+3] === 'S') {
                    total++;
                }
                if (matrix[row+1][col-1] === 'M' && matrix[row+2][col-2] === 'A' && matrix[row+3][col-3] === 'S') {
                    total++;
                }
            }
            if (matrix[row-3]) {
                if (matrix[row-1][col] === 'M' && matrix[row-2][col] === 'A' && matrix[row-3][col] === 'S') {
                    total++;
                }
                if (matrix[row-1][col-1] === 'M' && matrix[row-2][col-2] === 'A' && matrix[row-3][col-3] === 'S') {
                    total++;
                }
                if (matrix[row-1][col+1] === 'M' && matrix[row-2][col+2] === 'A' && matrix[row-3][col+3] === 'S') {
                    total++;
                }
            }
        }
    }
}

console.log(total);

