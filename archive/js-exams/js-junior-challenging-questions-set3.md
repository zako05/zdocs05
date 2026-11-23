# JavaScript Junior (Level 1) Challenging Exam Prep: Practice Questions - Set 3

This is the third mock exam set designed to prepare you for the **JavaScript Beginner (Level 1) / Junior JavaScript Developer Certification** on Certificates.dev. It covers all 7 primary areas of the syllabus with tricky edge cases, scope rules, type coercion, and syntax details within the Level 1 boundaries.

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

#### 1. Consider the following three external script tags in an HTML document:
```html
<script src="a.js"></script>
<script src="b.js" async></script>
<script src="c.js" defer></script>
```
Which of the following statements is TRUE regarding their execution?
* A) `c.js` will always execute before `b.js`.
* B) `a.js` blocks HTML parsing while downloading and executing, whereas `c.js` executes after HTML parsing is complete.
* C) `b.js` is guaranteed to execute after `a.js` completes.
* D) `c.js` blocks HTML parsing just like `a.js`.

#### 2. What will be logged to the console when the following code runs?
```javascript
const str = "/* hello world */";
console.log(str.length);
```
* A) `0` (because the contents are treated as a comment).
* B) `19` (the full string length including comment markers).
* C) A SyntaxError is thrown because comment tokens cannot be placed in quotes.
* D) `15`

#### 3. What happens when a script tag is dynamically injected into a web page using `innerHTML` as shown below?
```javascript
const container = document.getElementById("box");
container.innerHTML = "<script>console.log('Injected!');</script>";
```
* A) It logs `"Injected!"` immediately.
* B) It throws a SecurityError.
* C) The browser parses the script tag, but does NOT execute it (per HTML5 spec for `innerHTML`).
* D) It executes only if the script tag has a `src` attribute.

#### 4. What happens when the browser executes this function declaration?
```javascript
function calculate(a, a, b) {
  "use strict";
  return a + b;
}
```
* A) It executes normally and uses the second value of `a`.
* B) It throws a SyntaxError: Duplicate parameter name not allowed in this context.
* C) It logs `NaN`.
* D) It throws a TypeError at runtime.

#### 5. What is the output of the following code snippet?
```javascript
let num = 1
[1, 2, 3].forEach(n => console.log(n))
```
Assume no semicolon is present after `1`.
* A) It logs `1`, `2`, `3` on separate lines.
* B) It throws a TypeError (e.g. `Cannot read properties of undefined` or `1[...] is not a function`).
* C) It logs `1` and ignores the array.
* D) It throws a SyntaxError.

---

### Section 2: Basic Debugging

#### 6. What happens if you call `console.timeEnd("loop")` without a matching `console.time("loop")` preceding it?
```javascript
console.timeEnd("loop");
```
* A) It silently does nothing.
* B) It throws an Uncaught ReferenceError.
* C) It outputs a console warning/error indicating that timer 'loop' does not exist.
* D) It starts a new timer named 'loop'.

#### 7. If you configure DevTools to "Pause on uncaught exceptions", what will happen when the following code executes?
```javascript
try {
  throw new Error("Something went wrong");
} catch (e) {
  console.log("Caught!");
}
```
* A) DevTools will pause on the `throw` line.
* B) DevTools will NOT pause, because the exception is caught by the `catch` block.
* C) DevTools will pause inside the `catch` block.
* D) DevTools will terminate the script execution immediately.

#### 8. What is the difference between `console.group()` and `console.groupCollapsed()`?
* A) `console.group()` is for strings; `console.groupCollapsed()` is for objects.
* B) `console.groupCollapsed()` creates an initially closed/collapsed log group in the console.
* C) `console.group()` automatically closes after 5 seconds.
* D) `console.groupCollapsed()` hides error messages inside the group.

#### 9. What error type is thrown by the JavaScript engine when recursive calls exceed the maximum call stack size?
```javascript
function recurse() {
  recurse();
}
recurse();
```
* A) `StackOverflowError`
* B) `TypeError`
* C) `RangeError`
* D) `ReferenceError`

