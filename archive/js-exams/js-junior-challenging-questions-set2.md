# JavaScript Junior (Level 1) Challenging Exam Prep: Practice Questions - Set 2

This is the second mock exam set designed to help you prepare for the **JavaScript Beginner (Level 1) / Junior JavaScript Developer Certification** on Certificates.dev. It covers all 7 primary areas of the syllabus, focusing on trickier edge cases, scope rules, type coercion, and syntax details within the Level 1 boundaries.

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

#### 1. Consider the following HTML page which loads two deferred external scripts. What will be logged to the console?
```html
<script src="first.js" defer></script>
<script src="second.js" defer></script>
```
Assume `first.js` has a compilation syntax error (`const x = ;`), while `second.js` contains valid code (`console.log("Second loaded");`).
* A) Nothing is logged, and the browser stops parsing the document entirely.
* B) `"Second loaded"` is logged, and a SyntaxError is reported for `first.js`.
* C) A SyntaxError is thrown, and the execution of `second.js` is blocked because it depends on the execution of the first script in order.
* D) `"Second loaded"` is logged first, then the browser attempts to execute `first.js` and throws an error.

#### 2. What happens when the browser runs the following HTML page?
```html
<script>
  "use strict";
  x = 10;
</script>
<script>
  y = 20;
  console.log(y);
</script>
```
* A) A ReferenceError is thrown in both scripts, and nothing is logged.
* B) `10` and `20` are logged.
* C) A ReferenceError is thrown in the first script; the second script executes successfully and logs `20`.
* D) A SyntaxError is thrown because `"use strict"` applies to the entire HTML document once declared in any script tag.

#### 3. What is the behavior of the browser when loading an HTML document containing this inline script?
```html
<script>
  const scriptContent = "Custom closure: </script>";
  console.log(scriptContent);
</script>
```
* A) It logs `"Custom closure: </script>"` successfully to the console.
* B) It throws a SyntaxError: Unexpected end of input or similar error, because the browser parses the text `</script>` inside the string as the closing HTML tag.
* C) The browser automatically escapes the script and treats the entire tag block as plain text.
* D) It throws a TypeError because you cannot store HTML markup in a JavaScript variable.

#### 4. What will happen if you execute the following JavaScript code?
```javascript
"use strict";
const val = 017;
console.log(val);
```
* A) It logs `17`.
* B) It logs `15` (octal conversion).
* C) It throws a SyntaxError because octal literals are not allowed in strict mode.
* D) It throws a TypeError because octal numbers cannot be declared using `const`.

#### 5. How is the following script processed by a standard JavaScript engine?
```javascript
function value() {
  return
  {
    status: "active"
  };
}
console.log(value());
```
* A) It logs `{ status: "active" }`.
* B) It logs `undefined` due to Automatic Semicolon Insertion (ASI).
* C) It throws a SyntaxError because the opening curly brace is on a new line.
* D) It throws a ReferenceError because `status` is not defined.

---

### Section 2: Basic Debugging

#### 6. What will be the output in the console after running the following calls?
```javascript
console.count();
console.count("auth");
console.count();
console.count("auth");
```
* A) `default: 1`, `auth: 1`, `default: 2`, `auth: 2`
* B) `1`, `1`, `2`, `2`
* C) `default: 1`, `auth: 1`, `default: 1`, `auth: 1`
* D) `undefined: 1`, `auth: 1`, `undefined: 2`, `auth: 2`

#### 7. If you set a conditional breakpoint in Chrome/Brave DevTools with the condition `x === 5`, what will happen when execution reaches that line and `x` is currently `undefined`?
* A) The debugger will pause because `undefined` is falsy.
* B) The debugger will throw a ReferenceError in the console and block script execution.
* C) The debugger will ignore the breakpoint and continue execution without pausing.
* D) The debugger will automatically pause and highlight the variable `x` in red.

#### 8. What is the output of the following statement in a browser environment?
```javascript
console.assert(1 === "1", "Values are not strictly equal");
```
* A) It returns `false` silently.
* B) It throws a TypeError: Assertion failed.
* C) It logs `"Values are not strictly equal"` as an assertion failure / error message.
* D) Nothing is logged because assertions are only validated in production.

#### 9. What will the following code block output to the console?
```javascript
try {
  let result = data + 10;
} catch (error) {
  console.log(error.name);
}
```
Assume `data` is never declared.
* A) `"ReferenceError"`
* B) `"TypeError"`
* C) `"data is not defined"`
* D) `"SyntaxError"`

