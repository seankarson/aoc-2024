const fs = require('fs');
const lines = fs.readFileSync('./day-9.txt', 'utf-8').split('\n');

let total = 0;

const digits = lines[0].split('').map(x => parseInt(x));

const filesystem = [];

let fileIdCounter = 0;

for (let i = 0; i < digits.length; i++) {
    const digit = digits[i];

    if (i % 2 === 0) {
        for (let j = 0; j < digit; j++) {
            filesystem.push(fileIdCounter);
        }

        fileIdCounter++;
    } else {
        for (let j = 0; j < digit; j++) {
            filesystem.push(null);
        }
    }
}

let leftIndex = filesystem.findIndex(item => item == null);
let rightIndex = filesystem.findLastIndex(item => item != null);

while (leftIndex < rightIndex) {
    if (filesystem[rightIndex] == null) {
        rightIndex--;
    } else if (filesystem[leftIndex] != null) {
        leftIndex++;
    } else {
        filesystem[leftIndex] = filesystem[rightIndex];
        filesystem[rightIndex] = null;
        leftIndex++;
        rightIndex--;
    }
}

const strippedFilesystem = filesystem.filter(item => item != null);

for (let i = 0; i < strippedFilesystem.length; i++) {
    const item = strippedFilesystem[i];

    total += item * i;
}

console.log(total);

