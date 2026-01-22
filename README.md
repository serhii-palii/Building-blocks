# 🧠 JavaScript Basics – Homework

## 📌 Instructions

- Read the explanation before each exercise
- Write all your code in `app.js`
- Run your file using:

```bash
node app.js
🧱 Programming Building Blocks

In this homework, you will practice the basic building blocks of JavaScript:

Variables

Conditionals

Loops

Functions

Each section includes:

A short explanation

A small example

A few exercises to practice

1️⃣ VARIABLES
📘 Explanation

Variables store information so we can use it later.
We create variables using let.

Variables can store:

Text (strings)

Numbers

True / False values (booleans)

🔹 Example
let name = "Ana";
console.log(name);

✏️ Exercises
Exercise 1

Create a variable called age and store your age.
Print it to the console.

Example:

let number = 10;
console.log(number);

Exercise 2

Create a variable called city.
Change its value and print it again.

Example:

let color = "blue";
color = "red";
console.log(color);

Exercise 3

Create a variable called isStudent and store true or false.
Print it.

Example:

let isOnline = true;
console.log(isOnline);

2️⃣ CONDITIONALS
📘 Explanation

Conditionals allow the program to make decisions.

if runs when the condition is true

else runs when the condition is false

🔹 Example
let age = 20;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

✏️ Exercises
Exercise 4

Create a variable number.
If it is greater than 0, print "Positive".
Otherwise, print "Negative".

Example:

let score = 60;

if (score >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}

Exercise 5

Create a variable temperature.
If it is greater than 30, print "Hot".
Else print "Normal".

Example:

let speed = 80;

if (speed > 100) {
  console.log("Too fast");
} else {
  console.log("Safe speed");
}

3️⃣ LOOPS
📘 Explanation

Loops repeat code automatically.
A for loop is used when we know how many times we want to repeat.

🔹 Example
for (let i = 1; i <= 3; i++) {
  console.log(i);
}

✏️ Exercises
Exercise 6

Use a loop to print numbers from 1 to 5.

Example:

for (let i = 1; i <= 3; i++) {
  console.log("Hello");
}

Exercise 7

Use a loop to print your name 3 times.

Example:

for (let i = 1; i <= 2; i++) {
  console.log("JS");
}

4️⃣ FUNCTIONS
📘 Explanation

Functions group code so we can reuse it.

A function must be called to run.

🔹 Example
function sayHello() {
  console.log("Hello");
}

sayHello();

✏️ Exercises
Exercise 8

Create a function called greet that prints "Hello".

Example:

function showMessage() {
  console.log("Welcome");
}

Exercise 9

Create a function that receives a name and prints "Hello NAME".

Example:

function greetUser(user) {
  console.log("Hi " + user);
}

greetUser("Ana");

Exercise 10

Create a function that receives a number and prints whether it is positive or negative.

Example:

function checkScore(score) {
  if (score >= 50) {
    console.log("Pass");
  } else {
    console.log("Fail");
  }
}

✅ Final Notes

Focus on understanding, not speed

If something does not work, read your code slowly

Use console.log() to debug

Ask questions in class if you are stuck

🎯 Goal: Learn the fundamentals of JavaScript step by step.
