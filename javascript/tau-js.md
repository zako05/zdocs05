# Event sequence

## .dispatchEvent

Add new to-do task

```javascript
document.querySelector("input.new-todo").value="Todo#3"
document.querySelector("input.new-todo").dispatchEvent(new Event('change',{'bubbles':true}))
```

### .blur

The HTMLElement.blur() method removes keyboard focus from the current element.

link:
https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event
https://developer.mozilla.org/en-US/docs/Web/API/HTMLOrForeignElement/blur

Rename an existing to-do task

```javascript
document.querySelector("ul.todo-list > li:nth-child(2) > div > label").dispatchEvent(new Event('dblclick',{'bubbles':true}))
document.querySelector("ul.todo-list > li:nth-child(2) > .edit").value="newTodo"
document.querySelector("ul.todo-list > li:nth-child(2) > .edit").dispatchEvent(new Event('blur'))
```

# Loop

```javascript

```
