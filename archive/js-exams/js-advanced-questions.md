# JavaScript Advanced (Level 2) Exam Prep: 35 Hard Practice Questions

This mock exam is designed to help you prepare for advanced JavaScript developer certifications. It targets tricky edge cases, deep scoping, prototype inheritance, event loop mechanics, property descriptors, asynchronous flows, and coercion behavior.

---

## Exam Topics Distribution
1. **Advanced Variables, Scopes & Hoisting** (Questions 1–5)
2. **Advanced Functions & Closures** (Questions 6–10)
3. **Advanced Object-Oriented JS & Prototypes** (Questions 11–15)
4. **Asynchronous JS & The Event Loop** (Questions 16–20)
5. **Advanced Objects, Descriptors & Proxies** (Questions 21–25)
6. **Advanced Arrays & Collection Types** (Questions 26–30)
7. **Type Coercion, Comparison & Modules** (Questions 31–35)

---

## Practice Questions

### Section 1: Advanced Variables, Scopes & Hoisting

#### 1. What happens when this code is executed?
```javascript
let x = 10;
function foo() {
  console.log(x);
  let x = 20;
}
foo();
```
* A) Logs `10`
* B) Logs `undefined`
* C) Throws `ReferenceError: Cannot access 'x' before initialization`
* D) Logs `20`

#### 2. What will be the output of this snippet?
```javascript
var foo = 1;
function foo() {}
console.log(typeof foo);
```
* A) `"function"`
* B) `"number"`
* C) `"undefined"`
* D) Throws `TypeError`

#### 3. What is logged to the console when the following code executes?
```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```
* A) `0, 1, 2`
* B) `3, 3, 3`
* C) `undefined, undefined, undefined`
* D) `2, 2, 2`

#### 4. What is the value printed by this code?
```javascript
const a = 1;
{
  const a = 2;
  {
    console.log(a);
  }
}
```
* A) `1`
* B) `2`
* C) `undefined`
* D) `ReferenceError`

#### 5. Which statement about the global reference `globalThis` is correct?
* A) It is a function that returns the local execution context of the currently executing module.
* B) It provides a standardized way to access the global object (e.g. `window` in browsers, `global` in Node.js) across different execution environments.
* C) It is only available in web browsers and acts as an alias for `window`.
* D) It dynamically generates a new global environment each time it is referenced.

---

### Section 2: Advanced Functions & Closures

#### 6. What will be logged to the console?
```javascript
function createCounter() {
  let count = 0;
  return {
    increment() { return ++count; },
    decrement: () => --count
  };
}
const counter = createCounter();
console.log(counter.increment());
console.log(counter.decrement());
```
* A) `1` and `-1`
* B) `1` and `0`
* C) `1` and `NaN`
* D) `TypeError`

#### 7. Assuming this executes in a browser's global scope where `window.value` is undefined, what is the output?
```javascript
const obj = {
  value: 42,
  getValue: () => this.value,
  getRegularValue() {
    return this.value;
  }
};
console.log(obj.getValue(), obj.getRegularValue());
```
* A) `42 42`
* B) `undefined 42`
* C) `undefined undefined`
* D) `TypeError 42`

#### 8. What is the output of the following immediately invoked function expression (IIFE)?
```javascript
const result = (function(x) {
  delete x;
  return x;
})(42);
console.log(result);
```
* A) `undefined`
* B) `42`
* C) `null`
* D) `SyntaxError`

#### 9. What will the following expression evaluate and print to the console?
```javascript
const sum = a => b => c => a + b + c;
console.log(sum(1)(2)(3));
```
* A) `6`
* B) `[Function]`
* C) `undefined`
* D) `NaN`

#### 10. What is logged when the following functions are invoked?
```javascript
function show(a, b = a) {
  console.log(a, b);
}
show(undefined, 2);
show(5);
```
* A) `undefined 2` and `5 undefined`
* B) `undefined 2` and `5 5`
* C) `2 2` and `5 5`
* D) `ReferenceError`

---

### Section 3: Advanced Object-Oriented JS & Prototypes

#### 11. What is the output of the following code?
```javascript
const proto = { x: 10 };
const obj = Object.create(proto);
obj.x++;
console.log(obj.x, proto.x);
```
* A) `11 11`
* B) `11 10`
* C) `10 10`
* D) `NaN 10`

