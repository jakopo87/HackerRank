/* https://www.hackerrank.com/challenges/birthday-cake-candles/problem */

'use strict';

function birthdayCakeCandles(ar) {
    var max = Math.max(...ar);
    return ar.filter(x => x === max).length
}

console.log(birthdayCakeCandles([3, 2, 1, 3]), 2);