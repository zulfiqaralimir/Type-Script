type Car = {
    manufacturer: string;
    model: string;
    [key: string]: any;
  }
  
  function create_car(manufacturer: string, model: string, ...options: [string, any][]): Car {
    const car: Car = {manufacturer, model};
    
    // Loop through each option and add it to the car object
    for (const [key, value] of options) {
      car[key] = value;
    }
    
    return car;
  }
  
  // Example usage
  const my_car = create_car('Tesla', 'Model S', 'color', 'red', 'autopilot', true);
  console.log(my_car);
  