// // Challenge 1: Temperature Converter
// // Prompt: Write a program that converts temperatures from Celsius to Fahrenheit based on user input
// let celsius = prompt("Enter a temperature in celsius.");
// let fahrenheit = (9 / 5) * celsius + 32;
// console.log(fahrenheit);
// // Challenge 2: Simple Calculator
// // Prompt: Create a small calculator that performs basic arithmetic operations based on user input
// let num1 = parseInt(prompt("gimme a number"));
// let num2 = parseInt(prompt("gimme another number"));
// let operator = prompt("enter + or - or / or * please");

// if (operator === "+") {
//   console.log(num1 + num2);
// } else if (operator === "-") {
//   console.log(num1 - num2);
// } else if (operator === "*") {
//   console.log(num1 * num2);
// } else if (operator === "/") {
//   console.log(num1 / num2);
// } else {
//   console.log("Please enter a valid opertor.");
// }
// Practice Compound Assignment:
let x = 7;
--x;
x /= 2;
x += 14;
x **= 2;
x *= 3;
x %= 13;
console.log(x);
// Practice Truthy vs Falsy:

// [1]: Falsy
let value1 = "";
if (value1) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

// [2]: Truthy
let value2 = "hello";
if (value2) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

// [3]: Falsy
let value3 = 0;
if (value3) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

// [4]: Truthy
let value4 = 183;
if (value4) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

// [5]: Falsy
let value5;
if (value5) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

// [6]: Falsy
let value6 = NaN;
if (value6) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

// [7]: Truthy
let value7 = true;
if (value7) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

// More Practice for Truthy/Falsy:
// Write a program that asks the user for their name and logs a greeting to them, like "Hello David!".
// If the user doesn't input any name, output "Hello, stranger" instead.
// Use what we learned about truthy/falsy values in your conditional statement.

let name1 = prompt("Hello! My name is Eddie. What is your name?");

if (name1) {
  console.log("Nice to meet you, " + name1);
} else {
  console.log("Hello stanger!");
}
