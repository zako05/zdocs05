# JavaScript Level 1 (Junior Developer) Complete Study Guide

This study guide compiles the core theories, specifications, code examples, and gotchas from [JavaScript.info](https://javascript.info/) and the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript) into a single, unified reference. It is structured to align directly with the 7 syllabus sections of the **JavaScript Level 1 / Junior Developer Certification**.

---

## Table of Contents
1. [Syllabus Topic 1: Introduction to JavaScript](#1-introduction-to-javascript)
2. [Syllabus Topic 2: Basic Debugging](#2-basic-debugging)
3. [Syllabus Topic 3: Variables and Data Types](#3-variables-and-data-types)
4. [Syllabus Topic 4: Basic Operators](#4-basic-operators)
5. [Syllabus Topic 5: Working with Arrays and Objects](#5-working-with-arrays-and-objects)
6. [Syllabus Topic 6: Control Structures](#6-control-structures)
7. [Syllabus Topic 7: Functions](#7-functions)

---

## 1. Introduction to JavaScript

### What is JavaScript?
JavaScript (JS) is a lightweight, interpreted (or just-in-time compiled) programming language with first-class functions. While it is best known as the scripting language for web pages, many non-browser environments also use it (e.g., Node.js).

### The Web Triad
1. **HTML (Structure):** Defines the content and layout.
2. **CSS (Presentation):** Controls the styling, design, and layout.
3. **JavaScript (Behavior):** Adds interactivity, handles data, and controls logic dynamically.

### Script Integration: The `<script>` Tag
JavaScript code is embedded in or linked to HTML using the `<script>` tag.

#### Internal vs External Scripts
* **Internal Script:**
  ```html
  <script>
    console.log("Running inline JavaScript!");
  </script>
  ```
* **External Script:**
  ```html
  <script src="app.js"></script>
  ```

> [!WARNING]
> **The `src` attribute overwrite rule:**
> If a `<script>` tag contains a `src` attribute, the browser downloads the external file and **ignores** any inline code written inside the tag.
> ```html
> <!-- WRONG: The console.log statement will NEVER run -->
> <script src="app.js">
>   console.log("This will be ignored!");
> </script>
> ```

#### Script Placement and Parser Blocking
By default, scripts are **parser-blocking**. When the HTML parser encounters a synchronous `<script>` tag:
1. It pauses building the Document Object Model (DOM).
2. It fetches the script from the network (if external).
3. It executes the script.
4. Only after execution completes does it resume parsing the HTML below the script.

```html
<body>
  <p id="first">This paragraph renders immediately.</p>
  <script src="heavy-script.js"></script>
  <p id="second">This rendering is delayed until the script completes.</p>
</body>
```

#### Async vs Defer (HTML5 Script Attributes)
To prevent parser blocking, modern HTML5 scripts use `async` or `defer`:
* **`defer` (Deferred execution):** The browser downloads the script in the background without blocking HTML parsing. The script executes only *after* the HTML document has been fully parsed, in the exact order of appearance.
* **`async` (Asynchronous execution):** The browser downloads the script in the background. As soon as download completes, it pauses HTML parsing to execute the script immediately. Order of appearance is **not** guaranteed.

---

### Code Structure & Syntax Rules

#### Semicolons & Automatic Semicolon Insertion (ASI)
In most cases, JavaScript allows you to omit semicolons by inserting them automatically behind the scenes (ASI). However, relying on ASI can lead to silent errors.

* **ASI Failure Example:**
  ```javascript
  // Intended: two statements
  let user = "Alice"
  [1, 2, 3].forEach(x => console.log(x))
  
  // How JS engine parses it:
  let user = "Alice"[1, 2, 3].forEach(x => console.log(x))
  // Throws TypeError: Cannot read properties of undefined
  ```
* **Rule:** Always write explicit semicolons `;` at the end of statements.

#### Comment Rules
* **Single-line:** Starts with `//`. Everything after it on the same line is ignored.
* **Multi-line:** Starts with `/*` and ends with `*/`.
* **Legacy Single-line Comments (Annex B):** For historical compatibility, browsers treat `<!--` as a single-line comment. `-->` also behaves as a single-line comment if it is the first non-whitespace token on a line.

> [!CAUTION]
> **No Nested Multi-line Comments:**
> ```javascript
> /*
>   let x = 10;
>   /* Inner comment */
>   let y = 20; // This line is executed because the preceding '*/' closed the entire comment block!
> */ // SyntaxError: Unexpected token '*/'
> ```

---

### Sources & Further Reading (Topic 1)
* **JavaScript.info:**
  * [An Introduction to JavaScript](https://javascript.info/intro)
  * [Hello, world! (linking scripts)](https://javascript.info/hello-world)
  * [Code structure (semicolons, comments)](https://javascript.info/structure)
* **MDN Web Docs:**
  * [What is JavaScript?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript)
  * [The HTML `<script>` Element reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)
  * [A first splash into JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash)

---

## 2. Basic Debugging

### The Browser Developer Tools
Every modern browser includes Developer Tools (F12, or `Cmd + Option + I` on Mac). The **Console** tab is used to view logs, inspect objects, and execute expressions on the fly.

### Logging Methods of the `console` Object
* **`console.log()`**: General logging of values, strings, variables, or objects.
* **`console.error()`**: Logs message in red with a stack trace indicating an error.
* **`console.warn()`**: Logs message in yellow with a warning icon.
* **`console.dir()`**: Displays an interactive list of the properties of a specified JavaScript object. Excellent for inspecting DOM elements as raw JS objects rather than HTML elements.
* **`console.trace()`**: Outputs a stack trace showing the nested function calls that led to the current point of execution.

#### 🕵️ Quirky console Gotcha: Lazy Evaluation of Objects
When you log a mutable object or array using `console.log(obj)`, browsers do **not** take a snapshot of the object at that exact moment. They evaluate the object **lazily** when you click the arrow icon to expand it in the developer console.

```javascript
const list = [1, 2, 3];
console.log(list); // Collapsed view shows [1, 2, 3] in some consoles
list.push(4);
// If you expand the log, it will show [1, 2, 3, 4]!
```

---

### The `debugger;` Statement
The `debugger;` statement acts as a code breakpoint. 
* **If DevTools is open:** Execution pauses at the statement, allowing you to inspect variables, step over lines, and trace the call stack.
* **If DevTools is closed:** The statement is ignored and has no impact on execution.

---

### Understanding Core JS Error Types

When your script fails, the JS engine throws specific error types:
1. **`ReferenceError`:** Occurs when you attempt to access a variable that has not been declared (or has not yet been initialized due to the Temporal Dead Zone).
   ```javascript
   console.log(nonExistentVar); // ReferenceError: nonExistentVar is not defined
   ```
2. **`TypeError`:** Occurs when a value is not of the expected type, or when you attempt to perform an operation on an incompatible type (e.g. executing a non-function, or reassigning a `const`).
   ```javascript
   const pi = 3.14;
   pi = 3; // TypeError: Assignment to constant variable
   
   let obj = null;
   obj.name; // TypeError: Cannot read properties of null
   ```
3. **`SyntaxError`:** Occurs when the engine parses code that violates the grammar rules of JavaScript. Syntactic errors are caught *before* code execution starts.
   ```javascript
   let x = ; // SyntaxError: Unexpected token ';'
   ```

---

### Sources & Further Reading (Topic 2)
* **JavaScript.info:**
  * [Developer console](https://javascript.info/devtools)
* **MDN Web Docs:**
  * [What went wrong? Troubleshooting JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong)
  * [The `console` Web API reference](https://developer.mozilla.org/en-US/docs/Web/API/console)
  * [The `debugger` statement reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger)
  * [ReferenceError reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError)
  * [TypeError reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  * [SyntaxError reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)

---

## 3. Variables and Data Types

### Variable Declarations: `let`, `const`, and `var`

JavaScript has three ways to declare variables:

| Feature | `var` | `let` | `const` |
| :--- | :--- | :--- | :--- |
| **Scope** | Function Scoped | Block Scoped | Block Scoped |
| **Hoisting** | Hoisted, initialized as `undefined` | Hoisted, uninitialized (TDZ) | Hoisted, uninitialized (TDZ) |
| **Reassignable** | Yes | Yes | No |
| **Re-declarable** | Yes | No | No |

#### Scoping Rules
* **Block Scope:** The variable is accessible only within the nearest curly braces `{ ... }` (e.g., inside an `if` statement, `for` loop, or plain block).
* **Function Scope:** The variable is accessible anywhere within the function it is defined in, regardless of block nests.
* **Global Scope:** Declared outside any function/block.

> [!CAUTION]
> **Undeclared Variables (Implicit Globals):**
> If you assign a value to a variable without declaring it first via `var`, `let`, or `const`:
> * In **non-strict mode**, it automatically creates an implicit global variable (attached to the global `window` or `globalThis` object), even if assigned inside a local function.
> * In **strict mode** (`"use strict"`), it throws a `ReferenceError`.


#### Variable Shadowing
A variable declared inside a nested scope with the same name as a variable in the outer scope "shadows" the outer variable.

```javascript
let x = 10;
if (true) {
  let x = 20; // Shadows the outer x
  console.log(x); // Logs 20
}
console.log(x); // Logs 10
```

---

### Hoisting and the Temporal Dead Zone (TDZ)
* **Hoisting** is the JS engine's behavior of moving declarations to the top of their current scope during the compile phase.

#### `var` Hoisting
```javascript
console.log(name); // Logs undefined (variable exists, but assignment hasn't run)
var name = "Alice";
```

#### `let`/`const` Hoisting and the TDZ
`let` and `const` variables are hoisted but remain **uninitialized**. The period between the start of the block scope and the line where the variable is declared is called the **Temporal Dead Zone (TDZ)**. Accessing the variable in this zone throws a `ReferenceError`.

```javascript
let val = 10;
if (true) {
  console.log(val); // Throws ReferenceError: Cannot access 'val' before initialization
  let val = 20; // TDZ ends here
}
```

---

### In-Memory Behavior: Primitives vs Reference Types

#### Primitives (Pass-by-value)
Primitives (Strings, Numbers, Booleans, etc.) store values directly in memory. When copied or passed to functions, they are copied **by value**.
```javascript
let x = 5;
let y = x; // Copy of value 5 is created
y = 10;
console.log(x); // Remains 5
```

#### Reference Types (Pass-by-reference / Call-by-sharing)
Objects, arrays, and functions store a reference (memory address) to their data. When copied or passed, the reference is copied, not the data itself.
```javascript
let a = { score: 10 };
let b = a; // Reference is copied, both point to the same object
b.score = 20;
console.log(a.score); // Logs 20
```

---

### The 8 Data Types in JavaScript

JavaScript is dynamically typed (variables can hold any data type over time). There are 7 primitive types and 1 reference type:

1. **Number:** Represents integer and floating-point numbers. Includes special values like `Infinity`, `-Infinity`, and `NaN` (Not-a-Number).
2. **BigInt:** Represents integers of arbitrary length. Created by appending `n` to an integer (`10n`).
3. **String:** Represents text. Strings can be written in double quotes (`"`), single quotes (`'`), or backticks (`` ` ``).
4. **Boolean:** `true` or `false`.
5. **null:** Represents an intentional absence of any object value.
6. **undefined:** Represents a declared variable that has not been assigned a value.
7. **Symbol:** Unique, immutable identifier (Level 2 concept).
8. **Object:** A collection of key-value pairs (Reference type). Includes arrays and functions.

---

### The `typeof` Operator
The `typeof` operator returns a string indicating the type of the evaluated operand.

```javascript
typeof 42;             // "number"
typeof "hello";        // "string"
typeof true;           // "boolean"
typeof undefined;      // "undefined"
typeof 10n;            // "bigint"
typeof Symbol();       // "symbol"
typeof function() {};  // "function" (a sub-category of object)
```

> [!IMPORTANT]
> **Crucial `typeof` and Special Value Gotchas:**
> * **`typeof null` evaluates to `"object"`**. This is a legacy bug in JavaScript that cannot be fixed because it would break existing web compatibility.
> * **`typeof NaN` evaluates to `"number"`**. Although NaN stands for "Not-a-Number", it is technically a member of the numeric data type.
> * **`typeof []` (arrays) evaluates to `"object"`**. Arrays are objects in JavaScript.
> * **`NaN` is self-unequal**: `NaN` is the only value in JavaScript that is not equal to itself. Both `NaN == NaN` and `NaN === NaN` evaluate to `false`. To check if a value is `NaN`, you must use `isNaN(value)` or `Number.isNaN(value)`.


---

### String Immutability and Methods

#### Immutability Rule
Strings cannot be altered character-by-character. Assigning to indices has no effect (and throws an error in strict mode).

```javascript
let str = "hello";
str[0] = "H"; // Silently fails
console.log(str); // Logs "hello"
```

#### Common String Methods (Non-Mutating)
All string methods return a **new string** or value. They never modify the original variable.

* **`.length`:** Property that returns character count (includes whitespace).
* **`.toUpperCase()` / `.toLowerCase()`:** Returns converted text.
* **`.indexOf(substring)`:** Returns index of first match, or `-1` if not found.
* **`.includes(substring)`:** Returns boolean `true`/`false`.
* **`.slice(start, end)`:** Extracts section of string from `start` up to (but not including) `end`.
  ```javascript
  let str = "JavaScript";
  let part = str.slice(0, 4); // "Java"
  ```

---

### Sources & Further Reading (Topic 3)
* **JavaScript.info:**
  * [Variables (`let`, `const`, `var`)](https://javascript.info/variables)
  * [Data Types](https://javascript.info/types)
  * [Methods of primitives](https://javascript.info/primitives-methods)
  * [Strings guide & methods](https://javascript.info/string)
* **MDN Web Docs:**
  * [Storing the information you need — Variables](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)
  * [JavaScript data types and structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
  * [MDN `var` statement reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
  * [MDN `let` statement reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
  * [MDN `const` statement reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
  * [MDN `typeof` operator reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
  * [MDN `String` global object reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

---

## 4. Basic Operators

### Arithmetic Operators
* Addition (`+`), Subtraction (`-`), Multiplication (`*`), Division (`/`)
* Modulo (`%`): Returns the remainder of division (`17 % 5` is `2`).
* Exponentiation (`**`): Raises the first operand to the power of the second (`2 ** 3` is `8`).
* Increment/Decrement (`++`, `--`):
  * **Postfix (`x++` / `x--`):** Returns original value, *then* increments/decrements.
  * **Prefix (`++x` / `--x`):** Increments/decrements, *then* returns new value.
  ```javascript
  let a = 5;
  let b = a++; // b = 5, a becomes 6
  let c = ++a; // a becomes 7, c = 7
  ```

---

### Implicit Type Coercion Rules
JavaScript automatically converts data types behind the scenes under certain conditions.

#### The Dual Nature of the `+` Operator
* If **either** operand is a string, `+` acts as **string concatenation**.
* All other arithmetic operators (`-`, `*`, `/`, `%`, `**`) only work on numbers. They always perform **numeric coercion**.

```javascript
console.log("5" + 2);   // "52" (Concatenation)
console.log("5" - 2);   // 3 (Numeric coercion of "5" to 5)
console.log(5 + "2" - 1); // "52" - 1 -> 51
console.log("5" + + "2"); // +"2" is unary conversion to number -> 5 + 2 -> 7
```

---

### Comparison Operators: Loose vs Strict Equality

#### Strict Equality (`===` / `!==`)
Compares both **value** and **type**. Does not perform type coercion. If types differ, it returns `false`.
```javascript
5 === "5"; // false
```

#### Loose Equality (`==` / `!=`)
Performs implicit type coercion to convert operands to a common type before comparing.
```javascript
5 == "5"; // true (string "5" is coerced to number 5)
false == 0; // true (false is coerced to 0)
"" == 0;    // true (empty string is coerced to 0)
```

#### Comparison of Reference Types
When comparing objects, arrays, or functions using `==` or `===`, JavaScript compares their **memory addresses (references)**, not their internal properties.
* Two distinct objects or arrays are **never** equal, even if they have the exact same contents.
```javascript
const arr1 = [];
const arr2 = [];
console.log(arr1 === arr2); // false (points to different memory locations)

const obj1 = { val: 10 };
const obj2 = obj1; // Reference copy
console.log(obj1 === obj2); // true (points to the same memory location)
```


#### ⚖️ The Strict Equality Law of `null` and `undefined`
* Loose Equality: `null == undefined` is `true`.
* Strict Equality: `null === undefined` is `false`.
* **Important:** Under loose equality, `null` and `undefined` **do not** coerce to other falsy types (like `0`, `""`, or `false`).
  ```javascript
  null == 0;          // false
  undefined == false; // false
  ```

---

### Logical Operators and Short-Circuiting

Logical operators evaluate from left to right and return the value of the **last evaluated operand**, not necessarily a boolean.

#### Logical OR (`||`)
Returns the first **truthy** operand it encounters. If all are falsy, returns the last operand.
```javascript
let username = "" || "Guest"; // "Guest"
let value = 0 || null || undefined; // undefined
```

#### Logical AND (`&&`)
Returns the first **falsy** operand it encounters. If all are truthy, returns the last operand.
```javascript
let result = "Alice" && "Bob"; // "Bob"
let value = "User" && 0 && "Admin"; // 0
```

#### Logical NOT (`!`) & Double NOT (`!!`)
* `!` converts operand to boolean, then negates it. Always returns a boolean.
* `!!` converts a value to its boolean equivalent.
  ```javascript
  !!"Hello"; // true
  !!0;       // false
  ```

---

### Operator Precedence
Precedence determines the order in which operators are evaluated. Higher precedence operators run first.

| Precedence Rank | Operator Type | Symbols |
| :--- | :--- | :--- |
| **1 (Highest)** | Member Access / Grouping | `( )`, `[ ]`, `.` |
| **2** | Postfix Increment/Decrement | `x++`, `x--` |
| **3** | Unary / Prefix Operators / `typeof` | `++x`, `--x`, `!`, `+x`, `-x`, `typeof` |
| **4** | Exponentiation | `**` |
| **5** | Multiplication / Division / Modulo | `*`, `/`, `%` |
| **6** | Addition / Subtraction | `+`, `-` |
| **7** | Relational Comparisons | `<`, `<=`, `>`, `>=` |
| **8** | Equality Comparisons | `==`, `===`, `!=`, `!==` |
| **9** | Logical AND | `&&` |
| **10** | Logical OR | `||` |
| **11 (Lowest)** | Assignment Operators | `=`, `+=`, `-=`, etc. |

---

### Sources & Further Reading (Topic 4)
* **JavaScript.info:**
  * [Basic operators, maths](https://javascript.info/operators)
  * [Comparisons](https://javascript.info/comparison)
  * [Logical operators](https://javascript.info/logical-operators)
* **MDN Web Docs:**
  * [Basic math in JavaScript — numbers and operators](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math)
  * [Expressions and operators reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)
  * [Operator precedence table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table)

---

## 5. Working with Arrays and Objects

### Objects: The Basics

An object is an unordered collection of properties represented as key-value pairs.

#### Creation and Access
```javascript
const user = {
  name: "Alice",
  "home address": "123 Main St"
};

// Accessing properties:
console.log(user.name); // Dot notation: "Alice"
console.log(user["home address"]); // Bracket notation (required for invalid identifiers/spaces)
```

#### Property Manipulation
* **Add/Modify:** `user.age = 25;`
* **Delete:** `delete user.age;`
* **Check Existence (`in` operator):** `"name" in user` returns `true`.

#### 🕵️ Quirky Gotcha: Object Key String Coercion
Object property keys are always **strings** (or symbols). If you pass an object as a property key, JavaScript implicitly converts it to the string `"[object Object]"`.

```javascript
const obj = {};
const key1 = { id: 1 };
const key2 = { id: 2 };

obj[key1] = "Alpha"; // obj["[object Object]"] = "Alpha"
obj[key2] = "Beta";  // obj["[object Object]"] = "Beta" (Overwrites key1!)

console.log(obj[key1]); // Logs "Beta"
```

---

### Arrays: Ordered Collections

Arrays are list-like objects that use zero-based index keys.

#### Sparse Arrays
You can assign an element to any index, even beyond current bounds. The array size grows automatically. Intermediate slots are initialized as empty holes that return `undefined`.

```javascript
const arr = [1, 2];
arr[4] = 5;
console.log(arr.length); // 5
console.log(arr[2]);    // undefined
```

#### The Writable `length` Property
In JavaScript, the `.length` property of an array is **writable**. Modifying it directly changes the array structure:
* **Truncating:** Reducing `length` deletes elements beyond the new length.
* **Clearing:** Setting `length = 0` completely empties the array.
* **Expanding:** Increasing `length` creates empty holes.
```javascript
const fruits = ["apple", "banana", "cherry"];
fruits.length = 2; 
console.log(fruits); // ["apple", "banana"] (cherry is deleted)

fruits.length = 0;
console.log(fruits); // [] (array is cleared)
```


---

### Mutating vs Non-Mutating Methods

Understanding which methods mutate the caller is essential for maintaining references.

#### Mutating Methods (Changes the original array)
* **`push(val)`:** Adds to the end of the array. Returns new array length.
* **`pop()`:** Removes from the end of the array. Returns removed element.
* **`unshift(val)`:** Adds to the beginning of the array. Returns new array length.
* **`shift()`:** Removes from the beginning of the array. Returns removed element.
* **`splice(start, deleteCount, item1, ...)`:** Adds or removes elements. Mutates the array and returns an array of removed elements.

#### Non-Mutating Methods (Returns a new array, original is unchanged)
* **`slice(start, end)`:** Returns a shallow copy of a portion of an array from `start` to `end` (exclusive).
* **`concat(arr2)`:** Merges two or more arrays.

```javascript
const list = [1, 2, 3];
const res1 = list.slice(0, 2); // list remains [1, 2, 3], res1 = [1, 2]
const res2 = list.splice(0, 2); // list becomes [3], res2 = [1, 2]
```

---

### Sources & Further Reading (Topic 5)
* **JavaScript.info:**
  * [Objects](https://javascript.info/object)
  * [Object references and copying](https://javascript.info/object-copy)
  * [Arrays](https://javascript.info/array)
  * [Array methods](https://javascript.info/array-methods)
* **MDN Web Docs:**
  * [JavaScript object basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
  * [Arrays guide](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays)
  * [MDN `Object` constructor reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  * [MDN `Array` constructor reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
  * [MDN `Array.prototype.splice()` reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
  * [MDN `Array.prototype.slice()` reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

---

## 6. Control Structures

### Conditionals & Truthiness

#### Truthy vs Falsy
When evaluated inside conditionals (`if`), values are coerced to booleans.

* **Falsy Values:**
  * `false`
  * `0` and `-0`
  * `0n` (BigInt zero)
  * `""` (Empty string)
  * `null`
  * `undefined`
  * `NaN`
* **Truthy Values:** Everything else. 

> [!NOTE]
> Empty arrays (`[]`) and empty objects (`{}`) are **truthy** because they are object types.
> ```javascript
> if ([]) {
>   console.log("Empty array is truthy!"); // THIS RUNS!
> }
> ```

#### Ternary Operator (`? :`)
A shorthand for `if-else` statements.
```javascript
const age = 20;
const status = (age >= 18) ? "Adult" : "Minor";
```

---

### The `switch` Statement

The `switch` statement evaluates an expression, matches it against case clauses, and executes statements associated with that case.

#### Scoping inside Switch
Curly braces `{}` are shared across all cases in a single switch block.

```javascript
const action = "write";
switch (action) {
  case "read":
    let message = "Reading...";
    break;
  case "write":
    message = "Writing..."; // Throws ReferenceError because 'message' declaration was skipped but is in scope (TDZ)
    break;
}
```
* **Solution:** Wrap individual cases in curly braces `{}` if you need to declare block-scoped variables:
  ```javascript
  case "read": {
    let message = "Reading...";
    break;
  }
  ```

#### Strict Matching & Fallthrough
* Switch statements match cases using **strict equality (`===`)**. No type coercion is performed.
* If a matching case does not end with `break`, execution continues into subsequent cases regardless of whether they match (this is called **fallthrough**).

---

### Loops

#### Loop Types
1. **`while`:** Evaluates condition first, then runs block.
2. **`do...while`:** Runs block first, then evaluates condition (guaranteed to execute at least once).
3. **`for`:** Structured loop with initialization, condition, and step.

#### Loop Control: `break` vs `continue`
* **`break`:** Terminates the current loop immediately and passes control to the line following the loop.
* **`continue`:** Skips the remaining statements in the current iteration and jumps to the next loop step.

> [!WARNING]
> **Nested Loops and Break:**
> A `break` or `continue` statement only affects the **innermost** loop enclosing it.
> ```javascript
> for (let i = 0; i < 3; i++) {
>   for (let j = 0; j < 3; j++) {
>     if (j === 1) break; // Exits the inner loop, outer loop i increments and continues!
>   }
> }
> ```

---

### Iterating: `for...in` vs `for...of`

* **`for...in`:** Iterates over the **enumerable keys** of an object (for arrays, this means the indices as strings: `"0"`, `"1"`).
* **`for...of`:** Iterates over the **iterable values** of an array (or string).

```javascript
const items = ["A", "B"];

for (const key in items) {
  console.log(key); // Logs "0", "1"
}

for (const val of items) {
  console.log(val); // Logs "A", "B"
}
```

---

### Sources & Further Reading (Topic 6)
* **JavaScript.info:**
  * [Conditional branching: if, '?'](https://javascript.info/ifelse)
  * [Loops: while and for](https://javascript.info/while-for)
  * [The "switch" statement](https://javascript.info/switch)
* **MDN Web Docs:**
  * [Making decisions in your code — Conditionals](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
  * [Looping code guide](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code)
  * [MDN `switch` statement reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
  * [MDN loops and iteration index](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

---

## 7. Functions

### Function Declarations vs Expressions

#### Function Declarations
Defined directly as a statement. The entire function (including its implementation body) is **hoisted** to the top of the scope, allowing it to be invoked before its definition.
```javascript
console.log(greet()); // Works! Logs "Hello"
function greet() {
  return "Hello";
}
```

#### Function Expressions
A function is assigned to a variable. Variable hosting rules apply. If declared with `var`, the variable hoists as `undefined` (resulting in a TypeError if invoked early). If declared with `let`/`const`, it is uninitialized (ReferenceError).
```javascript
console.log(greet); // Logs undefined (var is hoisted)
console.log(greet()); // TypeError: greet is not a function

var greet = function() {
  return "Hello";
};
```

---

### Arrow Functions
Introduced in ES6, arrow functions offer a concise syntax.

#### Implicit Return gotcha
* **Single Expression (no braces):** Implicitly returns the evaluated value.
* **Block Body (with braces `{}`):** Requires an explicit `return` statement. If omitted, returns `undefined`.

```javascript
const double = x => x * 2; // Implicit return
const sum = (x, y) => { x + y }; // Omitted return, returns undefined!
```

#### Returning Object Literals Implicitly
To return an object literal implicitly, you must wrap the object in parentheses so the compiler doesn't interpret the braces as a function body.
```javascript
const getUser = () => ({ name: "Alice" }); // Correct
const getUserBad = () => { name: "Alice" }; // Incorrect: returns undefined
```

---

### Parameter Mismatch Rules
JavaScript functions do not enforce parameter count matches.

* **Fewer Arguments passed:** Unassigned parameters default to `undefined`.
  ```javascript
  function add(x, y) {
    return x + y;
  }
  console.log(add(5)); // 5 + undefined -> NaN
  ```
* **More Arguments passed:** Excess arguments are ignored (though accessible via the local `arguments` array-like object).
  ```javascript
  console.log(add(5, 10, 20)); // x=5, y=10, 20 is ignored. Returns 15.
  ```

---

### Default Parameters
Default parameters initialize parameters with default values if no value or `undefined` is passed.

#### Call-Time Dynamic Evaluation
Default parameter expressions are evaluated at **call time** (every time the function runs), not at compile time.

```javascript
let currentMultiplier = 2;
function compute(val, mult = currentMultiplier) {
  return val * mult;
}

console.log(compute(5)); // 5 * 2 = 10
currentMultiplier = 3;
console.log(compute(5)); // 5 * 3 = 15 (dynamic re-evaluation)
```

---

### Lexical Scoping Basics
JavaScript functions execute using the scope chain that was in place when they were **defined**, not when they are invoked (static/lexical scoping).

```javascript
let score = 100;

function display() {
  console.log(score);
}

function run() {
  let score = 200;
  display();
}

run(); // Logs 100 (display looks up 'score' in its outer lexical scope: Global, not run)
```

---

### Sources & Further Reading (Topic 7)
* **JavaScript.info:**
  * [Function basics](https://javascript.info/function-basics)
  * [Function expressions](https://javascript.info/function-expressions)
  * [Arrow functions, the basics](https://javascript.info/arrow-functions-basics)
* **MDN Web Docs:**
  * [Functions — Reusable blocks of code](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions)
  * [Arrow functions reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
  * [Functions guide index](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
