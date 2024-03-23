/**
 * https://www.hackerrank.com/challenges/is-fibo/problem
 */
function isFibo(n) {
    let y1 = Math.sqrt(5 * n * n + 4);
    let y2 = Math.sqrt(5 * n * n - 4);
    return Number.isInteger(y1) || Number.isInteger(y2) ? "IsFibo" : "IsNotFibo";
}
/**
 *
 */
console.log(isFibo(5));
console.log(isFibo(7));
console.log(isFibo(8));