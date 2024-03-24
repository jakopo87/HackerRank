'use strict';
const helper = require("../../_helpers");
const reader = helper.reader;

/*
 * Complete the 'gameOfThrones' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function gameOfThrones(s) {
    const bucket = [];
    for (const i in s) {
        const c = s.charAt(i);
        if (!bucket.includes(c)) {
            bucket.push(c);
        } else {
            bucket.splice(bucket.indexOf(c), 1);
        }
    }
    return bucket.length <= 1 ? "YES" : "NO";
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

    let input = reader(`${path}/input/${caseNum}.txt`);
    let output = reader(`${path}/output/${caseNum}.txt`);

    const expected = (await output.next()).value;
    const s = (await input.next()).value

    process.stdout.write(`Test case ${path} ${caseNum}:`);

    test(() => gameOfThrones(s), expected);

    process.stdout.write("\n");

}

testCase("game-of-thrones", "00");
testCase("game-of-thrones", "01");
testCase("game-of-thrones", "02");