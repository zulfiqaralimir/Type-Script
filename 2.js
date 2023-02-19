var personName = "John Doe";
console.log(personName.toLowerCase()); // Output: "john doe"
console.log(personName.toUpperCase()); // Output: "JOHN DOE"
function titleCase(str) {
    return str.toLowerCase().replace(/\b(\w)/g, function (match) { return match.toUpperCase(); });
}
console.log(titleCase(personName)); // Output: "John Doe"
