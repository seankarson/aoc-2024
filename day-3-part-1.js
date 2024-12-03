const fs = require('fs');
const text = fs.readFileSync('./day-3.txt', 'utf-8');

let total = 0;

const REGEX_1 = /(mul[(]\d+,\d+[)])/g;
const REGEX_2 = /(\d+)/g;

const result1 = text.match(REGEX_1);
result1.forEach(mul => {
    const [num1, num2] = mul.match(REGEX_2);
    total += num1 * num2;
});


console.log(total);