#### 10. Where is the utility function `getEventListeners(domElement)` available for inspecting event listeners attached to an element?
* A) In standard client-side JavaScript files running on any web page.
* B) Only inside the browser's Developer Tools Console environment.
* C) In Node.js server environments only.
* D) It is a method on `window.document`.

---

### Section 3: Variables and Data Types

#### 11. What will be logged by the following code?
```javascript
console.log(typeof undeclaredVar);
console.log(typeof declaredLet);
let declaredLet = 10;
```
* A) `"undefined"`, `"undefined"`
* B) `"undefined"`, followed by a `ReferenceError`
* C) `ReferenceError`, followed by `"number"`
* D) `"object"`, `"number"`

#### 12. What is logged to the console?
```javascript
let str = "hello";
let upper = str.toUpperCase();
console.log(str === upper, str[0]);
```
* A) `true "H"`
* B) `false "h"`
* C) `false "H"`
* D) `true "h"`

#### 13. What is the result of evaluating this statement in JavaScript?
```javascript
const max = Number.MAX_SAFE_INTEGER;
console.log(max + 1 === max + 2);
```
* A) `false`
* B) `true`
* C) A TypeError is thrown.
* D) `NaN`

#### 14. What happens when executing this code?
```javascript
const sym = Symbol("id");
console.log(sym + "");
```
* A) It logs `"Symbol(id)"`.
* B) It logs `"id"`.
* C) It throws a TypeError: Cannot convert a Symbol value to a string.
* D) It logs `undefined`.

#### 15. What happens when this code is parsed by a JavaScript engine?
```javascript
const x;
x = 10;
console.log(x);
```
* A) It logs `10`.
* B) It logs `undefined`.
* C) It throws a SyntaxError: Missing initializer in const declaration.
* D) It throws a ReferenceError.

---

### Section 4: Basic Operators

#### 16. What is the value of `val` after this statement runs?
```javascript
const val = true ? 1 : 2 + 3;
console.log(val);
```
* A) `1`
* B) `5`
* C) `true`
* D) `3`

#### 17. What are the final values of `b` and `c`?
```javascript
let a = false;
let b = true;
let c = a || (b = false);
console.log(b, c);
```
* A) `true false`
* B) `false false`
* C) `true true`
* D) `false true`

#### 18. What is logged when applying the unary plus `+` operator to these values?
```javascript
console.log(+"", +true, +false, +null, +undefined);
```
* A) `0 1 0 0 NaN`
* B) `NaN 1 0 0 NaN`
* C) `0 1 0 NaN NaN`
* D) `0 1 0 0 0`

#### 19. What is the result of evaluating this exponential expression?
```javascript
console.log(2 ** 3 ** 2);
```
* A) `64`
* B) `512`
* C) `36`
* D) A SyntaxError is thrown because multiple `**` operators require parentheses.

#### 20. What is logged by these loose and strict equality checks?
```javascript
console.log(null == undefined, null === undefined, null == false);
```
* A) `true false false`
* B) `true true false`
* C) `false false false`
* D) `true false true`

---

### Section 5: Working with Arrays and Objects

#### 21. What will be logged to the console?
```javascript
const arr = [1, 2, 3];
arr.forEach(num => {
  arr.push(num * 2);
});
console.log(arr.length);
```
* A) It runs as an infinite loop.
* B) `3`
* C) `6`
* D) `9`

#### 22. What is logged after mutating the nested property?
```javascript
const user = Object.freeze({ name: "Anna", details: { age: 25 } });
user.details.age = 30;
console.log(user.details.age);
```
* A) `25`
* B) `30`
* C) `undefined`
* D) A TypeError is thrown.

#### 23. What are the values of `res1` and `res2`?
```javascript
const a = [1];
const res1 = a.push(2);
const res2 = a.concat(3);

console.log(res1, res2);
```
* A) `[1, 2] [1, 2, 3]`
* B) `2 [1, 2, 3]`
* C) `2 3`
* D) `[1, 2] 3`

#### 24. What is the output of these property checks on a plain object?
```javascript
const obj = {};
console.log("toString" in obj, Object.hasOwn(obj, "toString"));
```
* A) `true true`
* B) `false false`
* C) `true false`
* D) `false true`

