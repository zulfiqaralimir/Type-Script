function describe_city(city, country) {
    if (country === void 0) { country = "USA"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city("New York"); // prints: "New York is in USA."
describe_city("Toronto", "Canada"); // prints: "Toronto is in Canada."
describe_city("Tokyo", "Japan"); // prints: "Tokyo is in Japan."
