'use strict';
const helper = require("../../_helpers");
let timeoutId;

/*
 * Complete the 'solve' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY operations
 */

function solve(n, operations) {
    let sum = 0;
    for (const element of operations) {
        const operation = element;
        sum += (operation[1] - operation[0] + 1) * operation[2];
    }
    return Math.floor(sum / n);
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

    let input = helper.reader(`${path}/input/${caseNum}.txt`);
    let output = helper.reader(`${path}/output/${caseNum}.txt`);

    const expected = (await output.next()).value * 1;
    const [n, size] = ((await input.next()).value).split(" ").map(Number);

    const operations = [];
    for (let i = 0; i < size; ++i) {
        operations.push((await input.next()).value.split(" ").map(Number));
    }

    process.stdout.write(`Test case ${path} ${caseNum}:`);

    test(() => solve(n, operations), expected);

    process.stdout.write("\n");

}

testCase("filling-jars", "00");
testCase("filling-jars", "07");