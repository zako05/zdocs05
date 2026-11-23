# JavaScript Junior (Level 1) Challenging Exam Prep: 35 Practice Questions

This mock exam is designed to help you prepare for the **JavaScript Beginner (Level 1) / Junior JavaScript Developer Certification** on Certificates.dev. It covers all 7 primary areas outlined in the syllabus but focuses on tricky details, common edge cases, and subtle language behaviors to test your deep understanding—all while remaining strictly within the Level 1 scope.

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

#### 1. What will be logged to the console when the browser loads an HTML page containing the following code?
```html
<script>
  console.log("A");
  const x = ; // Syntax error here
  console.log("B");
</script>
<script>
  console.log("C");
</script>
```
* A) `"A"` is logged, then a SyntaxError is thrown, then `"C"` is logged.
* B) A SyntaxError is thrown immediately, and nothing is logged.
* C) `"A"` and `"C"` are logged, and a SyntaxError is thrown.
* D) `"C"` is logged, and a SyntaxError is thrown.

#### 2. What is the behavior of the browser when it encounters the following `<script>` tag?
```html
<script src="app.js">
  console.log("Inside script tag");
</script>
```
Assume `app.js` is a valid file that contains `console.log("Inside external file");`.
* A) The browser will download and execute `app.js`, and the inline code will be ignored.
* B) The browser will execute the inline code first, then download and execute `app.js`.
* C) The browser will throw a SyntaxError because a script tag cannot have both `src` and inline content.
* D) The browser will execute both, but the order depends on whether `app.js` has finished downloading.

#### 3. What will happen if the following script is parsed by a JavaScript engine?
```javascript
/*
  console.log("Starting script...");
  /* 
    console.log("Inner block...");
  */
  console.log("Ending script...");
*/
```
* A) The entire block is treated as a comment, and nothing happens.
* B) A SyntaxError is thrown because multi-line comments cannot be nested.
* C) `"Ending script..."` is logged, and the rest is commented out.
* D) A ReferenceError is thrown because the inner block is not defined.

#### 4. Consider the following HTML body structure. What happens when the browser parses this HTML?
```html
<body>
  <div id="target">Original Text</div>
  <script src="delay.js"></script>
  <div>Footer Content</div>
</body>
```
Assume `delay.js` is a synchronous script (no `async` or `defer`) that takes 5 seconds to load and execute.
* A) The browser displays "Original Text" and "Footer Content" immediately while `delay.js` loads in the background.
* B) The browser blocks HTML parsing at the script tag; "Original Text" is rendered, but the rendering of "Footer Content" is delayed for 5 seconds.
* C) The browser will not render any part of the page (not even "Original Text") until `delay.js` is executed.
* D) The browser throws an error because `<script>` tags should only be placed in the `<head>`.

#### 5. How does a standard modern browser environment handle the following JavaScript code?
```javascript
let count = 10;
<!-- count = 20;
console.log(count);
```
* A) It logs `10` because `<!--` is treated as a single-line comment.
* B) It throws a SyntaxError because `<!--` is an HTML tag and not valid JavaScript.
* C) It logs `20` because `<!--` is ignored as whitespace and the assignment is executed.
* D) It throws a ReferenceError because HTML comments are only allowed in HTML documents.

---

### Section 2: Basic Debugging

#### 6. You run the following code in a modern web browser's Developer Tools Console:
```javascript
const user = { name: "John", age: 30 };
console.log(user);
user.age = 31;
```
If you immediately look at the collapsed log statement in the console and then click the arrow icon to expand/inspect the logged object, what value for `age` will you typically see in the expanded view?
* A) `30`, because the object is copied at the moment it is logged.
* B) `31`, because browsers typically evaluate objects lazily upon expanding them in the console.
* C) `undefined`, because properties of objects logged to the console are hidden for privacy.
* D) A TypeError is thrown because `user` is declared with `const` and cannot be mutated.

