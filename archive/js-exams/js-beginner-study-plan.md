# JavaScript Beginner (Level 1) 4-Day Comprehensive Study Plan

This study plan is structured to help you master the core concepts of the **JavaScript Beginner (Level 1) Exam** in 4 days. It is designed for maximum efficiency, allocating topic learning, reading materials, hands-on practice, and exam simulations.

---

## Daily Schedule Overview

| Day | Topics covered | Daily Practice Goal |
|---|---|---|
| **Day 1** | JS Intro, Developer tools/debugging, Variables, Primitives & String methods | Basic script setup, variable declarations, debugging ReferenceErrors. |
| **Day 2** | Arithmetic, Comparisons (`==` vs `===`), Logical operators, Loops & Conditionals | Write control flow systems (e.g., FizzBuzz challenge). |
| **Day 3** | Arrays (methods, indexing) & Objects (access, modification, references) | Build a simple data structures manager (e.g., Shopping Cart). |
| **Day 4** | Function declarations, Function expressions, Arrow functions & Mock Exam | Write modular code + complete & grade the 35-question mock exam. |

---

## Detailed Study Plan

### Day 1: Setup, Introduction, Debugging & Variables

#### 🎯 Goal:
Understand how JavaScript integrates with HTML/CSS, learn to write syntactically correct variables, output code, and use the Developer Console for troubleshooting.

#### 📚 Topics to Cover:
1. **Introduction to JavaScript**:
   * Linking script files using `<script src="app.js"></script>`.
   * Single-line (`//`) and multi-line (`/* */`) comment syntax.
   * Basic code structure and execution flow.
2. **Basic Debugging**:
   * Printing output using `console.log()`, `console.warn()`, and `console.error()`.
   * Opening and navigating the browser Developer Console.
   * Debugging common errors like `ReferenceError` (e.g., using an undeclared variable).
3. **Variables & Data Types**:
   * Declaration keywords: `let` (reassignable, block-scoped), `const` (constant, block-scoped), and `var` (legacy, function-scoped).
   * Primitive data types: `String`, `Number`, `Boolean`, `null`, `undefined`.
   * Basic string properties and methods: `.length`, `.substring()`, `.indexOf()`, `.toLowerCase()`, `.toUpperCase()`.

