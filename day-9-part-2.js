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


for (let i = fileIdCounter - 1; i >= 0 ; i--) {
    let lastDigitIndex = filesystem.findLastIndex(item => item === i);

    let digitDistance = 1;
    for (let j = lastDigitIndex - 1; j >= 0; j--) {
        if (filesystem[j] === i) {
            digitDistance++;
        } else {
            break;
        }
    }

    let firstBlankIndex = filesystem.map(item => item == null ? '.' : 'x').join('').indexOf('.'.repeat(digitDistance));

    if (firstBlankIndex === -1 || firstBlankIndex > lastDigitIndex) {
        continue;
    }

    for (let j = 0; j < digitDistance; j++) {
        filesystem[firstBlankIndex] = i;
        filesystem[lastDigitIndex] = null;

        firstBlankIndex++;
        lastDigitIndex--;
    }
}

for (let i = 0; i < filesystem.length; i++) {
    const item = filesystem[i];

    if (item != null) {
        total += item * i;
    }
}

console.log(total);

