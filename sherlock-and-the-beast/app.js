/* https://www.hackerrank.com/challenges/sherlock-and-the-beast/problem */

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// First working solution.
function decentNumber_1(n) {
    let f = n;
    let t = 0;

    while ((f % 3) || (t % 5)) {
        --f;
        ++t;

        if (f < 0) {
            console.log(-1);
            return;
        }
    }

    console.log("5".repeat(f) + "3".repeat(t));
}

// Use n-m instead of f and m instead of t.
function decentNumber_2(n) {
    let m = 0;

    while (((n - m) % 3) || (m % 5)) {
        ++m;
        if (n - m < 0) {
            console.log(-1);
            return;
        }
    }

    console.log("5".repeat(n - m) + "3".repeat(m));
}

// Put the post-icrement in the condition and use an OR to avoid shortcircuit.
// Added a pre-decrement to fix m value.
function decentNumber_3(n) {
    let m = 0;

    while (((n - m) % 3) | (m++ % 5)) {
        if (n - m < 0) {
            console.log(-1);
            return;
        }
    }

    console.log("5".repeat(n - --m) + "3".repeat(m));
}

// Use a for-loop instead of while-loop.
// Remove post-increment and pre-decrement operators.
function decentNumber(n) {
    for (var m = 0; ((n - m) % 3) || (m % 5); ++m) {
        if (n < m) {
            console.log(-1);
            return;
        }
    }

    console.log("5".repeat(n - m) + "3".repeat(m));
}

function main() {
    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        decentNumber(n);
    }
}
