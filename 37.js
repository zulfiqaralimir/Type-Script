function make_shirt(size, message) {
    if (size === void 0) { size = 'large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("Shirt size: ".concat(size.toUpperCase(), ", Message: ").concat(message));
}
make_shirt(); // output: Shirt size: LARGE, Message: I love TypeScript
make_shirt('medium'); // output: Shirt size: MEDIUM, Message: I love TypeScript
make_shirt('small', 'TypeScript is awesome!'); // output: Shirt size: SMALL, Message: TypeScript is awesome!
