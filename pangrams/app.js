/* https://www.hackerrank.com/challenges/pangrams/problem */
/* ------------------------------------------------------ */
// Use regex to replace duplicate in a sorted string
function pangrams_1(s) {
    let chars = s
        .toLowerCase()
        .split('')
        .sort()
        .join('')
        .replace(/(.)\1+/g, "$1")
        .replace(/\s/g, '');

    return (chars.length != 26 ? 'not ' : '') + 'pangram';
}

// Use a Set to remove duplicate letters
function pangrams_2(s) {
    let chars = new Set(s
        .replace(/\s/g, '')
        .toLowerCase()
        .split('')
    );

    return (chars.size != 26 ? 'not ' : '') + 'pangram';
}

// One-liner
const pangrams = s => ((new Set(s.replace(/\s/g, '').toLowerCase().split(''))).size != 26 ? 'not ' : '') + 'pangram';
/* ------------------------------------------------------------ */
var expected, actual;

expected = "pangram";
actual = pangrams("We promptly judged antique ivory buckles for the next prize");
console.assert(expected === actual, { expected, actual });

expected = "not pangram";
actual = pangrams("We promptly judged antique ivory buckles for the prize");
console.assert(expected === actual, { expected, actual });