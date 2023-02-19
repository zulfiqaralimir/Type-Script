var guestList = ["Albert Einstein", "Ada Lovelace", "Nikola Tesla"]; // Declare an array of strings that stores the names of three people.
console.log("Original guest list:");
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Dear ".concat(guest, ", please come to dinner.")); // Print an invitation for each guest in the original list.
}
guestList[1] = "Marie Curie"; // Replace Ada Lovelace with Marie Curie.
console.log("\nRevised guest list:");
for (var _a = 0, guestList_2 = guestList; _a < guestList_2.length; _a++) {
    var guest = guestList_2[_a];
    console.log("Dear ".concat(guest, ", please come to dinner.")); // Print an invitation for each guest in the revised list.
}