#### 10. Which of the following DevTools breakpoint types is best suited to pause execution the moment a script initiates an HTTP network request to an API endpoint?
* A) DOM Breakpoints
* B) Event Listener Breakpoints (click)
* C) XHR/fetch Breakpoints
* D) CSP Violation Breakpoints

---

### Section 3: Variables and Data Types

#### 11. What will be logged to the console?
```javascript
let x;
console.log(typeof typeof x);
```
* A) `"undefined"`
* B) `"string"`
* C) `"object"`
* D) A ReferenceError is thrown because `x` has no value.

#### 12. What happens when the following math operation is executed?
```javascript
const value1 = 10n;
const value2 = 5;
const result = value1 + value2;
console.log(result);
```
* A) It logs `15n`.
* B) It logs `15`.
* C) It throws a TypeError: Cannot mix BigInt and other types.
* D) It coerces `value1` to a number and logs `15`.

#### 13. What is the value of `obj.type` after this code runs?
```javascript
const obj = {};
const sym = Symbol("type");

obj[sym] = "admin";
obj["type"] = "user";

console.log(obj[Symbol("type")], obj["type"]);
```
* A) `"admin" "user"`
* B) `undefined "user"`
* C) `"admin" "admin"`
* D) `undefined undefined`

#### 14. What will be logged to the console?
```javascript
const word = "hello";
word.mode = "standard";
console.log(word.mode);
```
Assume non-strict mode.
* A) `"standard"`
* B) `undefined`
* C) A TypeError is thrown.
* D) `"hello"`

#### 15. Look at this code snippet. What is logged to the console?
```javascript
const config = { port: 8080 };
config.port = 9000;
config.host = "localhost";

console.log(config.port, config.host);
```
* A) A TypeError is thrown on the second line because `config` is declared with `const`.
* B) `8080 undefined`
* C) `9000 "localhost"`
* D) A SyntaxError is thrown because properties cannot be added to a const object.

---

### Section 4: Basic Operators

#### 16. What is the output of the following checks?
```javascript
const score = 0;
const username = "";

const val1 = score ?? 10;
const val2 = score || 10;
const val3 = username ?? "Guest";
const val4 = username || "Guest";

console.log(val1, val2, val3, val4);
```
* A) `10 10 "Guest" "Guest"`
* B) `0 10 "" "Guest"`
* C) `0 0 "" ""`
* D) `10 0 "Guest" ""`

#### 17. Which of the statements below evaluates to `true`?
```javascript
const test1 = (NaN === NaN);
const test2 = (NaN == NaN);
const test3 = Object.is(NaN, NaN);

console.log(test1, test2, test3);
```
* A) Only `test1` is true.
* B) Only `test2` is true.
* C) Only `test3` is true.
* D) All of them are true.

#### 18. What is the result of evaluating these string comparisons?
```javascript
console.log("2" > "12", "apple" > "banana");
```
* A) `false true`
* B) `true false`
* C) `false false`
* D) `true true`

#### 19. What is logged when the following expression executes?
```javascript
console.log(~~4.9, ~~-4.9);
```
* A) `4 -4`
* B) `5 -5`
* C) `4 -5`
* D) `5 -4`

#### 20. What is the value of `result` after running the code below?
```javascript
let val = 5;
const result = (val += 2, val * 3);
console.log(result);
```
* A) `15`
* B) `21`
* C) `7`
* D) A SyntaxError is thrown because commas are invalid in variable assignment.

---

### Section 5: Working with Arrays and Objects

#### 21. What is the output of the following operations?
```javascript
const values = Array(3);
console.log(values.length, 0 in values);
```
* A) `3 true`
* B) `3 false`
* C) `0 false`
* D) A TypeError is thrown.

#### 22. What happens when this code is executed in non-strict mode?
```javascript
const item = { id: 101 };
Object.seal(item);

item.id = 202;
item.category = "books";
delete item.id;

console.log(item.id, item.category);
```
* A) `101 undefined`
* B) `202 undefined`
* C) `202 "books"`
* D) A TypeError is thrown.

#### 23. What will be logged to the console?
```javascript
const list = [1, 2, NaN, 4];
console.log(list.indexOf(NaN), list.includes(NaN));
```
* A) `-1 true`
* B) `2 true`
* C) `2 false`
* D) `-1 false`

#### 24. What is the final state of the `points` array?
```javascript
const points = [40, 100, 1, 5, 25];
points.sort();
console.log(points[0]);
```
* A) `1`
* B) `40`
* C) `100`
* D) `5`

