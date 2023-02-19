const personName: string = "John Doe";

console.log(personName.toLowerCase()); // Output: "john doe"
console.log(personName.toUpperCase()); // Output: "JOHN DOE"

function titleCase(str: string): string {
  return str.toLowerCase().replace(/\b(\w)/g, (match) => match.toUpperCase());
}

console.log(titleCase(personName)); // Output: "John Doe"
