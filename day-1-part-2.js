const fs = require('fs');
const lines = fs.readFileSync('./day-1.txt', 'utf-8').split('\n');

const list1 = [];
const freq2 = {};

lines.forEach(line => {
    const [n1, n2] = line.split(/\s+/);

    const num1 = parseInt(n1);
    const num2 = parseInt(n2);

    list1.push(num1);
    freq2[num2] = freq2[num2] ? freq2[num2] + 1 : 1;
});

let total = 0;

for (let i = 0; i < list1.length; i++) {
    let num = list1[i];
    let freq = freq2[num];

    if (freq) {
        total += num * freq;
    }
}

console.log(total);