#### 12. What is the result when executing this bound function chain?
```javascript
function check() {
  return this.name;
}
const bound = check.bind({ name: "Alice" }).bind({ name: "Bob" });
console.log(bound());
```
* A) `"Alice"`
* B) `"Bob"`
* C) `undefined`
* D) `TypeError`

#### 13. What happens when this code is executed?
```javascript
class Counter {
  #count = 0;
  increment() {
    this.#count++;
  }
  getCount() {
    return this.#count;
  }
}
const c = new Counter();
c.increment();
console.log(c.getCount(), c.#count);
```
* A) Logs `1 undefined`
* B) Logs `1 0`
* C) Throws a SyntaxError because of the private field access `#count` outside the class definition
* D) Logs `1 1`

#### 14. What is logged to the console?
```javascript
function User(name) {
  this.name = name;
  return { name: "Guest" };
}
const user = new User("John");
console.log(user.name);
```
* A) `"John"`
* B) `"Guest"`
* C) `undefined`
* D) `TypeError`

#### 15. What happens when we instantiate `Dog` below?
```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
}
class Dog extends Animal {
  constructor(name, breed) {
    this.breed = breed;
    super(name);
  }
}
const d = new Dog("Rex", "German Shepherd");
```
* A) The instance `d` is created successfully.
* B) Throws a `ReferenceError` because `super()` must be called before accessing `this`.
* C) Throws a `TypeError` because subclasses cannot define new properties.
* D) The code executes, but `name` remains undefined on the instance.

---

### Section 4: Asynchronous JS & The Event Loop

#### 16. What is the execution order printed to the console?
```javascript
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
queueMicrotask(() => console.log("Queue"));
console.log("End");
```
* A) Start -> Timeout -> Promise -> Queue -> End
* B) Start -> End -> Promise -> Queue -> Timeout
* C) Start -> End -> Timeout -> Promise -> Queue
* D) Start -> End -> Queue -> Promise -> Timeout

#### 17. What will the following async code log?
```javascript
async function foo() {
  try {
    await Promise.reject("Error!");
  } catch (e) {
    console.log("Caught:", e);
  }
  return "Done";
}
foo().then(val => console.log(val));
```
* A) `Caught: Error!` followed by `Done`
* B) Only `Caught: Error!`
* C) An Uncaught Promise Rejection followed by `Done`
* D) Only `Done`

#### 18. When is `"Caught: Err"` printed?
```javascript
const p1 = Promise.resolve(1);
const p2 = Promise.reject("Err");
const p3 = new Promise(resolve => setTimeout(() => resolve(3), 1000));

Promise.all([p1, p2, p3])
  .then(console.log)
  .catch(err => console.log("Caught:", err));
```
* A) Instantly (almost immediately)
* B) After 1000 milliseconds
* C) Never, because it causes a silent process crash
* D) Only after all promises in the array have settled

#### 19. What is the output of the promise chain?
```javascript
Promise.resolve(1)
  .then(x => {
    console.log(x);
    return x * 2;
  })
  .then(x => {
    console.log(x);
  })
  .then(x => {
    console.log(x);
    return 3;
  })
  .then(console.log);
```
* A) `1`, `2`, `undefined`, `3`
* B) `1`, `2`, `2`, `3`
* C) `1`, `undefined`, `undefined`, `3`
* D) `1`, `2`, `undefined`, `undefined`

#### 20. What will be logged to the console?
```javascript
async function test() {
  return 42;
}
const res = test();
console.log(res);
```
* A) `42`
* B) A `Promise` object that resolves to `42`
* C) `undefined`
* D) `null`

---

### Section 5: Advanced Objects, Descriptors & Proxies

#### 21. Which statement accurately describes the difference between `Object.seal()` and `Object.freeze()`?
* A) `Object.seal()` prevents adding or deleting properties but allows modifying existing ones; `Object.freeze()` does all that and also makes existing properties read-only.
* B) `Object.freeze()` allows property deletion, while `Object.seal()` prevents it.
* C) `Object.seal()` prevents modifications but allows property additions.
* D) Both methods act identically.

