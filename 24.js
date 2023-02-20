// Equality and inequality with strings
var color = 'red';
console.log("Is color == 'red'? ".concat(color == 'red')); // true
console.log("Is color == 'blue'? ".concat(color == 'blue')); // false
console.log("Is color != 'green'? ".concat(color != 'green')); // true
console.log("Is color != 'red'? ".concat(color != 'red')); // false
// Tests using the lower case function
var fruit = 'APPLE';
console.log("Is fruit lowercase? ".concat(fruit.toLowerCase() === fruit)); // false
console.log("Is fruit lowercase? ".concat(fruit.toLowerCase() !== fruit)); // true
// Numerical tests
var x = 5;
console.log("Is x greater than 3? ".concat(x > 3)); // true
console.log("Is x less than 2? ".concat(x < 2)); // false
console.log("Is x greater than or equal to 5? ".concat(x >= 5)); // true
console.log("Is x less than or equal to 4? ".concat(x <= 4)); // false
console.log("Is x equal to 5? ".concat(x === 5)); // true
console.log("Is x not equal to 5? ".concat(x !== 5)); // false
// Tests using "and" and "or" operators
var y = 3;
console.log("Is x greater than 3 and y less than 5? ".concat(x > 3 && y < 5)); // false
console.log("Is x greater than 3 or y less than 5? ".concat(x > 3 || y < 5)); // true
// Test whether an item is in an array
var numbers = [1, 2, 3, 4, 5];
console.log("Is 3 in the array? ".concat(numbers.includes(3))); // true
console.log("Is 6 in the array? ".concat(numbers.includes(6))); // false
// Test whether an item is not in an array
var fruits = ['apple', 'banana', 'orange'];
console.log("Is 'pear' not in the array? ".concat(!fruits.includes('pear'))); // true
console.log("Is 'banana' not in the array? ".concat(!fruits.includes('banana'))); // false
