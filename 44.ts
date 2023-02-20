function order_sandwich(...items: string[]) {
    console.log(`You ordered a sandwich with ${items.join(', ')}.`);
  }
  
  // Example function calls
  order_sandwich('lettuce', 'tomato', 'bacon');
  order_sandwich('turkey', 'cheese', 'mayonnaise', 'mustard');
  order_sandwich('ham', 'swiss cheese');
  