#### 7. Which of the following statements is TRUE regarding the `debugger;` statement in JavaScript?
* A) It will raise a SyntaxError if it is placed inside an `if` block.
* B) It is a comment marker that helps other developers understand that the line needs debugging.
* C) If browser Developer Tools are closed, it behaves as a no-op (does nothing); if Developer Tools are open, it pauses execution like a breakpoint.
* D) It automatically sends a report containing local variables to an external analytics server.

#### 8. Which console method is specifically designed to output an interactive stack trace showing the nested function calls that led to the current point of execution?
* A) `console.dir()`
* B) `console.table()`
* C) `console.trace()`
* D) `console.stack()`

#### 9. Look at the following three independent code snippets:
1. `let a = 10; let a = 20;`
2. `const b = 10; b = 20;`
3. `console.log(c);` (where `c` is never declared anywhere)

Which error types will be thrown by snippets 1, 2, and 3 respectively?
* A) 1: SyntaxError, 2: TypeError, 3: ReferenceError
* B) 1: TypeError, 2: ReferenceError, 3: SyntaxError
* C) 1: ReferenceError, 2: SyntaxError, 3: TypeError
* D) 1: SyntaxError, 2: ReferenceError, 3: TypeError

#### 10. When debugging a DOM object or a JavaScript object in the browser console, what is the primary difference between `console.log(element)` and `console.dir(element)`?
* A) `console.log` lists all methods in red, while `console.dir` lists them in green.
* B) `console.log` prints the element's HTML/XML representation, whereas `console.dir` prints an interactive list of the properties of that JavaScript object.
* C) `console.log` runs the code, while `console.dir` only compiles it without running.
* D) `console.dir` is a deprecated method that has the exact same output as `console.log`.

---

### Section 3: Variables and Data Types

#### 11. What is the result of executing the following code?
```javascript
let value = 100;
if (true) {
  console.log(value);
  let value = 200;
}
```
* A) `100` is logged.
* B) `200` is logged.
* C) `undefined` is logged.
* D) A ReferenceError is thrown.

#### 12. What is logged to the console when the following code runs?
```javascript
var count = 5;
function outputCount() {
  console.log(count);
  var count = 10;
}
outputCount();
```
* A) `5`
* B) `10`
* C) `undefined`
* D) A ReferenceError is thrown.

#### 13. What is logged to the console when this code is executed?
```javascript
let personName = "Alice";
let user = { name: "Alice" };

function modify(nameVal, objVal) {
  nameVal = "Bob";
  objVal.name = "Bob";
}

modify(personName, user);
console.log(personName, user.name);
```
* A) `"Alice Bob"`
* B) `"Bob Bob"`
* C) `"Alice Alice"`
* D) `"Bob Alice"`

#### 14. Consider the following array:
```javascript
const values = [null, NaN, [1, 2], function() {}];
```
What would be the sequence of outputs if we run `typeof` on each element of `values` from index 0 to 3?
* A) `"null"`, `"number"`, `"array"`, `"function"`
* B) `"object"`, `"number"`, `"object"`, `"function"`
* C) `"object"`, `"nan"`, `"object"`, `"object"`
* D) `"undefined"`, `"number"`, `"array"`, `"function"`

#### 15. What is logged by the console after running the following code?
```javascript
let str = "javascript";
str[0] = "J";
str.toUpperCase();
console.log(str);
```
* A) `"Javascript"`
* B) `"JAVASCRIPT"`
* C) `"javascript"`
* D) A TypeError is thrown because strings are read-only.

---

### Section 4: Basic Operators

#### 16. What is the result of evaluating the following expression?
```javascript
"10" - 2 + "5" + 3
```
* A) `"853"`
* B) `16`
* C) `"133"`
* D) `11`

#### 17. What will be logged to the console?
```javascript
const check1 = (false == 0);
const check2 = (false == "");
const check3 = (0 == "");
const check4 = (null == 0);

console.log(check1 && check2 && check3 && check4);
```
* A) `true`
* B) `false`
* C) `undefined`
* D) `NaN`

