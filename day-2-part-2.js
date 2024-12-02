const fs = require('fs');
const lines = fs.readFileSync('./day-2.txt', 'utf-8').split('\n');

let total = 0;

const isSafe = (levels) => {
    if (levels.length === 1) {
        return true
    } else {
        if (levels[0] > levels[1]) {
            let lastLevel = levels[0];
            let valid = true;
            for (let i = 1; i < levels.length; i++) {
                const diff = levels[i-1] - levels[i];
                if (diff < 1 || diff > 3) {
                    valid = false;
                }
                lastLevel = levels[i];
            }
            if (valid) {
                return true
            }
        } else if (levels[0] < levels[1]) {
            let lastLevel = levels[0];
            let valid = true;
            for (let i = 1; i < levels.length; i++) {
                const diff = levels[i] - levels[i-1];
                if (diff < 1 || diff > 3) {
                    valid = false;
                }
                lastLevel = levels[i];
            }
            if (valid) {
                return true
            }
        }
    }
    return false;
};

lines.forEach(line => {
    const levels = line.split(/\s+/).map(num => parseInt(num));

    if (isSafe(levels)) {
        total++;
    } else {
        for (let i = 0; i < levels.length; i++) {
            const modifiedLevels = [...levels.slice(0, i), ...levels.slice(i+1)];
            if (isSafe(modifiedLevels)) {
                total++;
                break;
            }
        }
    }
});


console.log(total);

