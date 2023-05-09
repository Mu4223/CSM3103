// Task 2 - JavaScript Recursion Function

//1
function sumDigit(num) {
    if (num === 0) {
        return 0;
    } else {
        return (num % 10) + sumDigit(Math.floor(num / 10));
    }
}
console.log(sumOfDigits(123)); // Output: 6 (since 1 + 2 + 3 = 6)

//2
function power(x, y) {
    if (y === 0) {
        return 1;
    } else if (y % 2 === 0) {
        var result = power(x, y / 2);
        return result * result;
    } else {
        return x * power(x, y - 1);
    }
}
console.log(power(2, 3)); // Output: 8 (since 2^3 = 2 * 2 * 2 = 8)  

