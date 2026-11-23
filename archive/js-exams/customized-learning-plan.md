# Tailored JavaScript Beginner Learning Plan

Based on your mock exam performance (**27/35**), you have a strong grasp of functions, control flow (loops/conditionals), and general JavaScript structure. 

To bridge the gap to a perfect score and pass your official certification confidently, your primary areas of focus are:
1. **Memory Allocation**: Primitive values vs Object/Array references (Q13, Q24).
2. **Basic Operators**: Prefix/Postfix increment mechanics and Exponentiation (Q19, Q20).
3. **Array/Object Access & Methods**: Array properties vs methods, brackets vs dots, and structural array modifications (Q22, Q23, Q25).
4. **Logical Precedence**: Negations and evaluation ordering (Q27).

---

## 3-Day Action Plan

### Day 1: Operators & Logical Precedence

#### 🎯 Objective:
Master the execution order of comparison operators, logic gates, and postfix/prefix mathematics.

#### 1. Postfix (`x++`) vs. Prefix (`++x`)
* **The Rule**: Both add `1` to the variable. However:
  * Postfix (`x++`) evaluates to the **old value** before incrementing.
  * Prefix (`++x`) evaluates to the **new value** after incrementing.
* **Trace Example**:
  ```javascript
  let a = 5;
  let b = a++; // b gets 5, then 'a' becomes 6
  
  let c = 5;
  let d = ++c; // 'c' becomes 6, then 'd' gets 6
  ```
* **📚 Learning Resources**:
  * [MDN: Increment (++) Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment)
  * [JavaScript.info: Increment/decrement](https://javascript.info/operators#increment-decrement)

#### 2. Logical Precedence & Groups
* **The Rule**: `!` (NOT) executes first, followed by `&&` (AND), and then `||` (OR). Using parentheses `()` overrides standard precedence.
* **Practice evaluation trace**:
  ```javascript
  const check = !(10 > 5 && 3 < 2);
  // 1. Evaluate inside (): (true && false) -> false
  // 2. Evaluate outside NOT: !(false) -> true
  ```
* **📚 Learning Resources**:
  * [MDN: Operator Precedence Reference Table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
  * [MDN: Logical NOT (!) Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT)
  * [JavaScript.info: Logical Operators](https://javascript.info/logical-operators)

#### 💻 Practice Tasks (Day 1):
Evaluate these in your console and make sure you understand the output:
1. `let val = 10; console.log(val++ + ++val);` (Should output `22`. Why? `10` + `12`).
2. `console.log(2 ** 3 ** 2);` (Should output `512` because exponentiation evaluates right-to-left: `2 ** 9`).
3. `console.log(true || false && false);` (Should output `true`).

---

### Day 2: Memory References, Arrays & Objects

#### 🎯 Objective:
Understand how reference types differ from primitive types in memory, and master the correct API syntax for arrays and objects.

#### 1. Primitive Copy vs. Reference Copy
* **Primitives** (Number, String, Boolean, null, undefined): Copied by **value**. The variables do not link to each other.
* **Objects/Arrays**: Copied by **reference** (address in memory). Multiple variables point to the same memory block.
* **Trace Example**:
  ```javascript
  // Primitives (by value)
  let name1 = "Alice";
  let name2 = name1;
  name2 = "Bob"; 
  console.log(name1); // "Alice" (unchanged)

  // Objects (by reference)
  let item1 = { title: "Book" };
  let item2 = item1;
  item2.title = "Pen";
  console.log(item1.title); // "Pen" (changed!)
  ```
* **📚 Learning Resources**:
  * [MDN: Primitive Data Types](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
  * [JavaScript.info: Object references and copying](https://javascript.info/object-copy)

#### 2. Dot Notation vs. Bracket Notation
* **Dot Notation**: `object.property` (Fastest, key must be a valid identifier).
* **Bracket Notation**: `object["property"]` (Required if the property name has spaces, special characters, or is stored inside a variable: `object[myVar]`).
* **📚 Learning Resources**:
  * [MDN: Property Accessors (Dot vs Bracket)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors)
  * [JavaScript.info: Objects - Dot & Square Brackets](https://javascript.info/object#literals-and-properties)

#### 3. Properties vs. Methods
* **Property**: A value stored on an object. Accessed **without** parenthesis. E.g., `array.length`.
* **Method**: A function stored on an object. Evaluated **with** parenthesis. E.g., `array.pop()`, `string.toUpperCase()`.
* **📚 Learning Resources**:
  * [MDN: Array properties and methods API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
  * [JavaScript.info: Arrays - Methods queue/stack](https://javascript.info/array#methods-pop-push-shift-unshift)
  * [JavaScript.info: Array methods (slice, splice, etc.)](https://javascript.info/array-methods)

#### 💻 Practice Tasks (Day 2):
Write a script containing:
1. An array containing two objects representing products.
2. Store a reference to the first product in a new variable `favProduct`. Change `favProduct.price = 0`. Check if the original product price also updated to `0`.
3. Try calling `array.length()`. Observe the error.
4. Try modifying the array using `push()`, `pop()`, `shift()`, and `unshift()` while logging the output at each step.

---

### Day 3: Quick Functions Review & Targeted Mini-Quiz

#### 🎯 Objective:
Review function parameter defaults and run a focused practice quiz covering the exact areas from your mock exam mistakes.

#### 1. Functions & Defaults
* **The Rule**: Functions can have default parameter fallback assignments. If a variable is missing or evaluated as `undefined`, the fallback kicks in.
* **Trace Example**:
  ```javascript
  function greet(user = "Guest") {
    return `Hello, ${user}`;
  }
  greet(); // Returns "Hello, Guest"
  greet("Alice"); // Returns "Hello, Alice"
  ```
* **📚 Learning Resources**:
  * [MDN: Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
  * [JavaScript.info: Default values in Functions](https://javascript.info/function-basics#default-values)

---

## Targeted Day 3 Mini-Quiz

Answer the following 10 questions on paper, then check the answers below to verify your logic.

#### Q1. What is the output of the following code?
```javascript
let score = 5;
let final = ++score + 2;
console.log(final);
```
* A) 7
* B) 8
* C) 9

#### Q2. Which of the following is a reference type?
* A) `null`
* B) `"Hello"`
* C) `[1, 2, 3]`

#### Q3. What is the output of this code?
```javascript
const user = { name: "John" };
const admin = user;
admin.name = "Jane";
console.log(user.name);
```
* A) "John"
* B) "Jane"
* C) undefined

#### Q4. How do you find the count of items in an array called `items`?
* A) `items.length`
* B) `items.length()`
* C) `items.count()`

