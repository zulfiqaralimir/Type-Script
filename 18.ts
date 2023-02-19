const placesToVisit = ["Tokyo", "Paris", "Sydney", "New York", "Rio de Janeiro"];

// Print original array
const printArray = (arr: string[]): void => console.log(arr);
printArray(placesToVisit);

// Print array in alphabetical order without modifying it
const printSortedArray = (arr: string[]): void => console.log([...arr].sort());
printSortedArray(placesToVisit);

// Show that original array is still in its original order
printArray(placesToVisit);

// Print array in reverse alphabetical order without modifying it
const printReverseSortedArray = (arr: string[]): void => console.log([...arr].sort().reverse());
printReverseSortedArray(placesToVisit);

// Show that original array is still in its original order
printArray(placesToVisit);

// Reverse the order of the array
const reversedArray = [...placesToVisit].reverse();
printArray(reversedArray);

// Reverse the order of the array again to get the original order
printArray(reversedArray.reverse());

// Sort the array in alphabetical order
const sortedArray = [...placesToVisit].sort();
printArray(sortedArray);

// Sort the array in reverse alphabetical order
const reverseSortedArray = [...placesToVisit].sort().reverse();
printArray(reverseSortedArray);


