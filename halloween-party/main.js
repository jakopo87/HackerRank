/* https://www.hackerrank.com/challenges/halloween-party/problem */

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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// First working example
function halloweenParty_1(k) {
    return Math.ceil(k/2)*Math.floor(k/2);
}
// Replaced Math.floor with bitwise NOT
const halloweenParty_2 = k => {
    k/=2; 
    return ~~(k+k%1) * ~~(k)
};
// Almost unreadable one-liner
const halloweenParty=k=>(k=>~~(k+k%1)*~~k).call(0,k/2);

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const k = parseInt(readLine(), 10);

        let result = halloweenParty(k);

        ws.write(result + "\n");
    }

    ws.end();
}
