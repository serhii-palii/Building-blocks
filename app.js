// 1️⃣ VARIABLES
// Exercise 1: age
let age = 33; // age
console.log("Exercise 1 - age:", age);

// Exercise 2: city
let city = "Kyiv";
console.log("Exercise 2 - city (first value):", city);
city = "Madrid"; // updating city value
console.log("Exercise 2 - city (updated value):", city);

// Exercise 3: isStudent
let isStudent = true;
console.log("Exercise 3 - isStudent:", isStudent);

// 2️⃣ CONDITIONALS
// Exercise 4: number -> Positive / Negative
let number = -5; // change to test other values
if (number > 0) {
  console.log("Exercise 4 - number is Positive");
} else {
  console.log("Exercise 4 - number is Negative");
}

// Exercise 5: temperature -> Hot / Normal
let temperature = 28; // change to test other values
if (temperature > 30) {
  console.log("Exercise 5 - Hot");
} else {
  console.log("Exercise 5 - Normal");
}

// 3️⃣ LOOPS
// Exercise 6: print numbers from 1 to 5
console.log("Exercise 6 - numbers from 1 to 5:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Exercise 7: print your name 3 times
console.log("Exercise 7 - name 3 times:");
for (let i = 1; i <= 3; i++) {
  console.log("Serhii");
}

// 4️⃣ FUNCTIONS
// Exercise 8: function greet -> "Hello"
function greet() {
  console.log("Exercise 8 - greet(): Hello");
}
greet();

// Exercise 9: function that receives a name -> "Hello NAME"
function greetByName(name) {
  console.log("Exercise 9 - greetByName(): Hello " + name);
}
greetByName("Serhii");
greetByName("Raul");

// Exercise 10: function that receives a number -> positive / negative
function checkNumber(num) {
  if (num > 0) {
    console.log("Exercise 10 -", num, "is Positive");
  } else if (num < 0) {
    console.log("Exercise 10 -", num, "is Negative");
  } else {
    console.log("Exercise 10 -", num, "is Zero");
  }
}

checkNumber(10);
checkNumber(-3);
checkNumber(0);
