# JavaScript Beginner (Level 1) Exam Prep: 35 Practice Questions

This mock exam is designed to help you prepare for the **JavaScript Beginner (Level 1) / Junior JavaScript Developer Certification** on Certificates.dev. It covers all 7 primary areas outlined in the syllabus.

---

## Exam Topics Distribution
1. **Introduction to JavaScript** (Questions 1–5)
2. **Basic Debugging** (Questions 6–10)
3. **Variables and Data Types** (Questions 11–15)
4. **Basic Operators** (Questions 16–20)
5. **Working with Arrays and Objects** (Questions 21–25)
6. **Control Structures** (Questions 26–30)
7. **Functions** (Questions 31–35)

---

## Practice Questions

### Section 1: Introduction to JavaScript

#### 1. Which HTML tag is used to embed or reference internal or external JavaScript code?
* A) `<javascript>`
* B) `<js>`
* C) `<script>`
* D) `<scripting>`

#### 2. How do you write a single-line comment in JavaScript?
* A) `# This is a comment`
* B) `// This is a comment`
* C) `<!-- This is a comment -->`
* D) `/* This is a comment */`

#### 3. How do you link an external JavaScript file named `app.js` to an HTML document?
* A) `<script href="app.js"></script>`
* B) `<script src="app.js"></script>`
* C) `<link rel="stylesheet" href="app.js">`
* D) `<script name="app.js"></script>`

#### 4. Which of the following is correct regarding JavaScript's relationship with HTML and CSS?
* A) HTML defines the structure, CSS defines the presentation, and JavaScript defines behavior/interactivity.
* B) JavaScript replaces the need for HTML and CSS entirely.
* C) JavaScript is only used to style text colors on a webpage.
* D) CSS controls the page logic, while JavaScript controls the layout.

#### 5. Which syntax is correct for a multi-line comment in JavaScript?
* A) `/* Line 1 Line 2 */`
* B) `// Line 1 Line 2 //`
* C) `<!-- Line 1 Line 2 -->`
* D) `** Line 1 Line 2 **`

---

### Section 2: Basic Debugging

#### 6. Which method is most commonly used to write information to the browser console for debugging?
* A) `document.write()`
* B) `console.log()`
* C) `window.alert()`
* D) `print()`

#### 7. How can you open the Developer Tools Console in most modern web browsers?
* A) By double-clicking anywhere on the page.
* B) By right-clicking the page and selecting "Inspect" (or pressing F12) and navigating to the "Console" tab.
* C) By saving the page as an HTML file.
* D) By pressing Ctrl + S (or Cmd + S).

#### 8. If your script runs but displays a red message saying `ReferenceError: userName is not defined` in the console, what does it mean?
* A) The variable `userName` was declared multiple times.
* B) The script was unable to load external styles.
* C) You attempted to use the variable `userName` without declaring it first.
* D) The variable `userName` contains a typo in its value.

#### 9. What happens when the browser encounters a `debugger;` statement in your JavaScript code while Developer Tools is open?
* A) The browser shuts down.
* B) It clears all console logs.
* C) It pauses code execution at that line, acting as a breakpoint.
* D) It automatically restarts the script.

#### 10. Which statement about the console is correct?
* A) Console logs are visible to average visitors directly on the webpage interface.
* B) Using `console.log` permanently modifies the HTML source code.
* C) The console can output values, objects, arrays, and error reports.
* D) Console logs only work for numeric values.

---

### Section 3: Variables and Data Types

#### 11. Which keyword is block-scoped and allows its value to be reassigned?
* A) `const`
* B) `var`
* C) `let`
* D) `define`

#### 12. What happens when this code runs?
```javascript
const name = "Alice";
name = "Bob";
```
* A) The variable `name` becomes "Bob".
* B) A TypeError is thrown: Assignment to constant variable.
* C) The variable `name` becomes "AliceBob".
* D) The variable `name` becomes `undefined`.

#### 13. Which of the following is NOT a primitive data type in JavaScript?
* A) String
* B) Array
* C) Boolean
* D) Undefined

#### 14. What will `typeof null` evaluate to in JavaScript?
* A) "null"
* B) "undefined"
* C) "object"
* D) "boolean"

#### 15. What is the output of the following code?
```javascript
let message = "Learn JavaScript";
console.log(message.length);
```
* A) 15
* B) 16
* C) 14
* D) undefined

---

### Section 4: Basic Operators

#### 16. What is the result of the expression `17 % 5`?
* A) 3
* B) 2
* C) 3.4
* D) 0

#### 17. What will the expression `5 == "5"` evaluate to?
* A) true
* B) false
* C) undefined
* D) NaN

#### 18. What will the expression `5 === "5"` evaluate to?
* A) true
* B) false
* C) undefined
* D) NaN

#### 19. Which operator is used for exponentiation (raising a number to a power) in modern JavaScript?
* A) `^`
* B) `*`
* C) `**`
* D) `^^`

