//! variables
let age = 25; // Declaring a variable
const name = "John"; // Constant variable - cannot be changed
var salary = 50000; // An older way to declare variables (avoid using var)
const fruits = ["apple", "banana", "orange"]; // Array
const person = {
  name: "John",
  age: 25,
  address: {
    street: "Main street",
    city: "New York",
  },
}; // Object

//! conditions
if (age > 18) {
  // console.log("You are an adult");
} else if (age > 12) {
  // console.log("You are a teenager");
} else {
  // console.log("You are a child");
}

const isAdult = age > 18 ? true : false; // Ternary operator

//! loops
for (let i = 0; i < 5; i++) {
  // console.log(i); // Outputs 0, 1, 2, 3, 4
}

// looping over arrays: for...of loop
const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
  // console.log(number); // Outputs 1, 2, 3, 4, 5
}

//! functions
// Declaring a function
function add(a, b) {
  return a + b;
}

// Function expression (assigned to a variable)
const multiply = function (x, y) {
  return x * y;
};

// arrow function - with brackets and return
const divide = (x, y) => {
  return x / y;
};

// one line arrow function - without brackets and return
const square = (num) => num * num;

//! fetch
// methods for calling an API
// 1. GET; for fetching data
// 2. POST: for creating data
// 3. PUT/PATCH: for updating data
// 4. DELETE: for deleting data

// json -> JAVA SCRIPT OBJECT NOTATION

// Using callbacks - caused callback hell
// fetch("https://api.example.com/data")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// Using Async/Await
// async function fetchData() {
//   try {
//     const response = await fetch("https://api.example.com/data");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }

//! DOM
// Document Object Model
// The DOM is a tree-like structure that represents the HTML of a webpage.
// The DOM is used to manipulate the HTML of a webpage using JavaScript.

const priceAmount = document.getElementById("amount-two");
const currenyDropdownMenu = document.querySelector("#currency-two");
const rateEl = document.querySelectorAll(".btn");

//! events
// Event listeners
const button = document.querySelector("#button");

// we passed the function as a callback to the addEventListener method using one-line arrow function syntax
// button.addEventListener("click", () => console.log("Button clicked"));

// TODO: Later we'll dive into higher-order functions
