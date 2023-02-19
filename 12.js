var names = ["Alice", "Bob", "Charlie", "David"]; // Declare an array of strings that stores the names of a few friends.
var message = "Hello, NAME!"; // Declare a message template that will be personalized with each person's name.
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    var personalizedMessage = message.replace("NAME", name_1); // Replace the placeholder "NAME" with the current person's name.
    console.log(personalizedMessage); // Print the personalized message to the console.
}