#### 20. What is the value of `a` and `b` after the following code runs?
```javascript
let a = 10;
let b = a++;
```
* A) `a = 11, b = 10`
* B) `a = 10, b = 11`
* C) `a = 11, b = 11`
* D) `a = 10, b = 10`

---

### Section 5: Working with Arrays and Objects

#### 21. Given the array `const fruits = ["Apple", "Banana", "Cherry"];`, how do you access the second element?
* A) `fruits[0]`
* B) `fruits[1]`
* C) `fruits[2]`
* D) `fruits.Banana`

#### 22. Which array method is used to remove the *last* element of an array?
* A) `shift()`
* B) `unshift()`
* C) `push()`
* D) `pop()`

#### 23. Given the object `const car = { brand: "Toyota", model: "Corolla" };`, which statement is a valid way to access the value of the `brand` property?
* A) `car.brand`
* B) `car["brand"]`
* C) Both A and B
* D) `car->brand`

#### 24. What is logged to the console in the following code?
```javascript
const x = { val: 10 };
const y = x;
y.val = 20;
console.log(x.val);
```
* A) 10
* B) 20
* C) undefined
* D) ReferenceError

#### 25. How do you find the number of elements in an array named `users`?
* A) `users.size`
* B) `users.count`
* C) `users.length`
* D) `users.length()`

---

### Section 6: Control Structures

#### 26. What will be logged to the console?
```javascript
const score = 85;
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else {
  console.log("C");
}
```
* A) "A"
* B) "B"
* C) "C"
* D) Nothing

#### 27. What is the value of `result`?
```javascript
const result = !(10 > 5 && 3 < 2);
```
* A) true
* B) false
* C) undefined
* D) NaN

#### 28. What is the purpose of the `break` statement inside a loop?
* A) It skips the current iteration and jumps to the next one.
* B) It restarts the entire loop from the initial counter value.
* C) It immediately exits the loop and transfers execution to the statement following the loop.
* D) It pauses execution of the script for 1 second.

#### 29. How many times will the message "Hello" be printed?
```javascript
let count = 0;
while (count < 3) {
  console.log("Hello");
  count++;
}
```
* A) 2 times
* B) 3 times
* C) 4 times
* D) Infinitely

#### 30. If a `switch` statement has no `break` statements after its case blocks, what behavior will occur?
* A) It will throw a syntax error.
* B) It will run only the first case that matches and exit.
* C) It will "fall through" and execute all subsequent cases after the matching one, regardless of their conditions, until it hits a break or the switch ends.
* D) It will loop infinitely.

---

### Section 7: Functions

#### 31. Which of the following defines a function declaration?
* A) `const greet = () => "Hello";`
* B) `const greet = function() { return "Hello"; };`
* C) `function greet() { return "Hello"; }`
* D) `greet: function() { return "Hello"; }`

#### 32. What does a function return if it does not contain a `return` statement?
* A) null
* B) undefined
* C) 0
* D) false

#### 33. What is the output of the following code?
```javascript
function multiply(a, b = 2) {
  return a * b;
}
console.log(multiply(4));
```
* A) 8
* B) NaN
* C) 4
* D) TypeError

#### 34. What is a key feature of arrow functions compared to traditional function declarations?
* A) They cannot accept any arguments.
* B) They provide a shorter syntax and do not bind their own `this` context.
* C) They must always use the `function` keyword.
* D) They are automatically compiled to CSS.

#### 35. What is logged to the console?
```javascript
const square = x => x * x;
console.log(square(5));
```
* A) 10
* B) 25
* C) undefined
* D) x

---

## Answer Key & Detailed Explanations

### Section 1: Introduction to JavaScript
1. **C**  
   *Explanation*: The `<script>` tag is the standard HTML tag used to embed client-side scripts, such as JavaScript.
2. **B**  
   *Explanation*: JavaScript uses double slashes (`//`) for single-line comments. `#` is used in languages like Python or Bash, `<!-- -->` is for HTML, and `/* */` is for multi-line comments.
3. **B**  
   *Explanation*: The `src` attribute of the `<script>` tag is used to point to an external script file (e.g., `<script src="app.js"></script>`). Note that `href` is used for stylesheet `<link>` tags, not scripts.
4. **A**  
   *Explanation*: HTML provides the static structure of a webpage, CSS defines its layout and visual presentation, and JavaScript implements dynamic client-side programming, logic, and interactivity.
5. **A**  
   *Explanation*: Multi-line comments start with `/*` and end with `*/`. Everything inside is treated as a comment.

### Section 2: Basic Debugging
6. **B**  
   *Explanation*: `console.log()` is the standard, cross-platform method to output text or structures to the web console for debugging. `print()` opens the browser's print dialog.
7. **B**  
   *Explanation*: In most browsers, you can open the developer tools by right-clicking on the page and selecting "Inspect" (or pressing F12) and then selecting the "Console" tab.