#### 25. What are the values of `a` and `b` after destructuring?
```javascript
const [a = 1, b = 2] = [undefined, null];
console.log(a, b);
```
* A) `1 2`
* B) `undefined null`
* C) `1 null`
* D) `undefined 2`

---

### Section 6: Control Structures

#### 26. What is the value of `keys` after the loop completes?
```javascript
Array.prototype.customProp = "test";
const arr = [10, 20];
let keys = "";

for (let key in arr) {
  keys += key;
}
console.log(keys);
```
* A) `"01"`
* B) `"1020"`
* C) `"01customProp"`
* D) `"1020test"`

#### 27. What is returned by calling `test()`?
```javascript
function test() {
  try {
    return "TRY";
  } finally {
    return "FINALLY";
  }
}
console.log(test());
```
* A) `"TRY"`
* B) `"FINALLY"`
* C) `undefined`
* D) A SyntaxError is thrown.

#### 28. What happens when this code block runs?
```javascript
let x = 0;
if (x = 5) {
  console.log("Executed, x is", x);
} else {
  console.log("Not executed");
}
```
* A) It logs `"Not executed"`.
* B) It logs `"Executed, x is 5"`.
* C) It logs `"Executed, x is 0"`.
* D) It throws a ReferenceError.

#### 29. What is the output of this loop?
```javascript
let count = 3;
let output = "";

while (count--) {
  output += count;
}
console.log(output);
```
* A) `"321"`
* B) `"210"`
* C) `"3210"`
* D) `"21"`

#### 30. What happens when this code is executed?
```javascript
const type = 1;

switch (type) {
  case 1:
    let msg = "Hello";
    break;
  case 2:
    let msg = "World";
    break;
}
```
* A) It logs `"Hello"`.
* B) It throws a SyntaxError: Identifier 'msg' has already been declared.
* C) It runs without errors and does nothing.
* D) It throws a ReferenceError.

---

### Section 7: Functions

#### 31. What is logged to the console?
```javascript
console.log(typeof foo, typeof bar);

function foo() {}
var bar = function() {};
```
* A) `"function" "function"`
* B) `"undefined" "undefined"`
* C) `"function" "undefined"`
* D) `"undefined" "function"`

#### 32. What is logged after calling `update(n, o)`?
```javascript
function update(num, obj) {
  num = 100;
  obj.val = 100;
  obj = { val: 200 };
}

let n = 10;
let o = { val: 10 };
update(n, o);

console.log(n, o.val);
```
* A) `100 200`
* B) `10 100`
* C) `10 200`
* D) `100 10`

#### 33. What is returned by calling `calc(5)`?
```javascript
function calc(a, b = a * 2) {
  return a + b;
}
console.log(calc(5));
```
* A) `15`
* B) `NaN`
* C) `10`
* D) A ReferenceError is thrown.

#### 34. What happens when `fn()` is invoked in a standard browser console?
```javascript
const fn = () => console.log(typeof arguments);
fn();
```
* A) It logs `"object"`.
* B) It throws a ReferenceError: arguments is not defined.
* C) It logs `"undefined"`.
* D) It logs `"array"`.

#### 35. What is logged to the console?
```javascript
const counter = (function() {
  let count = 0;
  return {
    inc: () => ++count,
    get: () => count
  };
})();

counter.inc();
counter.inc();
console.log(counter.get());
```
* A) `2`
* B) `0`
* C) `undefined`
* D) A TypeError is thrown.

---

## Answer Key & Detailed Explanations

### Section 1: Introduction to JavaScript
1. **B**  
   *Explanation*: Standard external script tags (`<script src="...">`) block HTML parsing while downloading and executing. `defer` scripts download in parallel and execute in document order **after** HTML parsing completes. `async` scripts execute as soon as downloaded, without guaranteed execution order relative to other scripts.
2. **B**  
   *Explanation*: Characters inside string quotes are parsed as string literals by JavaScript, NOT as code comments. The string `"/* hello world */"` is a normal string of length 19.
3. **C**  
   *Explanation*: The HTML5 specification explicitly states that `<script>` tags inserted dynamically via `element.innerHTML` must **not** be executed. This security design prevents Cross-Site Scripting (XSS) via simple innerHTML injection.
