var guests = ["Albert Einstein", "Isaac Newton", "Galileo Galilei"];
// Print the original guest list
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ", please come to dinner."));
}
// Inform people that you found a bigger dinner table
console.log("Good news! We found a bigger dinner table!");
// Add one new guest to the beginning of your array
guests.unshift("Marie Curie");
// Add one new guest to the middle of your array
guests.splice(2, 0, "Charles Darwin");
// Use push() to add one new guest to the end of your list
guests.push("Nikola Tesla");
// Print a new set of invitation messages
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ", please come to dinner."));
}