#### 18. What is the value of the variable `result` after running the following statement?
```javascript
const result = (null || "Default") && ("User" || 0);
```
* A) `true`
* B) `"User"`
* C) `"Default"`
* D) `null`

#### 19. What are the final values of `x` and `y` after this code executes?
```javascript
let x = 3;
let y = x++ + ++x * 2;
```
* A) `x = 5, y = 13`
* B) `x = 5, y = 14`
* C) `x = 4, y = 11`
* D) `x = 5, y = 11`

#### 20. What is the result of the following expression?
```javascript
const val = 12 / 3 * 2 ** 3 - 4;
```
* A) `28`
* B) `0`
* C) `-3.5`
* D) `2`

---

### Section 5: Working with Arrays and Objects

#### 21. What is logged to the console?
```javascript
const obj = {};
const firstKey = { id: 1 };
const secondKey = { id: 2 };

obj[firstKey] = "Alpha";
obj[secondKey] = "Beta";

console.log(obj[firstKey]);
```
* A) `"Alpha"`
* B) `"Beta"`
* C) `undefined`
* D) A TypeError is thrown.

#### 22. Consider the following code snippet. What is logged to the console?
```javascript
const original = { a: 1, b: { c: 2 } };
const copy = Object.assign({}, original);

copy.a = 99;
copy.b.c = 99;

console.log(original.a, original.b.c);
```
* A) `1 2`
* B) `99 99`
* C) `1 99`
* D) `99 2`

#### 23. What is logged to the console when the following code runs?
```javascript
const list = [10, 20, 30, 40, 50];
const sub1 = list.slice(1, 3);
const sub2 = list.splice(1, 2);

console.log(list.length, sub1[0], sub2[0]);
```
* A) `5 20 20`
* B) `3 20 20`
* C) `3 20 30`
* D) `5 20 30`

#### 24. What is the length of `arr` and the value of `arr[2]` after running this code?
```javascript
const arr = [1, 2];
arr[4] = 5;
console.log(arr.length, arr[2]);
```
* A) `3 undefined`
* B) `5 undefined`
* C) `5 null`
* D) A SyntaxError is thrown.

#### 25. What is logged to the console when this code runs?
```javascript
let score = 100;
const game = { score: 200 };

delete score;
delete game.score;

console.log(score, game.score);
```
* A) `undefined undefined`
* B) `100 undefined`
* C) `100 200`
* D) A TypeError is thrown.

---

### Section 6: Control Structures

#### 26. What happens when the following code is executed?
```javascript
const action = "print";

switch (action) {
  case "save":
    let message = "Saved!";
    break;
  case "print":
    message = "Printing...";
    console.log(message);
    break;
}
```
* A) It logs `"Printing..."`.
* B) It throws a ReferenceError.
* C) It logs `"Saved!"`.
* D) It throws a SyntaxError: Identifier 'message' has already been declared.

#### 27. Which of the following conditions will evaluate to `true` in JavaScript?
* A) `if ("")`
* B) `if ([])`
* C) `if (NaN)`
* D) `if (null)`

#### 28. What will be logged to the console after this code runs?
```javascript
let count = 0;
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1) {
      break;
    }
    count++;
  }
}
console.log(count);
```
* A) `9`
* B) `3`
* C) `6`
* D) `0`

#### 29. What is logged when the following code executes?
```javascript
const items = ["A", "B"];
let result = "";

for (const x in items) {
  result += x;
}
for (const y of items) {
  result += y;
}

console.log(result);
```
* A) `"ABAB"`
* B) `"01AB"`
* C) `"AB01"`
* D) `"0101"`

#### 30. What is logged to the console?
```javascript
let value = 10;
if (value > 5 || (value = 20) > 15) {
  value += 5;
}
console.log(value);
```
* A) `15`
* B) `25`
* C) `10`
* D) `20`

