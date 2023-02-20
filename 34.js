var pizzas = ['Pepperoni', 'Margherita', 'BBQ Chicken'];
// Print pizza names
for (var i = 0; i < pizzas.length; i++) {
    console.log(pizzas[i]);
}
// Print sentences about the pizzas
for (var _i = 0, pizzas_1 = pizzas; _i < pizzas_1.length; _i++) {
    var pizza = pizzas_1[_i];
    console.log("I like ".concat(pizza, " pizza."));
}
// Print how much I like pizza
console.log("I really love pizza!");
