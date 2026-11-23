# JavaScript Junior (Level 1) Exam Prep: Missed Concepts Study Guide (Set 2)

This study guide provides a detailed breakdown of the **25 missed and unanswered questions** from Set 2. Each concept is explained with the underlying JavaScript engine mechanics, code walk-throughs, and key rules to remember for your Level 1 certification.

---

## Table of Contents
1. [Section 1: Introduction to JavaScript (Q1, Q2, Q4, Q5)](#section-1-introduction-to-javascript)
2. [Section 2: Basic Debugging (Q6, Q7)](#section-2-basic-debugging)
3. [Section 3: Variables and Data Types (Q11, Q13, Q14)](#section-3-variables-and-data-types)
4. [Section 4: Basic Operators (Q16, Q18, Q19, Q20)](#section-4-basic-operators)
5. [Section 5: Working with Arrays and Objects (Q21, Q22, Q23, Q25)](#section-5-working-with-arrays-and-objects)
6. [Section 6: Control Structures (Q27, Q28, Q29, Q30)](#section-6-control-structures)
7. [Section 7: Functions (Q32, Q33, Q34, Q35)](#section-7-functions)

---

## Section 1: Introduction to JavaScript

### Question 1: Deferred External Script Compilation Errors
```html
<script src="first.js" defer></script>
<script src="second.js" defer></script>
```
* **Your Answer:** D ❌ | **Correct Answer:** **B**
* **The Concept:** Scripts loaded with `defer` are executed in order after the HTML document is parsed. However, each `<script>` tag is **compiled independently** by the JavaScript engine. If `first.js` contains a syntax error (`const x = ;`), it fails to compile, but the browser moves on to compile and execute `second.js` successfully.
* **Key Rule:** A syntax/compilation error in one external script does not prevent other independent script files from executing.

---

### Question 2: Strict Mode Scope (`"use strict"`)
```html
<script>
  "use strict";
  x = 10; // Throws ReferenceError
</script>
<script>
  y = 20;
  console.log(y); // Logs 20
</script>
```
* **Your Answer:** A ❌ | **Correct Answer:** **C**
* **The Concept:** The `"use strict"` directive is **scoped strictly to the script block** (or function body) in which it is declared. It does **not** bleed out into subsequent `<script>` tags on the same page. The first script runs in strict mode and throws a `ReferenceError` on undeclared `x`. The second script runs in non-strict mode, allowing `y = 20` to create a global variable and print `20`.
* **Key Rule:** `"use strict"` applies only to the script file/block or function where it is written.

---

### Question 4: Octal Literals in Strict Mode
```javascript
"use strict";
const val = 017;
console.log(val);
```
* **Your Answer:** A ❌ | **Correct Answer:** **C**
* **The Concept:** Legacy octal literals prefixed with `0` (like `017`, which equals `15` in decimal) are **forbidden in strict mode** and throw a `SyntaxError`. In modern JS (ES6+), octals must be written with `0o` prefix (e.g., `0o17`).
* **Key Rule:** Legacy octals (`017`) throw a `SyntaxError` under `"use strict"`.

---

### Question 5: Automatic Semicolon Insertion (ASI) on Return
```javascript
function value() {
  return
  {
    status: "active"
  };
}
console.log(value());
```
* **Your Answer:** A ❌ | **Correct Answer:** **B**
* **The Concept:** Automatic Semicolon Insertion (ASI) inserts a semicolon immediately after `return` if `return` is followed by a line break. The engine converts line 2 to `return;`, returning `undefined`. The block `{ status: "active" };` on line 3 is never executed as part of the return.
* **Key Rule:** Never place an object literal on a new line after `return`. Keep `{` on the same line as `return {`.

---

## Section 2: Basic Debugging

### Question 6: `console.count()` Default Labels
```javascript
console.count();
console.count("auth");
console.count();
console.count("auth");
```
* **Your Answer:** D ❌ | **Correct Answer:** **A**
* **The Concept:** `console.count()` maintains internal counters keyed by label strings. If no argument is passed to `console.count()`, it defaults to the string label `"default"`.
* **Key Rule:** `console.count()` without arguments outputs `"default: 1"`, `"default: 2"`, etc.

---

### Question 7: Conditional Breakpoints Truthiness
```javascript
// Conditional Breakpoint Expression: x === 5
```
* **Your Answer:** A ❌ | **Correct Answer:** **C**
* **The Concept:** A conditional breakpoint in Chrome/Brave DevTools evaluates the expression when the line is hit. It **only pauses execution if the condition evaluates to a truthy value**. When `x` is `undefined`, `x === 5` evaluates to `false` (falsy), so the debugger ignores it and keeps running without pausing.
* **Key Rule:** Conditional breakpoints only pause when the expression evaluates to `true` (truthy).

---

## Section 3: Variables and Data Types

### Question 11: Nested `typeof` Evaluation
```javascript
let x;
console.log(typeof typeof x);
```
* **Your Answer:** D ❌ | **Correct Answer:** **B**
* **The Concept:** Evaluates right-to-left:
  1. `typeof x` evaluates to `"undefined"` (which is a string primitive).
  2. `typeof "undefined"` evaluates to `"string"`.
* **Key Rule:** The `typeof` operator **always** returns a string value representing the data type name.

---

### Question 13: Symbol Keys Uniqueness
```javascript
const obj = {};
const sym = Symbol("type");

obj[sym] = "admin";
obj["type"] = "user";

console.log(obj[Symbol("type")], obj["type"]);
```
* **Your Answer:** - (Unanswered) ❌ | **Correct Answer:** **B**
* **The Concept:** Every call to `Symbol("type")` produces a **guaranteed unique Symbol reference**, even if given the exact same description string. Therefore, `Symbol("type") !== Symbol("type")`. The property `obj[Symbol("type")]` looks for a key using a newly created symbol reference that was never assigned, returning `undefined`. `obj["type"]` accesses the string key `"type"`, returning `"user"`.
* **Key Rule:** `Symbol("x") !== Symbol("x")`. Symbols are always unique.

---

### Question 14: Setting Properties on Primitive Strings
```javascript
const word = "hello";
word.mode = "standard";
console.log(word.mode);
```
* **Your Answer:** C ❌ | **Correct Answer:** **B**
* **The Concept:** Primitive values (strings, numbers, booleans) cannot hold custom properties. When `word.mode = "standard"` runs in non-strict mode, JS temporarily wraps `"hello"` in a `String` object, assigns the property to that temporary object, and immediately discards it. When `word.mode` is read on the next line, a new temporary object is created without the property, returning `undefined`.
* **Key Rule:** Custom properties assigned to primitive values fail silently in non-strict mode and evaluate to `undefined`.

---

## Section 4: Basic Operators

### Question 16: Nullish Coalescing (`??`) vs Logical OR (`||`)
```javascript
const score = 0;
const username = "";

const val1 = score ?? 10;   // 0
const val2 = score || 10;   // 10
const val3 = username ?? "Guest"; // ""
const val4 = username || "Guest"; // "Guest"
```
* **Your Answer:** A ❌ | **Correct Answer:** **B**
* **The Concept:** 
  * `??` (Nullish Coalescing) triggers fallback **only** if left operand is `null` or `undefined`.
  * `||` (Logical OR) triggers fallback for **any falsy value** (`0`, `""`, `false`, `null`, `undefined`, `NaN`).
  * `0` and `""` are not nullish, so `score ?? 10` returns `0` and `username ?? "Guest"` returns `""`.
* **Key Rule:** Use `??` when `0` or `""` are valid user values that should not be overridden by fallbacks.

---

### Question 18: Lexicographical String Comparisons
```javascript
console.log("2" > "12", "apple" > "banana");
```
* **Your Answer:** C ❌ | **Correct Answer:** **B**
* **The Concept:** Comparing two string values using `>` or `<` compares them **alphabetically character-by-character** (Unicode values), NOT as numbers.
  1. `"2" > "12"`: The first character `"2"` (code 50) is compared to `"1"` (code 49). Since `50 > 49`, `"2" > "12"` is **`true`**!
  2. `"apple" > "banana"`: `"a"` (code 97) is compared to `"b"` (code 98). `97 > 98` is **`false`**.
* **Key Rule:** String comparison compares characters from left to right. `"2" > "12"` is `true`.

---

### Question 19: Double Bitwise NOT (`~~`) Truncation
```javascript
console.log(~~4.9, ~~-4.9);
```
* **Your Answer:** - (Unanswered) ❌ | **Correct Answer:** **A**
* **The Concept:** Bitwise operators convert their operands to 32-bit integers, effectively discarding the fractional part. `~~` operates as a fast integer truncation (`Math.trunc()`):
  * `~~4.9` becomes `4`
  * `~~-4.9` becomes `-4`
* **Key Rule:** `~~x` truncates decimal digits towards zero.

---

### Question 20: The Comma Operator
```javascript
let val = 5;
const result = (val += 2, val * 3);
console.log(result);
```
* **Your Answer:** A ❌ | **Correct Answer:** **B**
* **The Concept:** The comma operator `,` evaluates each of its expressions from left to right and **returns the value of the final expression**.
  1. `val += 2` updates `val` from `5` to `7`.
  2. `val * 3` evaluates `7 * 3 = 21`.
  3. `result` receives `21`.
* **Key Rule:** `(expr1, expr2)` evaluates both, but returns the result of `expr2`.

---

## Section 5: Working with Arrays and Objects

### Question 21: Sparse Arrays and `Array(3)`
```javascript
const values = Array(3);
console.log(values.length, 0 in values);
```
* **Your Answer:** D ❌ | **Correct Answer:** **B**
* **The Concept:** `Array(3)` creates a sparse array with `length` 3, but contains **empty slots** (no index keys exist in memory). The `in` operator checks if an index property exists on the object. Since no index property exists at index `0`, `0 in values` returns `false`.
* **Key Rule:** `Array(N)` creates empty slots. Index properties do not exist until assigned.

---

### Question 22: `Object.seal()` Mutation Rules
```javascript
const item = { id: 101 };
Object.seal(item);

item.id = 202;       // Allowed (existing property)
item.category = "books"; // Ignored in non-strict mode
delete item.id;      // Ignored in non-strict mode

console.log(item.id, item.category);
```
* **Your Answer:** - (Unanswered) ❌ | **Correct Answer:** **B**
* **The Concept:** `Object.seal()` prevents adding new properties and deleting existing properties. However, **existing writable properties can still be modified**.
  * `item.id = 202` succeeds (`item.id` becomes `202`).
  * `item.category` is not added (`undefined`).
  * `delete item.id` fails silently in non-strict mode.
* **Key Rule:** `Object.seal()` allows editing existing properties, but blocks additions and deletions.

---

### Question 23: `indexOf(NaN)` vs `includes(NaN)`
```javascript
const list = [1, 2, NaN, 4];
console.log(list.indexOf(NaN), list.includes(NaN));
```
* **Your Answer:** B ❌ | **Correct Answer:** **A**
* **The Concept:** 
  * `indexOf` uses **Strict Equality (`===`)**. Because `NaN === NaN` is `false`, `indexOf` cannot find `NaN` and returns `-1`.
  * `includes` uses **SameValueZero** algorithm, which correctly handles `NaN` and returns `true`.
* **Key Rule:** `indexOf(NaN)` returns `-1`, while `includes(NaN)` returns `true`.

---

### Question 25: `Object.defineProperty` Default Descriptors
```javascript
const settings = {};
Object.defineProperty(settings, "theme", {
  value: "dark"
});

console.log(settings.theme, Object.keys(settings).length);
```
* **Your Answer:** D ❌ | **Correct Answer:** **C**
* **The Concept:** Properties created with `Object.defineProperty` default their descriptors (`enumerable`, `writable`, `configurable`) to `false`.
  * `settings.theme` returns `"dark"`.
  * Because `enumerable` defaults to `false`, `Object.keys(settings)` ignores the property and returns an empty array `[]` (length `0`).
* **Key Rule:** `Object.defineProperty` creates non-enumerable properties by default.

---

## Section 6: Control Structures

### Question 27: Switch Statement Fall-Through
```javascript
const val = "5";

switch (true) {
  case val == 5:
    console.log("Match 1");
  case val === 5:
    console.log("Match 2");
    break;
}
```
* **Your Answer:** A ❌ | **Correct Answer:** **B**
* **The Concept:** Once a `switch` statement matches a `case`, JS executes the code block and **falls through all subsequent case blocks without evaluating their expressions** until it hits a `break;`.
  1. `val == 5` (`"5" == 5`) is `true`, matching `switch(true)`.
  2. Prints `"Match 1"`.
  3. No `break;` exists, so it falls through to `case val === 5:` without evaluating `val === 5`.
  4. Prints `"Match 2"` and hits `break;`.
* **Key Rule:** Omitting `break;` causes execution to fall through into subsequent case blocks without testing their conditions.

---

### Question 28: Multiple Loop Variable Updates
```javascript
let sum = 0;
for (let i = 0, j = 5; i < 3 && j > 1; i++, j--) {
  sum += i * j;
}
console.log(sum);
```
* **Your Answer:** B ❌ | **Correct Answer:** **D**
* **The Walk-through:**
  * **Iter 1:** `i = 0, j = 5` $\rightarrow$ `sum += 0 * 5` ($0$) $\rightarrow$ Next: `i = 1, j = 4`
  * **Iter 2:** `i = 1, j = 4` $\rightarrow$ `sum += 1 * 4` ($4$) $\rightarrow$ Next: `i = 2, j = 3`
  * **Iter 3:** `i = 2, j = 3` $\rightarrow$ `sum += 2 * 3` ($6$) $\rightarrow$ Total `sum = 10`. Next: `i = 3, j = 2`
  * **Iter 4:** Condition `i < 3` ($3 < 3$) fails. Loop ends. `sum = 10`.
* **Key Rule:** Trace every loop iteration step-by-step on paper during the exam.

---

### Question 29: Logical Operators Returning Operand Values
```javascript
const flag = "" && "Hello";
if (flag) {
  console.log("A");
} else {
  console.log("B:", typeof flag);
}
```
* **Your Answer:** C ❌ | **Correct Answer:** **B**
* **The Concept:** `"" && "Hello"` evaluates `""` (falsy), short-circuits, and returns `""`. `flag` is assigned the string `""`. In the `if` check, `""` is falsy, so it jumps to `else` and logs `"B: string"`.
* **Key Rule:** `&&` returns the actual operand value, NOT a boolean.

---

### Question 30: `const` Reassignment in Standard `for` Loops
```javascript
for (const i = 0; i < 3; i++) {
  console.log(i);
}
```
* **Your Answer:** A ❌ | **Correct Answer:** **B**
* **The Concept:** In a standard `for (const i = 0; i < 3; i++)` loop, `i++` attempts to reassign `i` at the end of the first iteration (`i = i + 1`). Reassigning a `const` variable throws a `TypeError`.
* **Key Rule:** Standard `for` loops require `let`. Only `for...in` and `for...of` can use `const`.

---

## Section 7: Functions

### Question 32: Undeclared Variable Leakage in Assignment Chains
```javascript
(function() {
  var val1 = val2 = 50;
})();

console.log(typeof val1, typeof val2);
```
* **Your Answer:** B ❌ | **Correct Answer:** **C**
* **The Concept:** `var val1 = val2 = 50` is evaluated from right to left:
  1. `val2 = 50`: Assigns `50` to `val2`. Since `val2` has no `var`/`let`/`const` keyword, it creates a **global variable** `val2` in non-strict mode.
  2. `var val1 = val2`: Declares `val1` locally to the IIFE function.
  3. Outside the function, `val1` is inaccessible (returns `"undefined"` via `typeof`), while `val2` exists on the global object (type `"number"`).
* **Key Rule:** Chains like `var a = b = 1` accidentally leak `b` to the global scope.

---

### Question 33: Lexical Closures vs Global Variables
```javascript
function makeAdder(amount) {
  let base = 10;
  return function(num) {
    return base + amount + num;
  };
}

const addFive = makeAdder(5);
base = 20;
console.log(addFive(2));
```
* **Your Answer:** D ❌ | **Correct Answer:** **A**
* **The Concept:** The variable `let base = 10` is declared inside `makeAdder`'s local scope. The line `base = 20` in the outer scope creates an unrelated global variable `window.base`. The inner closure looks up `base` in its parent scope (`makeAdder`), finding `let base = 10`. It calculates `10 + 5 + 2 = 17`.
* **Key Rule:** Inner functions capture the local variables of their defining parent scope, ignoring global variables with the same name.

---

### Question 34: Function Arity (`.length`) and Default Parameters
```javascript
function process(a, b = 2, c) {}
console.log(process.length);
```
* **Your Answer:** - (Unanswered) ❌ | **Correct Answer:** **C**
* **The Concept:** A function's `.length` property returns the number of expected positional parameters. It **stops counting at the first parameter with a default value**. In `(a, b = 2, c)`, `b` has a default value, so only `a` is counted (`1`).
* **Key Rule:** `fn.length` counts parameters only *before* the first default parameter.

---

### Question 35: Curried Function Invocation
```javascript
function outer(x) {
  return function(y) {
    return x * y;
  };
}
console.log(outer(3)(4));
```
* **Your Answer:** D ❌ | **Correct Answer:** **A**
* **The Concept:** `outer(3)` returns the inner function with `x = 3` trapped in its closure. The second set of parentheses `(4)` immediately calls that returned function with `y = 4`. The multiplication returns `3 * 4 = 12`.
* **Key Rule:** `fn(a)(b)` invokes the returned inner function immediately.
