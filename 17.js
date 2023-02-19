// Exercise 16
var guests = ['Albert Einstein', 'Isaac Newton', 'Galileo Galilei', 'Marie Curie', 'Richard Feynman'];
var message = "I would like to invite you to dinner tonight at my place.";
// Print the original guest list
console.log("Original Guest List:");
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("".concat(message, " - ").concat(guest));
}
// Print the message that the dinner table is smaller
console.log("Unfortunately, my new dinner table won't arrive in time for the dinner. I can only invite two guests now.");
// Pop guests from the list until only two remain
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry ".concat(removedGuest, ", I won't be able to invite you to dinner."));
}
// Print invitation message to the remaining guests
console.log("\nInvitation to dinner: ".concat(message, " - ").concat(guests[0]));
console.log("Invitation to dinner: ".concat(message, " - ").concat(guests[1]));
// Remove the last two names from the list
guests.splice(0, 2);
// Print the empty guest list
console.log("Guest list is now empty:", guests);
