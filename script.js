// script.js

// ==================================================================
// Part 1: Variable Declarations and Conditionals
// ==================================================================

console.log("Part 1: Variables and Conditionals"); // A simple console log to know where we are.

// Variable Declarations
let myNumber = 10;
const myString = "Hello, world!";
var myBoolean = true; // Avoid using 'var' in modern JavaScript, prefer let or const
let myNull = null;
let myUndefined;

console.log("myNumber:", myNumber);
console.log("myString:", myString);
console.log("myBoolean:", myBoolean);
console.log("myNull:", myNull);
console.log("myUndefined:", myUndefined);

// Conditionals
if (myNumber > 5) {
    console.log("myNumber is greater than 5");
} else {
    console.log("myNumber is not greater than 5");
}

if (myString === "Hello, world!") {
    console.log("The string matches!");
}

//More complex conditional
let age = 20;
if (age >= 18) {
  console.log("You are an adult.");
} else if (age >= 13) {
  console.log("You are a teenager.");
} else {
  console.log("You are a child.");
}

//Accessing the button from index.html
const part1Button = document.getElementById("part1-button");
const part1Output = document.getElementById("part1-output");

part1Button.addEventListener("click", function() {
  let resultString = "";
  if (myNumber > 5) {
    resultString += "myNumber is greater than 5. ";
  } else {
    resultString += "myNumber is not greater than 5. ";
  }

  if (myString === "Hello, world!") {
    resultString += "The string matches!";
  }

  part1Output.textContent = resultString;
});




// ==================================================================
// Part 2: Custom Functions
// ==================================================================

console.log("Part 2: Custom Functions");

// Function 1: Add two numbers
function addNumbers(num1, num2) {
    return num1 + num2;
}

// Function 2: Greet a user
function greetUser(name) {
    return "Hello, " + name + "!";
}

console.log("Adding 5 and 3:", addNumbers(5, 3));
console.log(greetUser("Alice"));

//Example using the functions with the HTML:
const addButton = document.getElementById("add-button");
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const part2Output = document.getElementById("part2-output");

addButton.addEventListener("click", function() {
  const number1 = parseFloat(num1Input.value);
  const number2 = parseFloat(num2Input.value);

  if (!isNaN(number1) && !isNaN(number2)) {
    const sum = addNumbers(number1, number2);
    part2Output.textContent = "The sum is: " + sum;
  } else {
    part2Output.textContent = "Please enter valid numbers.";
  }
});



// ==================================================================
// Part 3: Loop Examples
// ==================================================================

console.log("Part 3: Loop Examples");

// Loop 1: For loop
console.log("For loop:");
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Loop 2: While loop
console.log("While loop:");
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

// Loop 3: for...of loop
const colors = ["red", "green", "blue"];
console.log("for...of loop:");
for (const color of colors) {
  console.log(color);
}

//Using a loop to display list items on the page.
const loopOutput = document.getElementById("loop-output");

for (let i = 1; i <= 5; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = "Item " + i;
    loopOutput.appendChild(listItem);
}

// ==================================================================
// Part 4: DOM Interactions
// ==================================================================

console.log("Part 4: DOM Interactions");

// 1. Get an element by its ID
const domElement = document.getElementById("dom-element");
console.log("domElement:", domElement);

// 2. Change the text content of an element
const changeTextButton = document.getElementById("change-text-button");

changeTextButton.addEventListener("click", function() {
    domElement.textContent = "The text has been changed!";
});

// 3. Update text content based on user input
const newTextInput = document.getElementById("new-text-input");
const updateTextButton = document.getElementById("update-text-button");

updateTextButton.addEventListener("click", function() {
    const newText = newTextInput.value;
    domElement.textContent = newText;
});