#### 25. What is logged to the console when the following code runs?
```javascript
const settings = {};
Object.defineProperty(settings, "theme", {
  value: "dark"
});

console.log(settings.theme, Object.keys(settings).length);
```
* A) `"dark" 1`
* B) `undefined 0`
* C) `"dark" 0`
* D) A TypeError is thrown because `defineProperty` requires `writable: true` or `enumerable: true` to be set.

---

### Section 6: Control Structures

#### 26. What will be logged to the console?
```javascript
let count = 0;

outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) {
      continue outerLoop;
    }
    count++;
  }
}

console.log(count);
```
* A) `9`
* B) `3`
* C) `6`
* D) `1`

#### 27. What is the output of the following switch structure?
```javascript
const val = "5";

switch (true) {
  case val == 5:
    console.log("Match 1");
  case val === 5:
    console.log("Match 2");
    break;
  default:
    console.log("No Match");
}
```
* A) `"Match 1"`
* B) `"Match 1"` and then `"Match 2"`
* C) `"No Match"`
* D) A SyntaxError is thrown because you cannot pass `true` to a switch statement.

#### 28. What is logged when this loop finishes execution?
```javascript
let sum = 0;
for (let i = 0, j = 5; i < 3 && j > 1; i++, j--) {
  sum += i * j;
}
console.log(sum);
```
* A) `11`
* B) `6`
* C) `8`
* D) `10`

#### 29. What is the output of the following code snippet?
```javascript
const flag = "" && "Hello";
if (flag) {
  console.log("A");
} else {
  console.log("B:", typeof flag);
}
```
* A) `"A"`
* B) `"B: string"`
* C) `"B: boolean"`
* D) `"B: undefined"`

#### 30. What will happen when running this loop?
```javascript
for (const i = 0; i < 3; i++) {
  console.log(i);
}
```
* A) It logs `0, 1, 2`.
* B) It logs `0` once and then throws a TypeError.
* C) It throws a SyntaxError immediately.
* D) It runs as an infinite loop of `0`s.

---

### Section 7: Functions

#### 31. What is the value of the global variable `x` after this code runs?
```javascript
let x = 10;
const update = (x) => {
  x = 20;
};
update();
console.log(x);
```
* A) `10`
* B) `20`
* C) `undefined`
* D) A ReferenceError is thrown.

#### 32. What is logged to the console?
```javascript
(function() {
  var val1 = val2 = 50;
})();

console.log(typeof val1, typeof val2);
```
Assume non-strict mode.
* A) `"undefined" "undefined"`
* B) `"number" "number"`
* C) `"undefined" "number"`
* D) `"number" "undefined"`

#### 33. What is the output of the logs?
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
* A) `17`
* B) `27`
* C) `NaN`
* D) A ReferenceError is thrown.

#### 34. What is the value of `process.length`?
```javascript
function process(a, b = 2, c) {}
console.log(process.length);
```
* A) `3`
* B) `2`
* C) `1`
* D) `0`

#### 35. What is logged to the console?
```javascript
function outer(x) {
  return function(y) {
    return x * y;
  };
}
console.log(outer(3)(4));
```
* A) `12`
* B) `undefined`
* C) `NaN`
* D) A TypeError is thrown.

---

## Answer Key & Detailed Explanations

### Section 1: Introduction to JavaScript
1. **B**  
   *Explanation*: If scripts are loaded with `defer`, they are executed in order after the document has been parsed. However, scripts are compiled independently. If the first script has a syntax error (`const x = ;`), it fails compiling, but the browser continues and executes the second script which is error-free.
2. **C**  
   *Explanation*: `"use strict"` is scoped only to the block/script tag in which it is defined. The first script runs in strict mode and throws a ReferenceError when attempting to assign a value to the undeclared variable `x`. The second script runs in non-strict mode, allowing `y` to become a global property, and successfully logs `20`.
3. **B**  
   *Explanation*: The HTML parser reads the script tag from top to bottom. It does not look at JavaScript string literals. The moment it sees `</script>` inside the string, it thinks the script block is finished. The remaining `"; console.log(scriptContent); </script>` is treated as plain HTML text, resulting in incomplete code inside the script tag and causing a SyntaxError.
4. **C**  
   *Explanation*: In strict mode, legacy octal literals prefixed with `0` (like `017`) are explicitly forbidden and throw a SyntaxError. To write an octal number in modern JavaScript, the `0o` prefix must be used (e.g., `0o17`).
5. **B**  
   *Explanation*: Automatic Semicolon Insertion (ASI) automatically inserts a semicolon immediately after the `return` keyword because it is on its own line. As a result, the function returns `undefined`, and the object literal on the lines below is treated as a detached block statement.

