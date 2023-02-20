function order_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("You ordered a sandwich with ".concat(items.join(', '), "."));
}
// Example function calls
order_sandwich('lettuce', 'tomato', 'bacon');
order_sandwich('turkey', 'cheese', 'mayonnaise', 'mustard');
order_sandwich('ham', 'swiss cheese');
