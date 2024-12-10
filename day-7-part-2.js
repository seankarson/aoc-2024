const fs = require('fs');
const lines = fs.readFileSync('./day-7.txt', 'utf-8').split('\n');

let total = 0;

const values = [];

for (const line of lines) {
    const [v1, v2] = line.split(':').map(x => x.trim());

    values.push({solution: parseInt(v1), numbers: v2.split(' ').map(x => parseInt(x))});
}

const canWork = (solution, numbers) => {
    if (numbers.length === 1) {
        return solution === numbers[0];
    }

    return canWork(solution, [numbers[0] + numbers[1], ...numbers.slice(2)]) || canWork(solution, [numbers[0] * numbers[1], ...numbers.slice(2)]) || canWork(solution, [parseInt(numbers[0] + '' + numbers[1]), ...numbers.slice(2)])
};

for (const value of values) {
    if (canWork(value.solution, value.numbers)) {
        total += value.solution;
    }
}

console.log(total);