4. **B**  
   *Explanation*: In strict mode (`"use strict"`), function declarations with duplicate parameter names (like `a, a`) are forbidden and throw a `SyntaxError` at parse time.
5. **B**  
   *Explanation*: Without a trailing semicolon after `let num = 1`, Automatic Semicolon Insertion (ASI) does NOT insert a semicolon before `[1, 2, 3]`. JavaScript attempts to parse `1[1, 2, 3]` as an property/index lookup on the number `1`, resulting in a `TypeError`.

### Section 2: Basic Debugging
6. **C**  
   *Explanation*: `console.timeEnd(label)` looks for an active timer started with `console.time(label)`. If no matching label is found (or labels differ in case), it outputs a console warning indicating that the timer does not exist.
7. **B**  
   *Explanation*: "Pause on uncaught exceptions" tells DevTools to pause execution only when an exception is thrown and **not caught** by any `try...catch` block. Since the error is caught, DevTools does not pause.
8. **B**  
   *Explanation*: `console.groupCollapsed()` behaves identically to `console.group()`, except that the log group is initially rendered in a collapsed/closed state in the console UI.
9. **C**  
   *Explanation*: Infinite recursion exceeds the maximum size of the execution call stack, causing the engine to throw a `RangeError: Maximum call stack size exceeded`.
10. **B**  
    *Explanation*: `getEventListeners()` is a command-line utility function provided exclusively inside the browser's Developer Tools Console API. It is not part of standard JavaScript and cannot be called inside web application scripts.

### Section 3: Variables and Data Types
11. **B**  
    *Explanation*: 
    - Calling `typeof` on a variable that was never declared anywhere returns `"undefined"` without error.
    - However, calling `typeof` on a `let` or `const` variable before its declaration line (inside its Temporal Dead Zone - TDZ) throws a `ReferenceError`.
12. **B**  
    *Explanation*: Primitive strings are immutable. Calling `str.toUpperCase()` returns a brand new string `"HELLO"` without mutating `str`. Thus, `str === upper` is `false`, and `str[0]` remains `"h"`.
13. **B**  
    *Explanation*: `Number.MAX_SAFE_INTEGER` is $2^{53} - 1$ ($9007199254740991$). Adding numbers beyond this threshold exceeds double-precision IEEE-754 precision, causing $9007199254740991 + 1$ and $9007199254740991 + 2$ to evaluate to the exact same double-precision float ($9007199254740992$). Thus, `max + 1 === max + 2` is `true`.
14. **C**  
    *Explanation*: Symbols cannot be implicitly converted to strings or numbers via string concatenation (`sym + ""`). Doing so throws a `TypeError`. Explicit conversion using `String(sym)` or `sym.toString()` is required.
15. **C**  
    *Explanation*: `const` declarations require an explicit initializer at the time of declaration. Writing `const x;` throws a `SyntaxError: Missing initializer in const declaration`.

### Section 4: Basic Operators
16. **A**  
    *Explanation*: The ternary operator evaluates the condition `true`. Since it is truthy, it evaluates and returns the true-expression `1`. The false-expression `2 + 3` is never evaluated due to short-circuiting.
17. **B**  
    *Explanation*: `c = a || (b = false)` evaluates `a` (`false`). Since `a` is falsy, the `||` operator evaluates the right side `(b = false)`. This assigns `false` to `b`, and returns `false` to `c`. Both `b` and `c` become `false`.
18. **A**  
    *Explanation*: Unary plus `+` coerces primitives to numbers:
    - `+""` $\rightarrow$ `0`
    - `+true` $\rightarrow$ `1`
    - `+false` $\rightarrow$ `0`
    - `+null` $\rightarrow$ `0`
    - `+undefined` $\rightarrow$ `NaN`
19. **B**  
    *Explanation*: The exponentiation operator `**` is **right-associative**. `2 ** 3 ** 2` is evaluated from right to left as `2 ** (3 ** 2)` $\rightarrow$ `2 ** 9 = 512`.
20. **A**  
    *Explanation*: 
    - `null == undefined` is `true` (special loose equality rule: `null` and `undefined` loosely equal each other and nothing else).
    - `null === undefined` is `false` (different types).
    - `null == false` is `false` (`null` does not convert to numeric `0` for loose equality with booleans).

