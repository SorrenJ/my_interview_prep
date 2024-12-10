
1. Selecting by ID
```javascript
document.getElementById('id');
```
Returns the first element with the matching id.

Example:
```javascript
const element = document.getElementById('header');
```

2. Selecting by Class
```javascript
document.getElementsByClassName('class-name');
```
Returns an HTMLCollection (live collection) of elements with the matching class.
Example:
```javascript
const elements = document.getElementsByClassName('menu-item');
```

3. Selecting by Tag Name
```javascript
document.getElementsByTagName('tag-name');
```
Returns an HTMLCollection of elements with the matching tag name.
Example:
```javascript
const paragraphs = document.getElementsByTagName('p');
```

4. Selecting with CSS Selectors
```javascript
document.querySelector('selector');
```
Returns the first element that matches the CSS selector.
```javascript
const element = document.querySelector('.menu-item');
```
```javascript
document.querySelectorAll('selector');
```
Returns a static NodeList of all elements matching the CSS selector.
Example:

```javascript
const elements = document.querySelectorAll('.menu-item');
```

5. Selecting by Name Attribute

```javascript
document.getElementsByName('name');
```
Returns a NodeList of elements with the matching name attribute.
Example:

```javascript
const inputs = document.getElementsByName('username');
```




## Comparison Table

| Method                 | Returns          | Live/Static | Usage                                    |
|------------------------|------------------|-------------|------------------------------------------|
| `getElementById`       | Single Element   | Static      | Select by id.                            |
| `getElementsByClassName` | HTMLCollection | Live        | Select by class.                         |
| `getElementsByTagName` | HTMLCollection   | Live        | Select by tag name.                      |
| `querySelector`        | Single Element   | Static      | Select using a CSS selector.             |
| `querySelectorAll`     | NodeList         | Static      | Select all using a CSS selector.         |
| `getElementsByName`    | NodeList         | Live        | Select by name attribute (mostly for forms). |
