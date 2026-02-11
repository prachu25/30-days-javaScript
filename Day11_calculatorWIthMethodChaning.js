/**
Question-

We need to make a Calculator class that starts with a number.
Then we can perform operations like add, subtract, multiply, divide, and power on it.

All operations should be connected (method chaining), like:
new Calculator(10).add(5).subtract(2).getResult()

This means we keep updating the same result step by step.

If someone tries to divide by 0, we must show an error.
At the end, getResult() returns the final answer.
 */


class Calculator {
    constructor(value) {
        this.result = value;
    }

    add(value) {
        this.result += value;
        return this;
    }

    subtract(value) {
        this.result -= value;
        return this;
    }

    multiply(value) {
        this.result *= value;
        return this;
    }

    divide(value) {
        if (value === 0) {
            throw new Error("Division by zero is not allowed");
        }
        this.result /= value;
        return this;
    }

    power(value) {
        this.result = this.result ** value;
        return this;
    }

    getResult() {
        return this.result;
    }
}


const result = new Calculator(10)
    .add(5)
    .subtract(3)
    .multiply(2)
    .power(2)
    .getResult();

console.log(result); // Output: 576