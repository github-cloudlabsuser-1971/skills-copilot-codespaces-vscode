// Test case 1: Adding numbers
calculator.add(5);
console.log("Result:", calculator.result); // Expected output: 5

// Test case 2: Subtracting numbers
calculator.subtract(2);
console.log("Result:", calculator.result); // Expected output: 3

// Test case 3: Multiplying numbers
calculator.multiply(3);
console.log("Result:", calculator.result); // Expected output: 9

// Test case 4: Dividing numbers
calculator.divide(4);
console.log("Result:", calculator.result); // Expected output: 2

// Test case 5: Dividing by zero
calculator.divide(0); // Expected output: Error: Division by zero is not allowed.
console.log("Result:", calculator.result); // Expected output: 2