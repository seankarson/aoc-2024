const fs = require('fs');
const lines = fs.readFileSync('./day-6.txt', 'utf-8').split('\n');

let total = 0;

const matrix = [];

for (const line of lines) {
    const row = []
    matrix.push(row);
    for (const char of line.split('')) {
        row.push(char);
    }
}

let originalGuard;
let originalGuardDirection = 'up';

for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
        if (matrix[row][col] === '^') {
            originalGuard = [row, col];
        }
    }
}

let totalLoops = 0;

const tryLoop = () => {
    let guard = originalGuard;
    let guardDirection = originalGuardDirection;

    const positionsVisited = new Set();

    let hasLooped = false;

    const progress = () => {
        const row = guard[0];
        const col = guard[1];
        const positionStr = row + '-' + col + '-' + guardDirection;

        if (positionsVisited.has(positionStr)) {
            hasLooped = true;
            return false;
        }

        positionsVisited.add(positionStr);

        if (guardDirection === 'up' && row === 0) {
            return false;
        }
        if (guardDirection === 'down' && row === matrix.length - 1) {
            return false;
        }
        if (guardDirection === 'left' && col === 0) {
            return false;
        }
        if (guardDirection === 'right' && col === matrix[0].length - 1) {
            return false;
        }

        if (guardDirection === 'up') {
            if (matrix[row-1][col] === '#') {
                guardDirection = 'right';
            } else {
                guard = [row-1,col];
            }
        } else if (guardDirection === 'down') {
            if (matrix[row+1][col] === '#') {
                guardDirection = 'left';
            } else {
                guard = [row+1,col];
            }
        } else if (guardDirection === 'left') {
            if (matrix[row][col-1] === '#') {
                guardDirection = 'up';
            } else {
                guard = [row,col-1];
            }
        } else if (guardDirection === 'right') {
            if (matrix[row][col+1] === '#') {
                guardDirection = 'down';
            } else {
                guard = [row,col+1];
            }
        }

        return true;
    }

    while(true) {
        if (!progress()) {
            if (hasLooped) {
                totalLoops++;
            }
            break;
        }
    }
};

for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
        if (row === originalGuard[0] && col === originalGuard[1]) {
            continue;
        }
        if (matrix[row][col] === '#') {
            continue;
        }
        matrix[row][col] = '#';
        tryLoop();
        matrix[row][col] = '.';
    }
}

console.log(totalLoops);