### Section 2: Basic Debugging
6. **A**  
   *Explanation*: `console.count()` keeps track of count states per unique label. If no label is passed, it uses `"default"` as the label. Thus, `console.count()` logs `"default: 1"` and `"default: 2"`, while `console.count("auth")` logs `"auth: 1"` and `"auth: 2"`.
7. **C**  
   *Explanation*: A conditional breakpoint will only trigger a pause if its evaluation is truthy. Since `x === 5` evaluates to `false` when `x` is `undefined`, the debugger ignores it and doesn't pause.
8. **C**  
   *Explanation*: `console.assert(expression, message)` writes an error level message to the console *only* if the first argument evaluates to false. Since `1 === "1"` is false (strict inequality), it logs `"Assertion failed: Values are not strictly equal"`.
9. **A**  
   *Explanation*: Since `data` is not declared, attempting to read its value to perform addition (`data + 10`) throws a `ReferenceError`. The catch block intercepts it, and `error.name` returns the string `"ReferenceError"`.
10. **C**  
    *Explanation*: XHR/fetch breakpoints in DevTools are specifically designed to pause execution whenever the script invokes network requests via `fetch` or `XMLHttpRequest`.

### Section 3: Variables and Data Types
11. **B**  
    *Explanation*: `typeof x` returns the string `"undefined"`. Running `typeof` again on the string `"undefined"` returns `"string"`.
12. **C**  
    *Explanation*: JavaScript does not allow implicit coercion between `BigInt` and standard `Number` types in arithmetic operations. Mixing them in addition (`value1 + value2`) throws a `TypeError`.
13. **B**  
    *Explanation*: Each invocation of `Symbol("type")` creates a completely unique Symbol reference. Therefore, `Symbol("type") !== Symbol("type")`. The property lookup `obj[Symbol("type")]` attempts to read a property using a new symbol key that was never defined, returning `undefined`. The string key `"type"` is separate, returning `"user"`.
14. **B**  
    *Explanation*: In non-strict mode, setting properties on primitive values (like the string `word`) causes JavaScript to temporarily wrap the primitive in an object wrapper, assign the property, and then immediately discard that wrapper. The property does not persist, so accessing it returns `undefined`.
15. **C**  
    *Explanation*: Variables declared with `const` cannot be reassigned (e.g. `config = {}` would error). However, the value of a `const` variable referencing an object can still have its internal properties modified, added, or deleted.

### Section 4: Basic Operators
16. **B**  
    *Explanation*: The nullish coalescing operator (`??`) fallback only triggers if the left side is `null` or `undefined`. The logical OR (`||`) fallback triggers for any falsy value (including `0` and `""`).
    - `0 ?? 10` is `0`
    - `0 || 10` is `10`
    - `"" ?? "Guest"` is `""`
    - `"" || "Guest"` is `"Guest"`
17. **C**  
    *Explanation*: `NaN` is unique because it is not equal to itself under either loose (`==`) or strict (`===`) equality. However, `Object.is(NaN, NaN)` evaluates to `true`.
18. **B**  
    *Explanation*: String comparison is performed lexicographically (character-by-character based on UTF-16 code units).
    - For `"2" > "12"`, the first character `"2"` is compared to `"1"`. Since `"2"` is greater than `"1"`, this evaluates to `true`.
    - For `"apple" > "banana"`, `"a"` is compared to `"b"`. Since `"a"` comes before `"b"`, it evaluates to `false`.
19. **A**  
    *Explanation*: The double bitwise NOT operator (`~~`) truncates the fractional part of a number, effectively performing a 32-bit integer truncation (similar to `Math.trunc`). Thus, `~~4.9` becomes `4`, and `~~-4.9` becomes `-4`.
20. **B**  
    *Explanation*: The comma operator evaluates all operands from left to right, returning the result of the last operand. First, `val += 2` updates `val` to `7`. Then, `val * 3` evaluates to `21`, which is returned and assigned to `result`.

### Section 5: Working with Arrays and Objects
21. **B**  
    *Explanation*: `Array(3)` creates a sparse array with a length of 3 and empty slots, but does not define any indices on the array object itself. The `in` operator checks if an index key exists. Since no index keys exist, `0 in values` returns `false`.
22. **B**  
    *Explanation*: `Object.seal()` prevents new properties from being added to an object and prevents existing properties from being deleted. It still allows modifying existing writable properties. Therefore, `item.id = 202` succeeds, adding `item.category` fails silently (or throws in strict mode), and deleting `item.id` fails silently.