#### 🔗 Recommended Reading (Certificates.dev Syllabus):
* [MDN: What is JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript)
* [JavaScript.info: Hello, world!](https://javascript.info/hello-world)
* [JavaScript.info: Developer Console](https://javascript.info/devtools)
* [MDN: Storing the information you need — Variables](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)
* [JavaScript.info: Data Types](https://javascript.info/types)
* [MDN: Useful String Methods](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods)

#### 💻 Practice Challenge:
1. Create a simple `index.html` file and an external `app.js` file.
2. Declare a variable for a user's name (`let`) and their date of birth (`const`).
3. Reassign the user's name and log the result to the console. Attempt to reassign the constant date of birth, look at the error in your browser's Developer Console, and correct it.
4. Declare a string `"Study Plan"`. Log its character length and extract `"Study"` using the `.substring()` method.

---

### Day 2: Basic Operators & Control Structures

#### 🎯 Goal:
Master arithmetic equations, equality comparisons (understanding type coercion), and construct logic branches and loops to manage control flow.

#### 📚 Topics to Cover:
1. **Basic Operators**:
   * Arithmetic operations: Addition (`+`), subtraction (`-`), multiplication (`*`), division (`/`), modulo/remainder (`%`), exponentiation (`**`).
   * Unary increment/decrement: Postfix (`x++`) vs prefix (`++x`).
   * Equality comparisons: Loose equality `==` (performs type coercion) vs strict equality `===` (compares value and type).
2. **Control Structures**:
   * Conditionals: `if`, `else if`, and `else` branches.
   * Switch statements: case evaluation and the importance of the `break` statement to prevent fall-through.
   * Logical Operators: AND (`&&`), OR (`||`), and NOT (`!`).
   * Loops: `for` loops and `while` loops. Using `break` to exit early and `continue` to skip an iteration.

#### 🔗 Recommended Reading (Certificates.dev Syllabus):
* [MDN: Basic math in JavaScript — numbers and operators](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math)
* [JavaScript.info: Basic Operators & Maths](https://javascript.info/operators)
* [JavaScript.info: Comparisons](https://javascript.info/comparison)
* [MDN: Making decisions in your code — conditionals](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
* [JavaScript.info: Loops: while and for](https://javascript.info/while-for)
* [JavaScript.info: The "switch" statement](https://javascript.info/switch)

#### 💻 Practice Challenge:
Write a JavaScript script that:
1. Loops through numbers from 1 to 20 using a `for` loop.
2. For each number:
   * If it is divisible by both 3 and 5, log `"FizzBuzz"`.
   * If it is divisible by 3, log `"Fizz"`.
   * If it is divisible by 5, log `"Buzz"`.
   * Otherwise, log the number itself.
*(Note: You will need the modulo `%` operator and an `if / else if / else` structure).*

---

### Day 3: Working with Arrays & Objects

#### 🎯 Goal:
Organize data inside arrays and objects, manipulate their properties/elements, and understand object references in memory.

#### 📚 Topics to Cover:
1. **Working with Objects**:
   * Creating objects using literal notation (`{ key: value }`).
   * Accessing properties using dot notation (`user.name`) and bracket notation (`user["name"]`).
   * Modifying and deleting properties.
   * Understanding references: objects are copied by reference, meaning modifying a copied variable changes the original object.
2. **Working with Arrays**:
   * Declaring arrays and accessing elements using zero-based indexing (`array[0]`).
   * The `.length` property of arrays.
   * Basic array methods: `push()` (add to end), `pop()` (remove from end), `shift()` (remove from start), `unshift()` (add to start), `indexOf()`, and `includes()`.

#### 🔗 Recommended Reading (Certificates.dev Syllabus):
* [MDN: JavaScript Object Basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
* [JavaScript.info: Objects](https://javascript.info/object)
* [JavaScript.info: Object references and copying](https://javascript.info/object-copy)
* [MDN: Arrays](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays)
* [JavaScript.info: Arrays](https://javascript.info/array)

#### 💻 Practice Challenge:
1. Create a `shoppingCart` array.
2. Create three objects representing items (e.g., `{ name: "Milk", price: 2.50 }`, `{ name: "Bread", price: 1.80 }`, `{ name: "Apples", price: 3.00 }`).
3. Add these objects to the `shoppingCart` array using `push()`.
4. Use an array method to check if `"Milk"` is present in the cart.
5. Create a reference variable to the cart `const newCart = shoppingCart;`. Remove the last item from `newCart` using `pop()`. Inspect both `shoppingCart` and `newCart` to verify they both lost the last item (proving object copying by reference).

---

### Day 4: Functions & Mock Exam Simulation

#### 🎯 Goal:
Understand functions as reusable blocks of logic, default parameter setups, arrow functions, and test your overall comprehension with the practice exam.

#### 📚 Topics to Cover:
1. **Functions**:
   * Declaring a function (`function myFunc() {}`) vs creating a function expression (`const myFunc = function() {};`).
   * Parameters, arguments, and return values.
   * Setting default parameter values (e.g., `function greet(name = "Guest")`).
   * Shorthand syntax using Arrow Functions (`const sum = (a, b) => a + b;`).
2. **Exam Practice**:
   * Simulate a realistic test environment.
   * Review missed questions to reinforce weak points.

#### 🔗 Recommended Reading (Certificates.dev Syllabus):
* [MDN: Functions — reusable blocks of code](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions)
* [JavaScript.info: Functions](https://javascript.info/function-basics)
* [JavaScript.info: Function expressions](https://javascript.info/function-expressions)
* [JavaScript.info: Arrow functions, the basics](https://javascript.info/arrow-functions-basics)

#### 💻 Practice Challenge:
1. Write a function declaration called `calculateTotal` that accepts `price` and `taxRate` (with a default value of `0.08`). It should return the total price including tax.
2. Rewrite the same logic as a function expression.
3. Rewrite the same logic as a single-line arrow function.

#### 📝 Final Mock Exam Simulation:
1. Open the [js-beginner-questions.md](file:///Users/zako05/workspace/articles/js-exams/js-beginner-questions.md) file.
2. Set a timer for **45 minutes** (to replicate the real exam pressure).
3. Write down your answers for the 35 multiple-choice questions without looking at the Answer Key.
4. Grade your test using the Answer Key at the bottom of the file.
5. *Passing Criteria*: Aim for at least **27 correct answers (approx. 77%)** to match certificates.dev Level 1 standard.
6. Spend 30 minutes reading the explanations for any questions you got wrong.
