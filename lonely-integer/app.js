/* https://www.hackerrank.com/challenges/lonely-integer/problem */

// Complete the lonelyinteger function below.

/* XOR */
const lonelyinteger1 = a => {
    let v = 0;
    for (let n of a) {
        v = v ^ n;
    }
    return v;
}

/* Sorting + Regex */
const lonelyinteger2 = a => +a.sort().join(" ").replace(/(\d+) \1/g, "");

/* Array.reduce() + XOR */
const lonelyinteger3 = a => a.reduce((v, n) => v ^ n, 0);

// -----------------------------------------

/* ------------------------------------------------------------ */
var expected, actual;

expected = 2;
actual = lonelyinteger([1, 1, 2]);
console.assert(expected === actual, { expected, actual });

expected = 2;
actual = lonelyinteger([0, 0, 1, 2, 1]);
console.assert(expected === actual, { expected, actual });