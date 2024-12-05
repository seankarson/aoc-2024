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

    const originalJoinedPages = pages.join(',');

    pages.sort((a, b) => {
        if (pageNumberRules[a] && pageNumberRules[a].includes(b)) {
            return -1;
        }
        if (pageNumberRules[b] && pageNumberRules[b].includes(a)) {
            return 1;
        }
        return 0;
    });

    const middlePage = pages[(pages.length - 1) / 2];

    if (pages.join(',') === originalJoinedPages) {
        total += middlePage;
    }
}

console.log(total);

