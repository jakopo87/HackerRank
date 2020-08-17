/* https://www.hackerrank.com/challenges/plus-minus/problem */
'use strict';

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

// First working solution.
function plusMinus_1(arr) {
    let p = 0;
    let n = 0;
    let z = 0;
    let l = arr.length;

    for(let i=0;i<l;++i){
        let x = arr[i];
        if(x === 0){
            z++;
        } else {
            if(x>0){
                p++;
            }else{
                n++;
            }
        }
    }

    console.log(p/l);
    console.log(n/l);
    console.log(z/l);
}

// Use a single object instead of 3 var.
function plusMinus_2(arr) {
    let r = {p:0,n:0,z:0};
    let l = arr.length;

    for(let i=0;i<l;++i){
        let x = arr[i];
        if(x === 0){
            r.z++;
        } else {
            r[x>0?'p':'n']++;
        }
    }

    console.log(r.p/l);
    console.log(r.n/l);
    console.log(r.z/l);
}

// Replaced "if" with ternary operator.
function plusMinus_3(arr) {
    let r = {p:0,n:0,z:0};
    let l = arr.length;

    for(let i=0;i<l;++i){
        r[arr[i] ? (arr[i] > 0 ? 'p' : 'n') : 'z']++;
    }

    console.log(r.p/l);
    console.log(r.n/l);
    console.log(r.z/l);
}

// Use Math.sign values as property of the object with the sums.
function plusMinus_4(arr) {
    let r = {"-1":0,"0":0,"1":0};
    let l = arr.length;

    for(let i=0;i<l;++i){
        r[Math.sign(arr[i])]++;
    }

    console.log(r["1"]/l);
    console.log(r["-1"]/l);
    console.log(r["0"]/l);
}

// Replaced for-loop with Array.reduce().
function plusMinus_5(arr) {
    let l = arr.length;
    let r = arr.reduce((r,x)=>{r[Math.sign(x)]++;return r},{"-1":0,"0":0,"1":0})

    console.log(r["1"]/l);
    console.log(r["-1"]/l);
    console.log(r["0"]/l);
}

// Divide each increment by a.length.
function plusMinus_6(a) {
    let r = a.reduce((r,x)=>{r[Math.sign(x)]+=1/a.length;return r;},{"-1":0,"0":0,"1":0});

    console.log(r["1"]);
    console.log(r["-1"]);
    console.log(r["0"]);
}

// Used an array instead of an object to keep the final results.
// [1,2,0][Math.sign(x)+1] put each sum in the order in which they need to be printed.
// Concatenated the output into a single multiline string.
const plusMinus_7 = a =>console.log(a
    .reduce((r,x)=>{r[[1,2,0][Math.sign(x)+1]]+=1/a.length;return r;},[0,0,0])
    .join("\n")
);

// Renamed Array.filter() to Array.f() just keep it short.
// Constructed 3 arrays with posivites, negatives and zeroes.
Array.prototype.f=Array.prototype.filter;
const plusMinus = a =>console.log([a.f(x=>x>0),a.f(x=>x<0),a.f(x=>!x)].map(x=>x.length/a.length).join("\n"));

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