8. **C**  
   *Explanation*: A `ReferenceError` occurs when you attempt to use or read a variable name that JavaScript does not recognize (meaning it was never declared with `let`, `const`, or `var`).
9. **C**  
   *Explanation*: The `debugger;` statement pauses the execution of JavaScript code at that line, functioning exactly like a manual breakpoint, provided that the browser's Developer Tools are currently open.
10. **C**  
    *Explanation*: The browser console can receive and output any variable value, object properties, array elements, and automatically logs execution warnings or uncaught errors. It does not show up on the user-facing web layout itself.

### Section 3: Variables and Data Types
11. **C**  
    *Explanation*: `let` declares a block-scoped variable that can be reassigned. `const` is also block-scoped but prevents reassignment. `var` is function-scoped rather than block-scoped.
12. **B**  
    *Explanation*: Reassigning a variable declared with `const` is illegal and throws a `TypeError: Assignment to constant variable` in JavaScript execution.
13. **B**  
    *Explanation*: Arrays are objects under the hood, making them reference types. The primitive types are: String, Number, Boolean, Null, Undefined, Symbol, and BigInt.
14. **C**  
    *Explanation*: `typeof null` evaluates to `"object"`. This is a legacy bug in JavaScript's design that cannot be changed to prevent breaking existing websites.
15. **B**  
    *Explanation*: The `length` property of strings returns the total character count, which includes spaces. "Learn JavaScript" has 16 characters.

### Section 4: Basic Operators
16. **B**  
    *Explanation*: The remainder (modulo) operator `%` returns the integer remainder of dividing 17 by 5. 17 / 5 equals 3 with a remainder of 2.
17. **A**  
    *Explanation*: The double equals (`==`) comparison performs type coercion, meaning it converts the string `"5"` to the number `5` before comparing. Hence, they are considered equal (`true`).
18. **B**  
    *Explanation*: The triple equals (`===`) is the strict equality operator. It does not perform type coercion. Since a number is compared to a string, their types differ, evaluating to `false`.
19. **C**  
    *Explanation*: The `**` operator raises the first number to the power of the second number. `^` is the bitwise XOR operator in JavaScript.
20. **A**  
    *Explanation*: The postfix increment `a++` increments `a` but evaluates to the value *before* incrementing. Therefore, `b` is assigned the original value `10`, and `a` increases to `11`.

### Section 5: Working with Arrays and Objects
21. **B**  
    *Explanation*: JavaScript arrays use zero-based indexing. The first element is `fruits[0]`, and the second is `fruits[1]`.
22. **D**  
    *Explanation*: The `pop()` method removes and returns the last element of an array. `shift()` removes the first element.
23. **C**  
    *Explanation*: You can access object properties using dot notation (`car.brand`) or bracket notation with a string key (`car["brand"]`). Both are valid.
24. **B**  
    *Explanation*: Objects are reference types. When `y` is assigned `x`, it copies the reference to the same object. Modifying `y.val` alters the shared object, so `x.val` evaluates to `20`.
25. **C**  
    *Explanation*: The `length` property of an array contains the current count of elements. It is a property, not a function, so calling it as `length()` results in an error.

### Section 6: Control Structures
26. **B**  
    *Explanation*: `score` is 85. The condition `score >= 90` is false, so it falls to `score >= 80`, which is true. Therefore, "B" is printed.
27. **A**  
    *Explanation*: `10 > 5` evaluates to `true`, and `3 < 2` evaluates to `false`. The statement `true && false` evaluates to `false`. Negating it with `!` returns `true`.
28. **C**  
    *Explanation*: A `break` statement halts the execution of the entire loop immediately and resumes code execution right after the loop block.
29. **B**  
    *Explanation*: The loop runs when `count` is `0`, `1`, and `2`. During the third iteration, `count` increments to `3`, failing the check `count < 3` and terminating the loop.
30. **C**  
    *Explanation*: JavaScript switch cases fall through by default. If a case matches and lacks a `break`, execution continues down into all subsequent cases regardless of their value.

### Section 7: Functions
31. **C**  
    *Explanation*: The `function name() {}` construct defines a function declaration. Assigning an anonymous function or arrow function to a variable creates a function expression.
32. **B**  
    *Explanation*: If a function does not encounter a `return` statement, it implicitly returns `undefined` by default when execution completes.
33. **A**  
    *Explanation*: The function `multiply` specifies a default value of `2` for parameter `b`. Passing only `4` binds `a = 4` and uses `b = 2`, returning `4 * 2 = 8`.
34. **B**  
    *Explanation*: Arrow functions offer a shorter declaration syntax and do not have their own binding for `this`, instead capturing the `this` value of their enclosing context.
35. **B**  
    *Explanation*: A single-parameter arrow function without curly braces implicitly returns the evaluation of its statement. `square(5)` returns `5 * 5 = 25`.
