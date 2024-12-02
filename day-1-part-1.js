const fs = require('fs');
const lines = fs.readFileSync('./day-1.txt', 'utf-8').split('\n');

const list1 = [];
const list2 = [];

lines.forEach(line => {
    const [n1, n2] = line.split(/\s+/);
    list1.push(parseInt(n1));
    list2.push(parseInt(n2));
});

list1.sort((a,b) => a - b);
list2.sort((a,b) => a - b);

let sumDiffs = 0;

for (let i = 0; i < list1.length; i++) {
    sumDiffs += Math.abs(list1[i] - list2[i]);
}

console.log(sumDiffs);

