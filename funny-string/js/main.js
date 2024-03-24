'use strict';
const helper = require("../../_helpers");
const reader = helper.reader;

/*
 * Complete the 'gameOfThrones' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function funnyString(s) {
    for (let i = 0; i < s.length - 1; ++i) {
        const diffAsc = Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
        const diffDesc = Math.abs(s.charCodeAt(s.length - 1 - i) - s.charCodeAt(s.length - 2 - i));
        if (diffAsc !== diffDesc) {
            return "Not Funny";
        }
    }
    return "Funny";
}

function test(fn, expected) {
    const actual = fn();
    if (actual === expected) {
        process.stdout.write(" OK");
    } else {
        process.stdout.write(` ${expected} expected, ${actual} actual`);
    }
}

async function testCase(path, caseNum) {
    process.on('unhandledRejection', console.log.bind(console));

    let input = reader(`${path}/input/input${caseNum}.txt`);
    let output = reader(`${path}/output/output${caseNum}.txt`);

    const n = (await input.next()).value * 1;

    for (let i = 0; i < n; ++i) {

        const s = (await input.next()).value
        const expected = (await output.next()).value;

        process.stdout.write(`Test case ${path} ${caseNum}.${i}:`);
        test(() => funnyString(s), expected);
        process.stdout.write("\n");
    }
}

testCase("funny-string", "00");
testCase("funny-string", "01");