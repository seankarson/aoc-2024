const fs = require('fs');
const text = fs.readFileSync('./day-3.txt', 'utf-8');

let total = 0;

const REGEX_1 = /(mul[(]\d+,\d+[)])/g;
const REGEX_2 = /(\d+)/g;
const REGEX_3 = /(do[(][)])|(don't[(][)])/g;

const split = text.split(REGEX_3);
const filteredSplit = split.filter(s => s != null);

let on = true;

for (const section of filteredSplit) {
    if (section === 'do()') {
        on = true;
    } else if (section === 'don\'t()') {
        on = false;
    } else if (on) {
        const result1 = section.match(REGEX_1);
        result1.forEach(mul => {
            const [num1, num2] = mul.match(REGEX_2);
            total += num1 * num2;
        });
    }
}


console.log(total);