#### 22. In non-strict mode, what is the output of the following code?
```javascript
const obj = {};
Object.defineProperty(obj, 'x', {
  value: 10,
  writable: false,
  configurable: false
});
obj.x = 20;
delete obj.x;
console.log(obj.x);
```
* A) `20`
* B) `undefined`
* C) `10`
* D) Throws a `TypeError`

#### 23. What is logged when executing the following code?
```javascript
const target = { a: 1 };
const handler = {
  get(target, prop) {
    return prop in target ? target[prop] * 10 : 42;
  }
};
const proxy = new Proxy(target, handler);
console.log(proxy.a, proxy.b);
```
* A) `10 42`
* B) `1 42`
* C) `10 undefined`
* D) `1 undefined`

#### 24. What is logged when setting a property that is read-only on the prototype (non-strict mode)?
```javascript
const proto = {};
Object.defineProperty(proto, 'x', {
  value: 10,
  writable: false
});
const obj = Object.create(proto);
obj.x = 20;
console.log(obj.x);
```
* A) `20`
* B) `10`
* C) `undefined`
* D) Throws a `TypeError`

#### 25. What is the length of the arrays returned in the log below?
```javascript
const sym = Symbol('id');
const obj = { [sym]: 1, a: 2 };
Object.defineProperty(obj, 'b', { value: 3, enumerable: false });
console.log(Object.keys(obj).length, Reflect.ownKeys(obj).length);
```
* A) `1 2`
* B) `1 3`
* C) `2 3`
* D) `2 2`

---

### Section 6: Advanced Arrays & Collection Types

#### 26. What is logged to the console?
```javascript
const arr = [1, , 3];
let count = 0;
arr.forEach(x => count++);
console.log(count, arr.length);
```
* A) `3 3`
* B) `2 3`
* C) `2 2`
* D) `3 2`

#### 27. What happens when calling `reduce` on an empty array without providing an initial value?
```javascript
const result = [].reduce((acc, curr) => acc + curr);
```
* A) Evaluates to `undefined`
* B) Evaluates to `0`
* C) Throws a `TypeError`
* D) Evaluates to `NaN`

#### 28. Which of the following is true about a `WeakMap`?
* A) Its keys must be objects or non-registered symbols, and it holds weak references to them, permitting garbage collection if there are no other references to the key.
* B) It is fully iterable using `for...of` loops or the `.forEach()` method.
* C) It is faster than standard `Map` because it doesn't allow deletion operations.
* D) Primitive types like strings and numbers can be used as keys.

#### 29. What is the size of the set after these operations?
```javascript
const set = new Set();
set.add({ a: 1 });
set.add({ a: 1 });
console.log(set.size);
```
* A) `1`
* B) `2`
* C) `undefined`
* D) `0`

#### 30. What will be printed by the following code?
```javascript
const arr = [1, [2, [3]]];
console.log(arr.flatMap(x => x));
```
* A) `[1, 2, 3]`
* B) `[1, 2, [3]]`
* C) `[1, [2, [3]]]`
* D) `[1, 2, 3, undefined]`

---

### Section 7: Type Coercion, Comparison & Modules

#### 31. What is logged to the console?
```javascript
console.log([] == ![]);
```
* A) `true`
* B) `false`
* C) Throws a `TypeError`
* D) `undefined`

#### 32. What is logged by adding an empty array and an empty object?
```javascript
console.log([] + {});
```
* A) `"[object Object]"`
* B) `0`
* C) `NaN`
* D) Throws a `TypeError`

#### 33. What is logged by running the generator iteration?
```javascript
function* gen() {
  yield 1;
  return 2;
}
const g = gen();
console.log(g.next(), g.next());
```
* A) `{ value: 1, done: false }` and `{ value: 2, done: false }`
* B) `{ value: 1, done: false }` and `{ value: 2, done: true }`
* C) `{ value: 1, done: true }` and `{ value: 2, done: true }`
* D) `{ value: 1, done: false }` and `{ value: undefined, done: true }`

#### 34. Which statement about ES Modules (ESM) and CommonJS (CJS) is correct?
* A) ESM imports are resolved dynamically at runtime, while CJS imports are resolved statically at compile time.
* B) ESM imports are resolved statically at compile time, enabling tree-shaking, while CJS imports are loaded and executed dynamically at runtime.
* C) Both CJS and ESM perform dynamic execution when importing modules.
* D) ESM imports represent copy-by-value bindings, while CJS imports represent live bindings.

