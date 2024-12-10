const fs = require('fs');
const lines = fs.readFileSync('./day-10.txt', 'utf-8').split('\n');

let total = 0;

const matrix = [];
const trailheadLocations = [];

let rowNum = 0;
for (const line of lines) {
    const row = []
    matrix.push(row);
    let colNum = 0;
    for (const char of line.split('')) {
        row.push(parseInt(char));
        if (parseInt(char) === 0) {
            trailheadLocations.push([rowNum, colNum]);
        }
        colNum++;
    }
    rowNum++;
}

const inBounds = ([row, col]) => {
    return row >= 0 && row < matrix.length && col >= 0 && col < matrix[0].length
};

const progress = (row, col, currentNum, validEnds) => {
    if (currentNum === 9) {
        validEnds.add(`${row}-${col}`);
        return;
    }

    const nextNum = currentNum + 1;

    if (inBounds([row, col+1]) && matrix[row][col+1] === nextNum) {
        progress(row, col + 1, nextNum, validEnds);
    }

    if (inBounds([row, col-1]) && matrix[row][col-1] === nextNum) {
        progress(row, col - 1, nextNum, validEnds);
    }

    if (inBounds([row + 1, col]) && matrix[row+1][col] === nextNum) {
        progress(row + 1, col, nextNum, validEnds);
    }

    if (inBounds([row - 1, col]) && matrix[row-1][col] === nextNum) {
        progress(row - 1, col, nextNum, validEnds);
    }
};

for (const [tRow, tCol] of trailheadLocations) {
    const validEnds = new Set();

    progress(tRow, tCol, 0, validEnds);

    total += validEnds.size;
}

console.log(total);
