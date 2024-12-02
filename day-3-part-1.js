const fs = require('fs');
const lines = fs.readFileSync('./day-3.txt', 'utf-8').split('\n');

let total = 0;

lines.forEach(line => {
    const data = line.split(/\s+/).map(num => parseInt(num));

});


console.log(total);