#### 35. What is logged by comparing string values with `isNaN` vs `Number.isNaN`?
```javascript
console.log(isNaN("hello"), Number.isNaN("hello"));
```
* A) `true true`
* B) `false false`
* C) `true false`
* D) `false true`

---

## Answer Key & Detailed Explanations

### Section 1: Advanced Variables, Scopes & Hoisting
1. **C**  
   *Explanation*: Although variables declared with `let` are hoisted to the top of their block, they are not initialized. The period between block entry and initialization is the **Temporal Dead Zone (TDZ)**. Accessing `x` in `console.log(x)` before `let x = 20` throws a `ReferenceError`.
2. **B**  
   *Explanation*: Function declarations are hoisted before variable declarations. When `var foo = 1;` runs, the variable binding `foo` is reassigned to the number `1`, overwriting the function.
3. **B**  
   *Explanation*: Since `var` is function-scoped rather than block-scoped, there is only one shared binding of `i` in memory. By the time the micro/macrotask timer executes, the loop has completed and the shared `i` equals `3`.
4. **B**  
   *Explanation*: JavaScript resolves variable scopes from the innermost block outwards. The console logs `2` because the inner-nested block looks up to find the closest definition of `a`, which is `const a = 2` in the parent block scope.
5. **B**  
   *Explanation*: `globalThis` is a unified standard property introduced to access the global scope consistently across any execution environment (browser `window`, Node.js `global`, or Workers `self`).

### Section 2: Advanced Functions & Closures
6. **B**  
   *Explanation*: Both methods share the same closure context `count`. `increment()` uses traditional function syntax and increments `count` to `1`. `decrement` is an arrow function; it inherits the lexical closure scope and decrements the shared `count` from `1` back to `0`.
7. **B**  
   *Explanation*: Arrow functions do not bind their own `this` context. Instead, they capture the `this` value of their enclosing scope. For `getValue: () => this.value`, the enclosing scope is the global execution context, where `this.value` resolves to `undefined`. `getRegularValue()` is a normal method, so its `this` points to `obj`, resolving to `42`.
8. **B**  
   *Explanation*: The `delete` operator is designed to delete properties from an object. It cannot be used to delete local variables or function arguments. Thus, `delete x` does nothing (or throws a SyntaxError in strict mode), and the function returns `42`.
9. **A**  
   *Explanation*: This is a curried arrow function setup. `sum(1)` returns `b => c => 1 + b + c`. Invoking it with `(2)` returns `c => 1 + 2 + c`. Invoking with `(3)` executes the final function returning `1 + 2 + 3 = 6`.
10. **B**  
    *Explanation*: In `show(undefined, 2)`, passing `undefined` for `a` triggers no default fallback (since there is none defined for `a`), leaving `a = undefined`. `b` is specified as `2`. In `show(5)`, `a = 5`, and since `b` is omitted, it evaluates to its default parameter value `a`, which is `5`.

### Section 3: Advanced Object-Oriented JS & Prototypes
11. **B**  
    *Explanation*: `obj.x++` performs a get-and-write. It reads `obj.x` which falls back to the prototype's value `10`. It adds `1`, then writes `11` directly onto the child object as an own property. The prototype's property is untouched.
12. **A**  
    *Explanation*: Once a function is bound via `.bind()`, its `this` target is permanently set to the first argument provided. Subsequent applications of `.bind()` have no effect on `this`.
13. **C**  
    *Explanation*: Private properties declared with `#` are syntax-checked. Referencing them outside the class scope (e.g. `c.#count`) is a compiler/SyntaxError and will fail to execute.
14. **B**  
    *Explanation*: If a constructor returns an object, the `new` operator returns that custom object instead of the freshly created instance. The return object `{ name: "Guest" }` is returned, so `user.name` is `"Guest"`.
15. **B**  
    *Explanation*: Superclass constructor calls via `super()` must be executed before subclass constructors can initialize `this`. Accessing `this.breed` beforehand throws a `ReferenceError`.

