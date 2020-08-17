/* https://www.hackerrank.com/challenges/sherlock-and-squares/problem */

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// First working sample.
function squares_1(a, b) {
    let n = 0
    for(var i=Math.ceil(Math.sqrt(a));i<=Math.floor(Math.sqrt(b));++i){
        if(i*i<=b){
            n++;
        }
    }
    return n;
}

// Cache lower and upper bounds.
// Use check condition to increment count.
function squares(a, b) {
    let n = 0;
    let lower = Math.ceil(Math.sqrt(a));
    let upper = Math.floor(Math.sqrt(b));
    for(var i=lower;i<=upper;++i){
        n += i*i<=b;
    }
    return n;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const ab = readLine().split(' ');

        const a = parseInt(ab[0], 10);

        const b = parseInt(ab[1], 10);

        let result = squares(a, b);

        ws.write(result + "\n");
    }

    ws.end();
}
