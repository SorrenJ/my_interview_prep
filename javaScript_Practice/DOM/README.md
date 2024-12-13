# JavaScript DOM Manipulation Cheat Sheet

## What is the DOM?
The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document as a tree of objects that you can manipulate with JavaScript.

---

## Selecting Elements

### By ID
```javascript
const element = document.getElementById('elementId');
```

### By Class
```javascript
const elements = document.getElementsByClassName('className');
```

### By Tag Name
```javascript
const elements = document.getElementsByTagName('tagName');
```

### Query Selector (CSS Selector)
```javascript
const element = document.querySelector('selector');
const elements = document.querySelectorAll('selector');
```

---

## Manipulating Elements

### Changing Text Content
```javascript
element.textContent = 'New Text';
```

### Changing HTML Content
```javascript
element.innerHTML = '<p>New HTML Content</p>';
```

### Changing Attributes
```javascript
element.setAttribute('attributeName', 'value');
element.getAttribute('attributeName');
element.removeAttribute('attributeName');
```

### Changing Styles
```javascript
element.style.propertyName = 'value';
// Example:
element.style.color = 'red';
element.style.backgroundColor = 'blue';
```

---

## Creating and Appending Elements

### Create Element
```javascript
const newElement = document.createElement('tagName');
```

### Add Text to Element
```javascript
newElement.textContent = 'Hello, World!';
```

### Append Element
```javascript
parentElement.appendChild(newElement);
```

### Insert Before
```javascript
parentElement.insertBefore(newElement, referenceElement);
```

---

## Removing Elements

### Remove Element
```javascript
parentElement.removeChild(childElement);
```

### Remove Directly
```javascript
element.remove();
```

---

## Event Listeners

### Add Event Listener
```javascript
element.addEventListener('event', functionName);

// Example:
element.addEventListener('click', () => {
  console.log('Element clicked!');
});
```

### Remove Event Listener
```javascript
element.removeEventListener('event', functionName);
```

---

## Traversing the DOM

### Parent Node
```javascript
const parent = element.parentNode;
```

### Child Nodes
```javascript
const children = element.childNodes;
const firstChild = element.firstChild;
const lastChild = element.lastChild;
```

### Siblings
```javascript
const next = element.nextSibling;
const previous = element.previousSibling;
```

---

## Common DOM Events
- `click`
- `mouseover`
- `mouseout`
- `keydown`
- `keyup`
- `submit`
- `load`
- `resize`
- `scroll`

---

## Example: Toggle Class on Click
```javascript
const button = document.querySelector('#myButton');
const box = document.querySelector('#myBox');

button.addEventListener('click', () => {
  box.classList.toggle('active');
});
```

---

This cheat sheet covers basic DOM manipulation concepts in JavaScript to get you started. Refer to the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) for more detailed information!
