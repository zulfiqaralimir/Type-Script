function describe_city(city: string, country: string = "USA"): void {
    console.log(`${city} is in ${country}.`);
  }
  
  describe_city("New York"); // prints: "New York is in USA."
  describe_city("Toronto", "Canada"); // prints: "Toronto is in Canada."
  describe_city("Tokyo", "Japan"); // prints: "Tokyo is in Japan."
  