#### Q5. What is the correct operator to calculate `3` to the power of `4`?
* A) `3 ^ 4`
* B) `3 ** 4`
* C) `3 * 4`

#### Q6. What is the output of `console.log(typeof [1, 2]);`?
* A) `"array"`
* B) `"object"`
* C) `"list"`

#### Q7. Which array method removes the *first* item from an array?
* A) `shift()`
* B) `unshift()`
* C) `pop()`

#### Q8. What does this expression evaluate to?
```javascript
!(10 === "10" || 5 > 2)
```
* A) true
* B) false

#### Q9. Given `const info = { "first-name": "Alex" };`, which is the only valid way to access this property?
* A) `info.first-name`
* B) `info["first-name"]`
* C) `info(first-name)`

#### Q10. What is returned by the function call `checkVal()`?
```javascript
function checkVal(val) {
  let result = val * 2;
}
```
* A) NaN
* B) undefined
* C) 0

---

## Day 3 Quiz Answer Key & Explanations

1. **B** — Prefix `++score` increments `score` to `6` immediately, returning `6`. `6 + 2 = 8`.
2. **C** — Arrays are objects (reference types). Strings and null are primitive types.
3. **B** — Objects copy references. `admin` and `user` point to the same memory block.
4. **A** — `length` is a property, not a method. No parentheses should be used.
5. **B** — `**` is the exponentiation operator.
6. **B** — Under the hood, arrays are objects, so `typeof` returns `"object"`.
7. **A** — `shift()` removes from the front. `pop()` removes from the back.
8. **B** — `10 === "10"` is `false`. `5 > 2` is `true`. `false || true` is `true`. `!true` is `false`.
9. **B** — Since the property key contains a hyphen `-`, dot notation is invalid. Bracket notation is required.
10. **B** — The function lacks a `return` statement, meaning it implicitly returns `undefined`.
