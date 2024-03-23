'use strict';
const { text } = require("stream/consumers");
const helper = require("../_helpers");
const { time } = require("console");
const { resolve } = require("path");

/**
 * https://www.hackerrank.com/challenges/angry-children/problem
 *
 * @param k {number}
 * @param arr {array}
 */
function maxMin(k, arr) {
    arr.sort((a, b) => a - b);
    let result = +Infinity;
    for (let i = 0; i <= arr.length - k; i++) {
        const slice = arr.slice(i, i + k);
        const unf = Math.max(...slice) - Math.min(...slice);
        result = Math.min(result, unf);
    }
    return result;

}

function test(actual, expected) {
    console.assert(actual == expected, `${expected} expected, ${actual} actual`);
}

async function testCase(path, n) {
    let input = helper.reader(`${path}/input/input${n}.txt`);
    let length = (await input.next()).value;
    let k = (await input.next()).value;
    let arr = [];
    for (let i = 0; i < length; ++i) {
        arr[i] = (await input.next()).value;
    }


    let output = helper.reader(`${path}/output/output${n}.txt`);
    let expected = (await output.next()).value;

    const label = `Test case ${n}`;

    // await Promise.race(
    //     [
    //         new Promise((resolve) => {
    //             setTimeout(() => {
    //                 console.error(`${label}, 3000 timed out`);
    //                 resolve();
    //             }, 3000);
    //         }),
    //         new Promise((resolve) => {
    //             setTimeout(() => {
    //                 console.error(`${label}, 1000 timed out`);
    //                 resolve();
    //             }, 1000);
    //         }),
    //         // new Promise((resolve, _) => {
    //         //     console.time(label);
    //         //     test(maxMin(k, arr), expected);
    //         //     console.timeEnd(label);

    //         //     clearTimeout(timeout);

    //         //     resolve();
    //         // }),
    //     ]
    // );

    process.on('unhandledRejection', console.log.bind(console))

    const promise1 = new Promise((resolve, reject) => {
        console.time(label);

        // test(maxMin(k, arr), expected);
        for (let index = 0; index < Number.MAX_SAFE_INTEGER; index++) {
            // simulated workload
        }
        console.timeEnd(label);

        resolve(`${label} OK`);
    });

    const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(`${label} timed out`);
        }, 3000);
    });


    Promise.race([
        promise1,
        promise2,
    ]).catch(console.error);



}

// testCase("angry-children", "00");
testCase("angry-children", "01");
testCase("angry-children", "09");
// testCase("angry-children", "15");
// testCase("angry-children", "16");