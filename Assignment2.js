// question 01 : Write code to display from 1 to 100 but just even numbers.
for (let x = 1; x <= 100; x++) {
    if (x % 2 === 0) {
        console.log(x);
    }
}
// output: even numbers from 2 to 100

// question 02 : Function to add, subtract, multiply, or divide two numbers using switch.
function calculate(x, y, z) {
    switch (z) {
        case '+':
            console.log(x + y);
            break;
        case '-':
            console.log(x - y);
            break;
        case '*':
            console.log(x * y);
            break;
        case '/':
            console.log(x / y);
            break;
        default:
            console.log("Invalid operator");
    }
}

// Example usage:
calculate(10, 5, '*'); // Output: 50

// question 03 : findTax() function using switch to calculate tax based on salary.
function findTax(salary) {
    let tax = 0;
    switch (true) {
        case (salary > 0 && salary <= 500000):
            tax = 0;
            break;
        case (salary > 500000 && salary <= 1000000):
            tax = salary * 0.10;
            break;
        case (salary > 1000000 && salary <= 1500000):
            tax = salary * 0.20;
            break;
        case (salary > 1500000):
            tax = salary * 0.30;
            break;
        default:
            console.log("Invalid salary");
            return;
    }
    console.log("Tax is: " + tax);
}

// Example usage:
findTax(1200000); // Output: Tax is: 240000

// question 04 : Sum of products of corresponding digits.
function sumOfProducts(x, y) {
    let a = x.toString().split('').reverse();
    let b = y.toString().split('').reverse();
    let sum = 0;

    for (let i = 0; i < Math.max(a.length, b.length); i++) {
        let d1 = parseInt(a[i] || 0);
        let d2 = parseInt(b[i] || 0);
        sum += d1 * d2;
    }

    console.log("Sum of products: " + sum);
}

// Example usage:
sumOfProducts(6, 34); // Output: 24
