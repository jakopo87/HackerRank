'use strict';

const fs = require('node:fs');
const readline = require('node:readline');

module.exports.reader = async function* (path) {
    const fileStream = fs.createReadStream(path);

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.

    for await (const line of rl) {
        // Each line in input.txt will be successively available here as `line`.
        yield line;
    }
}

module.exports.testTimeout = function (seconds) {
    return setTimeout(() => {
        process.exit();
    }, seconds * 1000);
}