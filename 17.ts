// Exercise 16
let guests: string[] = ['Albert Einstein', 'Isaac Newton', 'Galileo Galilei', 'Marie Curie', 'Richard Feynman'];
let message: string = "I would like to invite you to dinner tonight at my place.";

// Print the original guest list
console.log("Original Guest List:");
for (let guest of guests) {
    console.log(`${message} - ${guest}`);
}

// Print the message that the dinner table is smaller
console.log("Unfortunately, my new dinner table won't arrive in time for the dinner. I can only invite two guests now.");

// Pop guests from the list until only two remain
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry ${removedGuest}, I won't be able to invite you to dinner.`);
}

// Print invitation message to the remaining guests
console.log(`\nInvitation to dinner: ${message} - ${guests[0]}`);
console.log(`Invitation to dinner: ${message} - ${guests[1]}`);

// Remove the last two names from the list
guests.splice(0, 2);

// Print the empty guest list
console.log("Guest list is now empty:", guests);
