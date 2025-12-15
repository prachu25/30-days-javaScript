// Day 01: Create Hello World Function
// Higher-order function: returns another function

var createHelloWorld = function () {
    return function () {
        return "Hello World";
    };
};

let f = createHelloWorld();
console.log(f()); // Hello World