// Equality and inequality with strings
let color = 'red';
console.log(`Is color == 'red'? ${color == 'red'}`); // true
console.log(`Is color == 'blue'? ${color == 'blue'}`); // false
console.log(`Is color != 'green'? ${color != 'green'}`); // true
console.log(`Is color != 'red'? ${color != 'red'}`); // false

// Tests using the lower case function
let fruit = 'APPLE';
console.log(`Is fruit lowercase? ${fruit.toLowerCase() === fruit}`); // false
console.log(`Is fruit lowercase? ${fruit.toLowerCase() !== fruit}`); // true

// Numerical tests
let x = 5;
console.log(`Is x greater than 3? ${x > 3}`); // true
console.log(`Is x less than 2? ${x < 2}`); // false
console.log(`Is x greater than or equal to 5? ${x >= 5}`); // true
console.log(`Is x less than or equal to 4? ${x <= 4}`); // false
console.log(`Is x equal to 5? ${x === 5}`); // true
console.log(`Is x not equal to 5? ${x !== 5}`); // false

// Tests using "and" and "or" operators
let y = 3;
console.log(`Is x greater than 3 and y less than 5? ${x > 3 && y < 5}`); // false
console.log(`Is x greater than 3 or y less than 5? ${x > 3 || y < 5}`); // true

// Test whether an item is in an array
let numbers = [1, 2, 3, 4, 5];
console.log(`Is 3 in the array? ${numbers.includes(3)}`); // true
console.log(`Is 6 in the array? ${numbers.includes(6)}`); // false

// Test whether an item is not in an array
let fruits = ['apple', 'banana', 'orange'];
console.log(`Is 'pear' not in the array? ${!fruits.includes('pear')}`); // true
console.log(`Is 'banana' not in the array? ${!fruits.includes('banana')}`); // false
