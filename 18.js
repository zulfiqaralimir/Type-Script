var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ["Tokyo", "Paris", "Sydney", "New York", "Rio de Janeiro"];
// Print original array
var printArray = function (arr) { return console.log(arr); };
printArray(placesToVisit);
// Print array in alphabetical order without modifying it
var printSortedArray = function (arr) { return console.log(__spreadArray([], arr, true).sort()); };
printSortedArray(placesToVisit);
// Show that original array is still in its original order
printArray(placesToVisit);
// Print array in reverse alphabetical order without modifying it
var printReverseSortedArray = function (arr) { return console.log(__spreadArray([], arr, true).sort().reverse()); };
printReverseSortedArray(placesToVisit);
// Show that original array is still in its original order
printArray(placesToVisit);
// Reverse the order of the array
var reversedArray = __spreadArray([], placesToVisit, true).reverse();
printArray(reversedArray);
// Reverse the order of the array again to get the original order
printArray(reversedArray.reverse());
// Sort the array in alphabetical order
var sortedArray = __spreadArray([], placesToVisit, true).sort();
printArray(sortedArray);
// Sort the array in reverse alphabetical order
var reverseSortedArray = __spreadArray([], placesToVisit, true).sort().reverse();
printArray(reverseSortedArray);