23. **A**  
    *Explanation*: `indexOf` uses strict equality (`===`) internally. Since `NaN === NaN` is false, `indexOf` cannot locate `NaN` and returns `-1`. The `includes` method uses `SameValueZero` comparison, which successfully identifies `NaN` and returns `true`.
24. **A**  
    *Explanation*: By default, `Array.prototype.sort()` sorts elements alphabetically as strings. The elements are coerced to strings, yielding `["1", "100", "25", "40", "5"]`. Sorted alphabetically, `"1"` comes first, followed by `"100"`.
25. **C**  
    *Explanation*: When a property is defined using `Object.defnProperty`, its descriptors (`writable`, `enumerable`, `configurable`) default to `false` unless explicitly defined. Since `enumerable` is false, `Object.keys()` ignores the property, returning a length of `0`. The property value `"dark"` is still readable.

### Section 6: Control Structures
26. **B**  
    *Explanation*: When `j === 1`, the statement `continue outerLoop` immediately stops the current iteration of the inner loop and jumps to the next iteration of the outer loop (`i`).
    - `i = 0`: `j = 0` (count = 1), `j = 1` (continues `outerLoop`)
    - `i = 1`: `j = 0` (count = 2), `j = 1` (continues `outerLoop`)
    - `i = 2`: `j = 0` (count = 3), `j = 1` (continues `outerLoop`)
    Total count is `3`.
27. **B**  
    *Explanation*: In a `switch(true)` statement, the value of each case expression is compared to `true` using strict equality (`===`).
    - The expression `val == 5` is `true` because `"5" == 5` coerces to true.
    - Since `true === true`, the case matches.
    - Because there is no `break` statement at the end of the first case block, execution falls through to the next case, logging `"Match 2"` as well.
28. **D**  
```javascript
for (let i = 0, j = 5; i < 3 && j > 1; i++, j--) {
  sum += i * j;
}
```
    *Explanation*: The loop runs while `i < 3` and `j > 1`:
    - Iteration 1: `i = 0, j = 5`. `sum += 0 * 5 = 0`. Increments: `i` becomes `1`, `j` becomes `4`.
    - Iteration 2: `i = 1, j = 4`. `sum += 1 * 4 = 4`. Increments: `i` becomes `2`, `j` becomes `3`.
    - Iteration 3: `i = 2, j = 3`. `sum += 2 * 3 = 6`. Increments: `i` becomes `3`, `j` becomes `2`.
    - Loop terminates because `i < 3` (`3 < 3`) is false.
    Total sum = 10.
29. **B**  
   *Explanation*: The logical AND operator (`&&`) short-circuits on falsy values. Since the left side is `""` (falsy), it immediately returns `""`. Therefore, `flag` is the empty string `""`. In the `if` block, `flag` evaluates to falsy, so it executes the `else` block, printing `"B: string"`.
30. **B**  
   *Explanation*: In a standard `for` loop, the update expression (`i++`) executes at the end of each iteration. Because `i` is declared as a `const`, attempting to reassign its value during `i++` throws a `TypeError`.

### Section 7: Functions
31. **A**  
   *Explanation*: The parameter `x` in the function definition shadows the outer variable `x`. Since no arguments are passed to `update()`, the local parameter `x` is initialized to `undefined`. Inside the function, `x = 20` assigns `20` to this local parameter, leaving the outer global `x` unmodified at `10`.
32. **C**  
   *Explanation*: The assignment statement `val1 = val2 = 50` is evaluated from right to left as `val2 = 50` and then `var val1 = val2`. In non-strict mode, assigning a value to the undeclared variable `val2` implicitly defines it as a global property. However, `val1` is explicitly declared using `var` and is scoped locally to the function. Outside the function, `val1` is undefined (its type is `"undefined"`), while `val2` is a global number.
33. **A**  
   *Explanation*: The variable `base` is declared using `let base = 10;` inside the scope of the `makeAdder` function. The outer `base = 20` creates/assigns a global variable named `base`, which is completely separate. The inner closure still references the inner `base` scope variable, which remains `10`. Thus, `addFive(2)` returns `10 + 5 + 2 = 17`.
34. **C**  
   *Explanation*: The `.length` property of a function object returns its arity (the number of expected parameters). It only counts parameters up to, but not including, the first parameter that has a default value. In this function, `b` has a default value, so only `a` is counted, giving a value of `1`.
35. **A**  
   *Explanation*: The function `outer(3)` returns a function that has captured the value of `x` (`3`) via closure. Calling that returned function with argument `4` returns `3 * 4`, which evaluates to `12`.
