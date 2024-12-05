const fs = require('fs');
const lines1 = fs.readFileSync('./day-5-1.txt', 'utf-8').split('\n');
const lines2 = fs.readFileSync('./day-5-2.txt', 'utf-8').split('\n');

let total = 0;

const pageNumberRules = {};

for (const line of lines1) {
    const [page1Str, page2Str] = line.split('|');

    const page1 = parseInt(page1Str);
    const page2 = parseInt(page2Str);

    const rule = pageNumberRules[page1];
    if (rule) {
        rule.push(page2);
    } else {
        pageNumberRules[page1] = [page2];
    }
}

for (const line of lines2) {
    const pages = line.split(',').map(num => parseInt(num));

    let valid = true;
    for (let i = 0; i < pages.length - 1; i++) {
        for (let j = i + 1; j < pages.length; j++) {
            const page1 = pages[i];
            const page2 = pages[j];
            if (pageNumberRules[page2] && pageNumberRules[page2].includes(page1)) {
                valid = false;
                pages[j] = page1;
                pages[i] = page2;
            }
        }
    }

    const middlePage = pages[(pages.length - 1) / 2];

    if (!valid) {
        total += middlePage;
    }
}

console.log(total);

