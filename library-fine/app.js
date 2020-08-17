/* https://www.hackerrank.com/challenges/library-fine/problem */
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

// First working examples.
function libraryFine_1(d1, m1, y1, d2, m2, y2) {
    if(y1>y2){
        return 10000;
    }

    if(y1===y2 && m1>m2){
        return 500*(m1-m2);
    }

    if(y1===y2 && m1===m2 && d1>d2){
        return 15*(d1-d2);
    }

    return 0;
}

// Diff year, month and day.
function libraryFine_2(d1, m1, y1, d2, m2, y2) {
    let diff = [y1-y2,m1-m2,d1-d2];

    if(diff[0]>0){
        return 10000;
    }

    if(diff[0]===0 && diff[1]>0){
        return 500*diff[1];
    }

    if(diff[0]===0 && diff[1]===0 && diff[2]>0){
        return 15*diff[2];
    }

    return 0;
}

// Construct an if tree.
function libraryFine_3(d1, m1, y1, d2, m2, y2) {
    let diff = [y1-y2,m1-m2,d1-d2];
    
    if(diff[0]>0){
        return 10000;
    } else {
        if(diff[0]===0 && diff[1]>0){
            return 500*diff[1];
        } else {
            if(diff[0]===0 && diff[1]===0 && diff[2]>0){
                return 15*diff[2];
            } else {
                return 0;
            }
        }
    }
}

// Convert to ternary operators and concatenate everything.
function libraryFine_4(d1, m1, y1, d2, m2, y2) {
    let diff = [y1-y2,m1-m2,d1-d2];
    
    return diff[0]>0 ? 10000 : diff[0]===0 && diff[1]>0 ? 500*diff[1] : diff[0]===0 && diff[1]===0 && diff[2]>0 ? 15*diff[2] : 0;
}

// Restarting from libraryFine_2.
// Skip the if-branch when equals to zero.
function libraryFine_5(d1, m1, y1, d2, m2, y2) {
    let diff = [y1-y2,m1-m2,d1-d2];

    if(diff[0]!=0){
        return diff[0]>0 ? 10000 : 0;
    }

    if(diff[1]!=0){
        return diff[1]>0 ? 500*diff[1] : 0;
    }

    return diff[2]>0 ? 15*diff[2] : 0;
}

// Replace ternary with Math.max for days and month.
// Use an object and Math.sign for years.
function libraryFine_6(d1, m1, y1, d2, m2, y2) {
    let diff = [y1-y2,m1-m2,d1-d2];

    if(diff[0]!=0){
        return {"-1":0,"1":10000}[""+Math.sign(diff[0])];
    }

    if(diff[1]!=0){
        return 500*Math.max(diff[1],0);
    }

    return 15*Math.max(diff[2],0);
}

// Use an object/Math.sign for days too.
function libraryFine_7(d1, m1, y1, d2, m2, y2) {
    let diff = [y1-y2,m1-m2,d1-d2];

    if(diff[0]!=0){
        return {"-1":0,"1":10000}[""+Math.sign(diff[0])];
    }

    if(diff[1]!=0){
        return {"-1":0,"1":500*Math.max(diff[1],0)}[""+Math.sign(diff[1])];
    }

    if(diff[2]!=0){
        return {"-1":0,"1":15*Math.max(diff[2],0)}[""+Math.sign(diff[2])];
    }

    return 0;
}

// Compare date strings to filder out return dates lower than due dates.
// Get rid of object/Math.sign usage.
// Replace if-branches with switch-case.
// Get rid of diff array.
function libraryFine_8(d1, m1, y1, d2, m2, y2) {
    if(`${y1}-${m1}-${d1}`<= `${y2}-${m2}-${d2}`){
        return 0;
    }

    switch(true){
        case y1>y2:
            return 10000;
        case m1>m2:
            return 500*Math.max(m1-m2,0);
        case d1>d2:
            return 15*Math.max(d1-d2,0);
        default:
            return 0;
    }
}

// Move the if-branch into the switch and put it in cascade with the default-case.
// Removed reduntant Math.max usage.
function libraryFine(d1, m1, y1, d2, m2, y2) {
    switch(true){
        case `${y1}-${m1}-${d1}`<= `${y2}-${m2}-${d2}`:
        default:
            return 0;
        case y1>y2:
            return 10000;
        case m1>m2:
            return 500*(m1-m2);
        case d1>d2:
            return 15*(d1-d2);
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const d1M1Y1 = readLine().split(' ');

    const d1 = parseInt(d1M1Y1[0], 10);

    const m1 = parseInt(d1M1Y1[1], 10);

    const y1 = parseInt(d1M1Y1[2], 10);

    const d2M2Y2 = readLine().split(' ');

    const d2 = parseInt(d2M2Y2[0], 10);

    const m2 = parseInt(d2M2Y2[1], 10);

    const y2 = parseInt(d2M2Y2[2], 10);

    let result = libraryFine(d1, m1, y1, d2, m2, y2);

    ws.write(result + "\n");

    ws.end();
}