### Section 5: Working with Arrays and Objects
21. **C**  
    *Explanation*: `Array.prototype.forEach` determines the number of iterations based on `arr.length` **before** the first iteration starts. Appending elements (`push`) during iteration extends the array in memory, but does not increase the number of loop cycles. The loop runs 3 times, adding 3 elements. Final length is `3 + 3 = 6`.
22. **B**  
    *Explanation*: `Object.freeze()` performs a **shallow freeze**. Top-level properties of `user` are frozen, but nested object properties (`user.details.age`) remain mutable and can be updated to `30`.
23. **B**  
    *Explanation*: `a.push(2)` mutates `a` and returns the **new array length** (`2`). `a.concat(3)` returns a **new array** containing `[1, 2, 3]`.
24. **C**  
    *Explanation*: The `in` operator checks if a property exists anywhere on the object or its prototype chain (returning `true` for `"toString"`). `Object.hasOwn()` (or `hasOwnProperty`) only checks if the property is a direct own property of the object (returning `false`).
25. **C**  
    *Explanation*: Destructuring default values trigger **only** when an element is `undefined`.
    - `a` receives `undefined`, so its default value `1` is used.
    - `b` receives `null`, which is a valid value (not `undefined`), so `b` is assigned `null`.

### Section 6: Control Structures
26. **C**  
    *Explanation*: `for...in` loops iterate over **all enumerable properties** of an object, including inherited properties from its prototype chain. Adding `customProp` to `Array.prototype` causes `for...in` to iterate over index `"0"`, index `"1"`, and key `"customProp"`, concatenating into `"01customProp"`.
27. **B**  
    *Explanation*: If a `finally` block contains an explicit `return` statement, it overrides any previous `return` statements executed inside the `try` or `catch` blocks. The function returns `"FINALLY"`.
28. **B**  
    *Explanation*: The condition `x = 5` is an **assignment**, not a comparison (`==` or `===`). It assigns `5` to `x` and evaluates to `5` (truthy). The `if` block executes, logging `"Executed, x is 5"`.
29. **B**  
    *Explanation*: The `while (count--)` condition uses post-decrement:
    - Cycle 1: Check `3` (truthy), decrement `count` to `2` $\rightarrow$ `output += "2"`
    - Cycle 2: Check `2` (truthy), decrement `count` to `1` $\rightarrow$ `output += "1"`
    - Cycle 3: Check `1` (truthy), decrement `count` to `0` $\rightarrow$ `output += "0"`
    - Cycle 4: Check `0` (falsy) $\rightarrow$ Loop terminates. Output is `"210"`.
30. **B**  
    *Explanation*: All `case` blocks inside a `switch` statement share the **same lexical scope** unless explicit block scope braces `{}` are added. Declaring `let msg` in `case 1` and again in `case 2` throws a `SyntaxError: Identifier 'msg' has already been declared`.

### Section 7: Functions
31. **C**  
    *Explanation*: Function declarations (`function foo() {}`) are fully hoisted at parse time (type `"function"`). Variables declared with `var` (`var bar = ...`) have their declaration hoisted as `undefined` before assignment occurs. Thus, `typeof bar` is `"undefined"`.
32. **B**  
    *Explanation*: Primitives are passed by value, so modifying `num = 100` leaves `n` at `10`. Objects are passed by reference value: mutating `obj.val = 100` modifies `o.val` to `100`. However, reassigning `obj = { val: 200 }` breaks the local parameter reference without affecting `o`. Output: `10 100`.
33. **A**  
    *Explanation*: Default parameters can reference earlier parameters in the same parameter list. `b = a * 2` evaluates `5 * 2 = 10`. The function returns `5 + 10 = 15`.
34. **B**  
    *Explanation*: Arrow functions do not bind their own `arguments` object. Attempting to access `arguments` inside an arrow function in a browser environment throws an Uncaught `ReferenceError: arguments is not defined`.
35. **A**  
    *Explanation*: This is the Module Pattern using an IIFE. The closure retains `let count = 0`. Calling `counter.inc()` twice increments `count` to `2`. Calling `counter.get()` returns `2`.