---

### Section 7: Functions

#### 31. What happens when this code runs?
```javascript
console.log(sayHello());
console.log(sayGoodbye());

function sayHello() {
  return "Hello!";
}

var sayGoodbye = function() {
  return "Goodbye!";
};
```
* A) Both log successfully: `"Hello!"` and `"Goodbye!"`.
* B) A ReferenceError is thrown when calling `sayGoodbye()`.
* C) `"Hello!"` is logged, then a TypeError is thrown.
* D) A SyntaxError is thrown.

#### 32. What is the return value of the function calls below?
```javascript
const multiply = (x, y) => x * y;
const add = (x, y) => { x + y };

console.log(multiply(2, 3), add(2, 3));
```
* A) `6 5`
* B) `6 undefined`
* C) `undefined 5`
* D) `undefined undefined`

#### 33. What will be logged to the console?
```javascript
let name = "Alice";

function greet() {
  console.log("Hello, " + name);
}

function run() {
  let name = "Bob";
  greet();
}

run();
```
* A) `"Hello, Alice"`
* B) `"Hello, Bob"`
* C) `"Hello, undefined"`
* D) A ReferenceError is thrown.

#### 34. What is logged when calling the function `calculate` as shown below?
```javascript
function calculate(x, y) {
  return x + y;
}
console.log(calculate(10), calculate(10, 20, 30));
```
* A) `NaN 30`
* B) `10 60`
* C) `TypeError NaN`
* D) `NaN 60`

#### 35. What is logged to the console?
```javascript
let modifier = 2;

function compute(val, multiplier = modifier) {
  console.log(val * multiplier);
}

compute(5);
modifier = 3;
compute(5);
```
* A) `10 10`
* B) `10 15`
* C) `15 15`
* D) A ReferenceError is thrown because default parameters are static.

---

## Answer Key & Detailed Explanations

### Section 1: Introduction to JavaScript
1. **D**  
   *Explanation*: JavaScript executes scripts tag by tag. The syntax error (`const x = ;`) in the first script tag prevents it from being compiled or executed at all (so `"A"` is not logged). The browser then moves on to parse and execute the second script tag separately, which runs successfully and logs `"C"`.
2. **A**  
   *Explanation*: If a `<script>` tag contains a `src` attribute, the browser downloads the external file and ignores any inline script content written inside the tags.
3. **B**  
   *Explanation*: Multi-line comments in JavaScript do not support nesting. The first closing sequence `*/` closes the outer comment block. The subsequent `*/` is parsed as code, causing a SyntaxError (unexpected token `*/`).
4. **B**  
   *Explanation*: Synchronous script tags block HTML parsing and rendering for elements below them. The browser renders `#target` (which appears before the script), but stops and waits for `delay.js` to download and run for 5 seconds before it parses, renders, and displays `"Footer Content"`.
5. **A**  
   *Explanation*: For legacy web compatibility, client-side JavaScript parses HTML-style comment openings `<!--` as single-line comments. Thus, `<!-- count = 20;` is commented out, leaving `count` at its original value of `10`.

### Section 2: Basic Debugging
6. **B**  
   *Explanation*: The console displays object properties lazily when you expand them. If you mutate the object (`user.age = 31`) before expanding it, the expanded view will show the updated value of `31`, even if it was logged before the mutation.
7. **C**  
   *Explanation*: The `debugger;` statement is a built-in breakpoint. If Developer Tools are open, execution pauses. If Developer Tools are closed, it behaves as a simple no-op.
8. **C**  
   *Explanation*: `console.trace()` outputs a stack trace that shows the execution path (function call tree) to the current line.
9. **A**  
   *Explanation*: 
   - Snippet 1: Re-declaring a block-scoped variable using `let` in the same scope throws a `SyntaxError`.
   - Snippet 2: Assigning a new value to a variable declared with `const` throws a `TypeError`.
   - Snippet 3: Accessing a variable that was never declared throws a `ReferenceError`.
