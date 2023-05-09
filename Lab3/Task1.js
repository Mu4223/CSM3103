// Task 1 – JavaScript Function

// 1
function square(number) {
  return number * number;
}
console.log(square(5)); // Output: 25

// 2 
function sumCube(num1, num2) {
  var cube1 = Math.pow(num1, 3);
  var cube2 = Math.pow(num2, 3);
  return cube1 + cube2;
}
console.log(sumCube(2, 3)); // Output: 35

// 3
function reverseNumber(num) {
  var reversed = 0;
  while (num !== 0) {
    reversed = (reversed * 10) + (num % 10);
    num = Math.floor(num / 10);
  }
  return reversed;
}
console.log(reverseNumber(12345)); // Output: 54321

// 4
function printDivisibleByZ(z) {
  for (var i = 1; i <= 100; i++) {
    if (i % z === 0) {
      console.log(i);
    }
  }
}
printDivisibleByZ(5); // Output: 5, 10, 15, 20, 25, ..., 100



