const pizzas: string[] = ['Pepperoni', 'Margherita', 'BBQ Chicken'];

// Print pizza names
for (let i = 0; i < pizzas.length; i++) {
  console.log(pizzas[i]);
}

// Print sentences about the pizzas
for (let pizza of pizzas) {
  console.log(`I like ${pizza} pizza.`);
}

// Print how much I like pizza
console.log("I really love pizza!");