10. **B**  
    *Explanation*: `console.log(element)` shows the element's HTML tag representation in a tree structure. `console.dir(element)` forces the console to display the element as a standard JavaScript object, listing all of its internal properties, keys, and values.

### Section 3: Variables and Data Types
11. **D**  
    *Explanation*: Inside the `if` block, a new block scope is created. The local `let value` shadows the global `value`. The local `value` is hoisted to the top of the block but is not initialized yet. Calling `console.log(value)` before the initialization line throws a `ReferenceError` due to the Temporal Dead Zone (TDZ).
12. **C**  
    *Explanation*: Variables declared with `var` are function-scoped and hoisted. The declaration of `var count` inside `outputCount()` is hoisted to the top of the function and initialized with `undefined`, shadowing the global `var count = 5`. Therefore, it logs `undefined`.
13. **A**  
    *Explanation*: Strings are primitive value types and are passed by value (copied). Modifying the parameter `nameVal` does not change `personName`. Objects are reference types and are passed by reference. Modifying a property of the parameter `objVal` directly affects the object that `user` references.
14. **B**  
    *Explanation*: 
    - `typeof null` is `"object"` (historical design quirk).
    - `typeof NaN` is `"number"`.
    - `typeof [1, 2]` is `"object"` (arrays are object types in JS).
    - `typeof function() {}` is `"function"`.
15. **C**  
    *Explanation*: Strings in JavaScript are immutable. You cannot modify string characters by index (`str[0] = "J"` fails silently or errors in strict mode). Calling `.toUpperCase()` returns a new string and does not modify the original. Since the new string is not reassigned, `str` remains `"javascript"`.

### Section 4: Basic Operators
16. **A**  
    *Explanation*: Subtraction `-` coerces `"10"` to number `10`, giving `8`. Then, addition `+` with string `"5"` causes string concatenation, resulting in `"85"`. Finally, `"85" + 3` results in `"853"`.
17. **B**  
    *Explanation*: `false == 0` (true), `false == ""` (true), and `0 == ""` (true) all evaluate to true because of loose equality type coercion. However, `null == 0` is false because `null` is not coerced to a number for loose equality checks. Therefore, the overall logical AND expression is `false`.
18. **B**  
    *Explanation*: 
    - `(null || "Default")` returns `"Default"` because `null` is falsy.
    - `("User" || 0)` returns `"User"` because `"User"` is truthy (causing immediate short-circuit).
    - `"Default" && "User"` returns `"User"` because the left-hand operand is truthy, so the AND operator returns the right-hand operand.
19. **A**  
    *Explanation*: In `x++ + ++x * 2`:
    - `x++` evaluates first, returning `3` and then incrementing `x` to `4`.
    - `++x` runs next, incrementing `x` from `4` to `5` and returning `5`.
    - The multiplication evaluates: `5 * 2 = 10`.
    - The addition evaluates: `3 + 10 = 13`.
    - Final values: `x = 5, y = 13`.
20. **A**  
    *Explanation*: The precedence order is: Exponentiation `**`, then Division `/` and Multiplication `*` (evaluated left-to-right), then Subtraction `-`.
    - `2 ** 3 = 8`.
    - `12 / 3 = 4`.
    - `4 * 8 = 32`.
    - `32 - 4 = 28`.

### Section 5: Working with Arrays and Objects
21. **B**  
    *Explanation*: Object property keys must be strings. When accessing properties using an object key (`firstKey` or `secondKey`), JavaScript converts the object to a string via `toString()`, which returns `"[object Object]"`. Both assignments overwrite the same property key, `obj["[object Object]"]`. Thus, it logs `"Beta"`.
22. **C**  
    *Explanation*: `Object.assign` makes a shallow copy. Direct primitive properties (like `a`) are copied by value, so `original.a` remains `1`. Nested objects (like `b`) are copied by reference. Thus, modifying `copy.b.c` also mutates `original.b.c` to `99`.