### Section 4: Asynchronous JS & The Event Loop
16. **B**  
    *Explanation*: Sync logs "Start" and "End" run first. Next, the microtask queue flushes: `Promise.then` and `queueMicrotask` run in order before any macrotasks. Finally, the timer macrotask "Timeout" runs.
17. **A**  
    *Explanation*: `await` converts promise rejections into throw statements. The error is successfully caught in `try...catch`, allowing the function to resolve successfully with the string `"Done"`.
18. **A**  
    *Explanation*: `Promise.all` operates on a fast-fail basis. Since `p2` is rejected immediately, the entire chain rejects instantly, executing the `catch` block without waiting for `p3` to resolve.
19. **A**  
    *Explanation*: A resolved value propagates down the promise chain. If a `.then()` doesn't explicitly return a value, it implicitly resolves with `undefined`. The third `.then()` returns `3`, passing it to the final `console.log`.
20. **B**  
    *Explanation*: An `async` function always returns a Promise. Returning a simple primitive value `42` wraps it in a resolved Promise.

### Section 5: Advanced Objects, Descriptors & Proxies
21. **A**  
    *Explanation*: Sealing prevents property creation/deletion but allows writes to writable properties. Freezing seals the object and sets `writable: false` on all existing properties.
22. **C**  
    *Explanation*: Because `writable` is false, reassignment fails silently. Because `configurable` is false, deletion fails silently. In non-strict mode, the property retains its original value of `10`.
23. **A**  
    *Explanation*: The Proxy's `get` handler intercepts access. Since `'a'` exists, it retrieves `target['a'] * 10 = 10`. Since `'b'` does not exist, the conditional expression falls back to `42`.
24. **B**  
    *Explanation*: In JavaScript, if a property exists on the prototype chain and is marked as non-writable (`writable: false`), you cannot shadow it on the child object using direct assignment (`obj.x = 20`). The assignment fails silently.
25. **B**  
    *Explanation*: `Object.keys()` only returns enumerable, string-keyed properties (`['a']`). `Reflect.ownKeys()` returns all keys, including symbol keys and non-enumerable properties (`['a', 'b', Symbol(id)]`).

### Section 6: Advanced Arrays & Collection Types
26. **B**  
    *Explanation*: Methods like `forEach`, `map`, and `filter` skip uninitialized slots (holes). Thus, the callback executes only twice, but the `length` property still counts the holes.
27. **C**  
    *Explanation*: Running `reduce` on an empty array with no initial value throws a `TypeError: Reduce of empty array with no initial value`.
28. **A**  
    *Explanation*: `WeakMap` objects hold weak references to their keys, which must be objects or non-registered symbols. WeakMaps are not iterable to ensure garbage collection behaves deterministically.
29. **B**  
    *Explanation*: Objects are compared by reference, not structural equality. The two literal declarations `{ a: 1 }` create two distinct object references in memory, so both are successfully added to the Set.
30. **B**  
    *Explanation*: `flatMap()` only flattens the array returned by the mapping callback down to a depth of 1. It does not perform a recursive deep flatten.

### Section 7: Type Coercion, Comparison & Modules
31. **A**  
    *Explanation*: `![]` is coerced to `false`. Comparison `[] == false` converts `false` to `0`, and then converts `[]` to `""` via `[].toString()`. Finally, `""` is coerced to `0`, making the comparison `0 == 0`, which is `true`.
32. **A**  
    *Explanation*: The `+` operator coerces operands to primitives. `[]` becomes `""` and `{}` becomes `"[object Object]"`. Concatenating them results in `"[object Object]"`.
33. **B**  
    *Explanation*: The generator yields `1` and pauses (`done: false`). The next invocation evaluates the return statement, yielding `2` and marking the iterator as finished (`done: true`).
34. **B**  
    *Explanation*: ESM is statically resolved during compile-time, allowing loaders to parse structures and perform tree-shaking. CJS imports (`require`) evaluate dynamically during runtime. ESM uses live bindings, whereas CJS copies exported values.
35. **C**  
    *Explanation*: The global `isNaN("hello")` coerces `"hello"` to a number first. Since `Number("hello")` is `NaN`, it returns `true`. `Number.isNaN("hello")` does not perform type coercion and checks if the value is strictly of type `Number` with value `NaN` (which is false for a string).
