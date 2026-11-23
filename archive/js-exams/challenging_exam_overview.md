# Challenging JavaScript Junior (Level 1) Exam Prep

I have created a new set of 35 practice questions designed to prepare you for the Level 1 / Junior JavaScript Developer Certification on Certificates.dev. 

This test is significantly more difficult than [js-beginner-questions.md](file:///Users/zako05/workspace/articles/js-exams/js-beginner-questions.md), focusing on tricky edge cases, language quirks, and subtle behaviors, while remaining **strictly within the Level 1 scope**.

The questions, detailed answers, and explanations have been written to:
[js-junior-challenging-questions.md](file:///Users/zako05/workspace/articles/js-exams/js-junior-challenging-questions.md)

---

## Comparison of Concept Difficulty

Below is a breakdown of how the difficulty has been scaled up for each of the 7 sections of the syllabus:

| Syllabus Section | Beginner Questions Focus | Challenging Questions Focus |
| :--- | :--- | :--- |
| **1. Intro to JS** | Basic script tags, comment syntax, HTML/CSS relations | Script execution blocking, block-level syntax errors, comment nesting, HTML-style comments in JS |
| **2. Basic Debugging** | Using console.log, opening dev tools, basic ReferenceError | Lazy-evaluation of objects in console, debugger statement behavior, console.trace, detailed error types |
| **3. Variables & Types** | Block-scope reassignments, primitive types, typeof null | Temporal Dead Zone (TDZ), variable shadowing/hoisting, pass-by-value vs pass-by-reference, string immutability |
| **4. Basic Operators** | Modulo, loose vs strict equality, increment/decrement | Coercion order in expressions, truthy/falsy loose equality, logical short-circuit values, postfix/prefix in complex math |
| **5. Arrays & Objects** | Accessing properties/elements, pop/push, array.length | Object key coercion, shallow copies via Object.assign, sparse arrays, deleting properties vs deleting variables |
| **6. Control Structures** | If-else branching, logical logic, switch default fallthrough | Block-scoping (TDZ) inside switch cases, truthy arrays/objects, continue vs break in nested loops, for-in vs for-of |
| **7. Functions** | Function declarations, return default value, arrow functions | Hoisting of expressions vs declarations, implicit return omission (arrow blocks), lexical scoping, parameter mismatch |

---

## Highlighted Tricky Concepts Tested

Here are a few highlights of the mechanics tested in the new [js-junior-challenging-questions.md](file:///Users/zako05/workspace/articles/js-exams/js-junior-challenging-questions.md) file:

### 1. Temporal Dead Zone (TDZ) inside Switch Cases (Q26)
Variables declared with `let` or `const` inside a switch case are scoped to the entire switch block. If you match a case that appears *after* a variable declaration, the declaration line is skipped, but the variable is still in scope. Accessing it throws a `ReferenceError` because of the TDZ.

### 2. Object Key Coercion (Q21)
JavaScript object property keys are coerced to strings. When an object is used as a key, it converts to `"[object Object]"`. This means two different objects used as keys will reference the exact same property:
```javascript
obj[firstKey] = "Alpha";
obj[secondKey] = "Beta"; // Overwrites "Alpha"!
```

### 3. Logical Short-Circuiting Return Values (Q18)
Logical operators in JavaScript don't just return boolean values—they return the value of the operand that decided the expression:
```javascript
const result = (null || "Default") && ("User" || 0); // Returns "User"
```

### 4. Arrow Function Block Body Omission (Q32)
Omit the curly braces `{}` in an arrow function to get an implicit return. If you include curly braces, it becomes a block body and returns `undefined` unless an explicit `return` statement is written:
```javascript
const add = (x, y) => { x + y }; // Returns undefined!
```

---

> [!TIP]
> Try to solve the questions in [js-junior-challenging-questions.md](file:///Users/zako05/workspace/articles/js-exams/js-junior-challenging-questions.md) on a piece of paper or in a text editor first before scrolling down to the **Answer Key & Detailed Explanations** section to check your understanding!
