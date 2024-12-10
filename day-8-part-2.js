const fs = require('fs');
const lines = fs.readFileSync('./day-8.txt', 'utf-8').split('\n');

let total = 0;

const matrix = [];
const symbolLocations = {};

const inBounds = ([row, col]) => {
    return row >= 0 && row < matrix.length && col >= 0 && col < matrix[0].length
};

let rowNum = 0;
for (const line of lines) {
    const row = []
    matrix.push(row);
    let col = 0;
    for (const char of line.split('')) {
        row.push(char);
        if (char !== '.') {
            const locations = symbolLocations[char];
            if (!locations) {
                symbolLocations[char] = [[rowNum, col]];
            } else {
                locations.push([rowNum, col]);
            }
        }
        col++;
    }
    rowNum++
}

const interferenceNodes = new Set();

for (const [char, locations] of Object.entries(symbolLocations)) {
    for (let i = 0; i < locations.length; i++) {
        for (let j = i + 1; j < locations.length; j++) {
            const location1 = locations[i];
            const location2 = locations[j];

            const rowDistance = location1[0] - location2[0];
            const colDistance = location1[1] - location2[1];

            const possibleIntNodeBackwards = [...location1];
            while(true) {
                if (inBounds(possibleIntNodeBackwards)) {
                    interferenceNodes.add(`${possibleIntNodeBackwards[0]}-${possibleIntNodeBackwards[1]}`)
                    possibleIntNodeBackwards[0] += rowDistance;
                    possibleIntNodeBackwards[1] += colDistance;
                } else {
                    break;
                }
            }

            const possibleIntNodeForwards = [...location2];
            while(true) {
                if (inBounds(possibleIntNodeForwards)) {
                    interferenceNodes.add(`${possibleIntNodeForwards[0]}-${possibleIntNodeForwards[1]}`)
                    possibleIntNodeForwards[0] -= rowDistance;
                    possibleIntNodeForwards[1] -= colDistance;
                } else {
                    break;
                }
            }
        }
    }
}

console.log(interferenceNodes.size);

