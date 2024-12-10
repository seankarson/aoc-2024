const fs = require('fs');
const lines = fs.readFileSync('./day-8.txt', 'utf-8').split('\n');

const matrix = [];
const symbolLocations = {};

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

for (const locations of Object.values(symbolLocations)) {
    for (let i = 0; i < locations.length; i++) {
        for (let j = i + 1; j < locations.length; j++) {
            const location1 = locations[i];
            const location2 = locations[j];

            const rowDistance = location1[0] - location2[0];
            const colDistance = location1[1] - location2[1];

            const intNode1 = [location1[0] + rowDistance, location1[1] + colDistance];
            const intNode2 = [location2[0] - rowDistance, location2[1] - colDistance];

            if (intNode1[0] >= 0 && intNode1[0] < matrix.length && intNode1[1] >= 0 && intNode1[1] < matrix[0].length) {
                interferenceNodes.add(`${intNode1[0]}-${intNode1[1]}`);
            }
            if (intNode2[0] >= 0 && intNode2[0] < matrix.length && intNode2[1] >= 0 && intNode2[1] < matrix[0].length) {
                interferenceNodes.add(`${intNode2[0]}-${intNode2[1]}`);
            }
        }
    }
}

console.log(interferenceNodes.size);

