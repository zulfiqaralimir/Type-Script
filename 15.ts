let guestList: string[] = ["Albert Einstein", "Ada Lovelace", "Nikola Tesla"]; // Declare an array of strings that stores the names of three people.

console.log("Original guest list:");
for (const guest of guestList) {
  console.log(`Dear ${guest}, please come to dinner.`); // Print an invitation for each guest in the original list.
}

guestList[1] = "Marie Curie"; // Replace Ada Lovelace with Marie Curie.

console.log("\nRevised guest list:");
for (const guest of guestList) {
  console.log(`Dear ${guest}, please come to dinner.`); // Print an invitation for each guest in the revised list.
}