23. **B**  
    *Explanation*: 
    - `list.slice(1, 3)` returns a new array `[20, 30]`, leaving `list` unmodified. `sub1[0]` is `20`.
    - `list.splice(1, 2)` removes index 1 and 2 from `list` (mutating it) and returns `[20, 30]`. `sub2[0]` is `20`.
    - After the elements are removed, `list` becomes `[10, 40, 50]`, so `list.length` is `3`.
24. **B**  
    *Explanation*: Assigning a value to an out-of-bound index (index 4) dynamically grows the array length to `5`. The intermediate unassigned index 2 remains empty, returning `undefined` when accessed.
25. **B**  
    *Explanation*: The `delete` operator only deletes object properties. It cannot delete variables declared with `let`, `const`, or `var`. Thus, `score` remains `100`, while `game.score` is deleted and returns `undefined`.

### Section 6: Control Structures
26. **B**  
    *Explanation*: Variables declared with `let` and `const` inside a switch case are scoped to the entire switch block. However, when the `"print"` case is matched, the line declaring `let message` is skipped. Accessing `message` inside the `"print"` case throws a `ReferenceError` because of the Temporal Dead Zone (TDZ).
27. **B**  
    *Explanation*: Empty arrays `[]` are object types and are always truthy in JavaScript, whereas empty strings `""`, `NaN`, and `null` are falsy.
28. **C**  
    *Explanation*: The `break` inside the inner loop only terminates the inner loop, not the outer loop.
    - When `i = 0`, count increases by 3 (`count = 3`).
    - When `i = 1`, the inner loop immediately breaks (`count` remains `3`).
    - When `i = 2`, count increases by 3 (`count = 6`).
29. **B**  
    *Explanation*: `for...in` iterates over object properties (array indices as strings: `"0"`, `"1"`). `for...of` iterates over iterable values (array elements: `"A"`, `"B"`). Appending these sequences results in `"01AB"`.
30. **A**  
    *Explanation*: The condition `value > 5 || (value = 20) > 15` uses logical OR (`||`). Since the left side `value > 5` (`10 > 5`) evaluates to `true`, the OR operator short-circuits and does not evaluate the right side. The assignment `value = 20` never runs. The code executes the block: `value += 5`, resulting in `15`.

### Section 7: Functions
31. **C**  
    *Explanation*: Function declarations are fully hoisted and can be called before their definition. Variable declarations (via `var`) are hoisted but initialized to `undefined`. At the call site, `sayGoodbye` is `undefined`, so invoking `sayGoodbye()` throws a `TypeError: sayGoodbye is not a function`.
32. **B**  
    *Explanation*: 
    - `multiply` has no curly braces, so it implicitly returns `x * y` (`6`).
    - `add` uses a block body `{}`. Arrow functions with a block body do not implicitly return values; they require an explicit `return` statement. Since it is omitted, `add` returns `undefined`.
33. **A**  
    *Explanation*: JavaScript uses lexical scoping. A function resolves variables based on where it was declared, not where it is invoked. Since `greet` was declared in the global scope, it looks up `name` in the global scope where it is `"Alice"`, ignoring the local `name = "Bob"` inside `run()`.
34. **A**  
    *Explanation*: 
    - `calculate(10)` passes only one argument, so `y` becomes `undefined`. `10 + undefined` results in `NaN`.
    - `calculate(10, 20, 30)` passes three arguments. The first two are assigned to `x` and `y`, and the extra argument `30` is ignored. `10 + 20` results in `30`.
35. **B**  
    *Explanation*: Default parameters are evaluated at call time. In the first call, `multiplier` defaults to `modifier` (value `2`), logging `10`. Then `modifier` is changed to `3`. In the second call, `multiplier` defaults to `modifier` (value `3`), logging `15`.
