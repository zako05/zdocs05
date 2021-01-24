title: ECMAScript 6 (or ECMAScript 2015)
published: 2015

# Map
link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
link: https://codingblast.com/javascript-set-map/
link: https://www.geeksforgeeks.org/map-entries-javascript/

[todo]

# Button Creation
link: https://www.hackerrank.com/challenges/js10-create-a-button/problem

```html
<button id='btn'>1</button>
<script>
    var btn = document.getElementById('btn');
    btn.addEventListener("click", function() {
    //btn.onclick = function(){
        btn.innerHTML++;     
    });
</script>
```

```javascript
function clickButton() {
var btn1 = document.getElementById('btn1').innerHTML;
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');
var btn6 = document.getElementById('btn6');
var btn7 = document.getElementById('btn7');
var btn8 = document.getElementById('btn8');
var btn9 = document.getElementById('btn9');

btn5.addEventListener("click", function(){
    btn1.innerHTML = btn4.innerHTML;
    btn2.innerHTML = btn1.innerHTML;
    btn3.innerHTML = btn2.innerHTML;
    btn6.innerHTML = btn3.innerHTML;
    btn9.innerHTML = btn6.innerHTML;
    btn8.innerHTML = btn9.innerHTML;
    btn7.innerHTML = btn8.innerHTML;
    btn4.innerHTML = btn7.innerHTML;
    alert(btn1);
});    
}
```

# Bitwise operators
link: https://www.hackerrank.com/challenges/js10-bitwise/problem

[todo]

```javascript
return ((k | (k - 1)) > n) ? (k - 2) : (k - 1);
```

# Regular Expression
link: https://www.hackerrank.com/challenges/js10-regexp-1/topics/javascript-regex
link: https://stackoverflow.com/a/59440500

[todo]

matches any string  that begins and ends with the same vowel

```javascript
let re = /^([aeiou])(.*)\1$/
```

link:
```javascript
let re = new RegExp('^(Mr|Mrs|Ms|Dr|Er)(\\.)([a-zA-Z])+$');
```

link: https://www.hackerrank.com/challenges/js10-regexp-3/problem
```javascript
re = /([0-9]+)/g;
```

# Arrow Functions
link: https://www.hackerrank.com/challenges/js10-arrows/topics/javascript-arrow-functions

[todo]

```javascript
return nums.map((n) => {
  return n = (n%2==0) ? n*2 : n*3
  });
```
or
```javascript
return nums.map(n => n = (n%2==0) ? n*2 : n*3);
```

# Inheritance & Prototype

[todo]

link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

# Promise

[todo]

links: 
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

## Promise .than()

[todo]

link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then

# CallBack function

[todo]

link: https://developer.mozilla.org/en-US/docs/Glossary/Callback_function

---

# filter()

link: https://www.tutorialspoint.com/es6/es6_array_method_filter.htm

description: filter() method creates a new array with all elements that pass the test implemented by the provided function.

```javascript
array.filter(callback[, thisObject]);
```

# unshift()

link: https://www.tutorialspoint.com/es6/es6_array_method_unshift.htm

description: unshift() method adds one or more elements to the beginning of an array and
returns the new length of the array.

```javascript
array.unshift( element1, ..., elementN  );
```
