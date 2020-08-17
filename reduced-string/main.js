/* https://www.hackerrank.com/challenges/reduced-string/problem */

"use strict";

const fs = require("fs");

let input = fs.readdirSync("input");
let output = fs.readdirSync("output");

if (input.length !== output.length) {
    console.error("input/ouput files missing");
    return;
}

function superReducedString(s) {
    let result,
        t = s;
    do {
        result = t;
        t = t.replace(/(.)\1/g, "");
    } while (result !== t);

    return result !== "" ? result : "Empty String";
}

for (let i = 0; i < input.length; i++) {
    let dataIn = fs.readFileSync(`input/${input[i]}`).toString();
    let dataOut = fs.readFileSync(`output/${output[i]}`).toString();

    let result = superReducedString(dataIn);
    if (result === dataOut) {
        console.log(result, dataOut);
    } else {
        console.error(result, dataOut);
    }
}
