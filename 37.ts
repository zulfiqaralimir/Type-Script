function make_shirt(size: string = 'large', message: string = 'I love TypeScript') {
    console.log(`Shirt size: ${size.toUpperCase()}, Message: ${message}`);
  }
  make_shirt(); // output: Shirt size: LARGE, Message: I love TypeScript
  make_shirt('medium'); // output: Shirt size: MEDIUM, Message: I love TypeScript
  make_shirt('small', 'TypeScript is awesome!'); // output: Shirt size: SMALL, Message: TypeScript is awesome!
    