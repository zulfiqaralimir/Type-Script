const names: string[] = ["Alice", "Bob", "Charlie", "David"]; // Declare an array of strings that stores the names of a few friends.
const message: string = "Hello, NAME!"; // Declare a message template that will be personalized with each person's name.

for (const name of names) {
  const personalizedMessage = message.replace("NAME", name); // Replace the placeholder "NAME" with the current person's name.
  console.log(personalizedMessage); // Print the personalized message to the console.
}
