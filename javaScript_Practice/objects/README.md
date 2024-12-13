# JavaScript: Accessing and Manipulating Objects

A quick reference guide for working with objects in JavaScript, including nested objects, properties holding functions, and iterating through keys and values.

---

## **1. Accessing Properties**

### **Dot Notation**
- Access properties using the `.` operator.
```javascript
const obj = { name: "Alice", age: 25 };
console.log(obj.name); // Output: Alice
```

### **Bracket Notation**
- Access properties dynamically using `[]`.
```javascript
const obj = { name: "Alice", age: 25 };
const key = "age";
console.log(obj[key]); // Output: 25
```

---

## **2. Nested Objects**

### Accessing Nested Properties
- Use multiple dots or brackets.
```javascript
const nestedObj = { person: { name: "Alice", address: { city: "Wonderland" } } };
console.log(nestedObj.person.address.city); // Output: Wonderland
```

### Safely Access Nested Properties
- Use optional chaining (`?.`) to avoid errors if a property is `undefined`.
```javascript
console.log(nestedObj.person?.address?.zipCode); // Output: undefined
```

---

## **3. Adding or Updating Properties**

### Add a New Property
```javascript
const obj = { name: "Alice" };
obj.age = 25;
console.log(obj); // Output: { name: "Alice", age: 25 }
```

### Update an Existing Property
```javascript
obj.name = "Bob";
console.log(obj); // Output: { name: "Bob", age: 25 }
```

---

## **4. Deleting Properties**

### Delete a Property
```javascript
const obj = { name: "Alice", age: 25 };
delete obj.age;
console.log(obj); // Output: { name: "Alice" }
```

---

## **5. Properties Holding Functions**

### Define Methods in Objects
```javascript
const obj = {
  name: "Alice",
  greet: function() {
    return `Hello, my name is ${this.name}`;
  }
};
console.log(obj.greet()); // Output: Hello, my name is Alice
```

### Using ES6 Method Shorthand
```javascript
const obj = {
  name: "Alice",
  greet() {
    return `Hello, my name is ${this.name}`;
  }
};
console.log(obj.greet()); // Output: Hello, my name is Alice
```

---

## **6. Iterating Through Objects**

### **Iterating Over Keys**
- Use `for...in` loop.
```javascript
const obj = { name: "Alice", age: 25 };
for (const key in obj) {
  console.log(key); // Output: name, age
}
```

### **Iterating Over Values**
- Use `Object.values()`.
```javascript
const obj = { name: "Alice", age: 25 };
for (const value of Object.values(obj)) {
  console.log(value); // Output: Alice, 25
}
```

### **Iterating Over Keys and Values**
- Use `Object.entries()`.
```javascript
const obj = { name: "Alice", age: 25 };
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`);
  // Output: name: Alice, age: 25
}
```

---

## **7. Working with Nested Objects**

### Accessing All Keys and Values in a Nested Object
```javascript
const nestedObj = { person: { name: "Alice", address: { city: "Wonderland" } } };
function traverse(obj) {
  for (const key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      traverse(obj[key]);
    } else {
      console.log(`${key}: ${obj[key]}`);
    }
  }
}
traverse(nestedObj);
// Output: name: Alice, city: Wonderland
```

---

## **8. Checking for Properties**

### Check if a Property Exists
- Use `in` operator.
```javascript
const obj = { name: "Alice", age: 25 };
console.log("name" in obj); // Output: true
```

### Check Using `hasOwnProperty()`
```javascript
console.log(obj.hasOwnProperty("age")); // Output: true
```

---

## **9. Cloning and Merging Objects**

### Shallow Copy with `Object.assign()`
```javascript
const obj = { name: "Alice" };
const clone = Object.assign({}, obj);
console.log(clone); // Output: { name: "Alice" }
```

### Shallow Copy with Spread Operator
```javascript
const clone = { ...obj };
console.log(clone); // Output: { name: "Alice" }
```

### Deep Copy with `JSON.parse(JSON.stringify())`
```javascript
const nestedObj = { person: { name: "Alice" } };
const deepClone = JSON.parse(JSON.stringify(nestedObj));
console.log(deepClone); // Output: { person: { name: "Alice" } }
```

---

