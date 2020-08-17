/* https://www.hackerrank.com/challenges/chocolate-feast/problem */

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

// First working example
function chocolateFeast_1(n, c, m) {
    let bars = Math.floor(n/c);
    let wrappers = bars;

    while(wrappers >= m){
        let trade = Math.floor(wrappers/m);
        bars+=trade;
        wrappers = wrappers + (1-m) * trade;
    }

    return bars;
}
// Hoisted variables and used single char names
function chocolateFeast_2(n, c, m) {
    var b=Math.floor(n/c), w=b, t;

    while(w >= m){
        b += (t = Math.floor(w/m));
        w += (1-m) * t;
    }

    return b;
}
// Tail recursive function instead of while loop
// Removed local variables
function chocolateFeast_3(n, c, m) {
    const f = (w,s)=>{
        s = s || w;
        let t = Math.floor(w/m);
        return w>=m ? f(w + (1-m) * t, s+t) : s;
    }

    return f(Math.floor(n/c));
}
// Self invoking function
const chocolateFeast = (n, c, m) => (function f(w,s){
    s = s || w;
    let t = Math.floor(w/m);
    return w >= m ? f(w + (1-m) * t, s+t) : s;
})(Math.floor(n/c));

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const ncm = readLine().split(' ');

        const n = parseInt(ncm[0], 10);

        const c = parseInt(ncm[1], 10);

        const m = parseInt(ncm[2], 10);

        let result = chocolateFeast(n, c, m);

        ws.write(result + "\n");
    }

    ws.end();
}
