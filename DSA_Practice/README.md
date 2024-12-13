# Data Structures and Algorithms Cheat Sheet with Real-World Applications

---

## Data Structures

### 1. Array
- **Description**: A collection of elements stored at contiguous memory locations.
- **How it works**: Data is indexed, making it easy to access elements with their index.
- **Common Operations**:
  - Access: `O(1)`
  - Search: `O(n)`
  - Insert/Delete: `O(n)` (due to shifting elements)
- **Real-World Applications**:
  - Storing a list of items, like product inventories.
  - Used in dynamic programming for storing intermediate results.

```javascript
const array = [1, 2, 3, 4];
console.log(array[2]); // Access element at index 2
array.push(5); // Insert at the end
array.splice(1, 1); // Delete element at index 1
```

### 2. Stack
- **Description**: A LIFO (Last In, First Out) structure.
- **How it works**: Elements are added/removed from the top of the stack.
- **Common Operations**:
  - Push (add): `O(1)`
  - Pop (remove): `O(1)`
- **Real-World Applications**:
  - Undo operations in text editors.
  - Call stack management in programming languages.

```javascript
class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
}

const stack = new Stack();
stack.push(10);
console.log(stack.pop()); // 10
```

### 3. Queue
- **Description**: A FIFO (First In, First Out) structure.
- **How it works**: Elements are added at the rear and removed from the front.
- **Common Operations**:
  - Enqueue (add): `O(1)`
  - Dequeue (remove): `O(1)`
- **Real-World Applications**:
  - Managing tasks in a printer queue.
  - Handling requests in web servers.

```javascript
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    return this.items.shift();
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue()); // 1
```

### 4. Linked List
- **Description**: A collection of nodes, where each node contains data and a pointer to the next node.
- **How it works**: Access sequentially through node pointers.
- **Common Operations**:
  - Insert/Delete: `O(1)` if at the head or tail.
  - Search: `O(n)`
- **Real-World Applications**:
  - Efficient insertion/deletion in dynamic memory allocation.
  - Implementation of adjacency lists in graph algorithms.

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
}

const list = new LinkedList();
list.append(10);
list.append(20);
console.log(list.head.next.value); // 20
```

### 5. Hash Table
- **Description**: A data structure that maps keys to values using a hash function.
- **How it works**: Provides fast access (`O(1)`) for search, insert, and delete (on average).
- **Real-World Applications**:
  - Implementing associative arrays and dictionaries.
  - Caching data for quick retrieval.

```javascript
const hashTable = new Map();
hashTable.set('key', 'value');
console.log(hashTable.get('key')); // 'value'
hashTable.delete('key');
```

---

## Algorithms

### 1. Binary Search
- **Description**: Finds the position of a target value in a sorted array by repeatedly dividing the search interval in half.
- **How it works**:
  1. Start with the middle element.
  2. If the target matches, return the index.
  3. If the target is smaller, search the left half. Otherwise, search the right half.
  4. Repeat until the interval is empty.
- **Real-World Applications**:
  - Searching in large databases or dictionaries.
  - Finding elements in sorted arrays, like in search engines.

```javascript
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
```

### 2. Bubble Sort
- **Description**: A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
- **How it works**:
  1. Compare adjacent elements.
  2. Swap if needed.
  3. Repeat for all elements until sorted.
- **Real-World Applications**:
  - Small datasets where simplicity is preferred.
  - Educational purposes to demonstrate sorting concepts.

```javascript
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
```

### 3. Quick Sort
- **Description**: A divide-and-conquer sorting algorithm.
- **How it works**:
  1. Pick a pivot element.
  2. Partition the array into two halves: elements less than the pivot and elements greater than the pivot.
  3. Recursively sort the subarrays.
- **Real-World Applications**:
  - Efficiently sorting large datasets.
  - Used in libraries like V8 (JavaScript engine).

```javascript
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const left = arr.filter(el => el < pivot);
  const right = arr.filter(el => el > pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
```

### 4. Breadth-First Search (BFS)
- **Description**: Explores nodes layer by layer in a graph/tree.
- **How it works**:
  1. Start at the root node.
  2. Visit all neighbors before going deeper.
- **Real-World Applications**:
  - Finding the shortest path in unweighted graphs (e.g., GPS systems).
  - Web crawling and social network analysis.

```javascript
function bfs(graph, start) {
  const queue = [start];
  const visited = new Set();
  visited.add(start);

  while (queue.length > 0) {
    const node = queue.shift();
    console.log(node);
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}

const graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: []
};

bfs(graph, 'A'); // A, B, C, D, E, F
```

### 5. Depth-First Search (DFS)
- **Description**: Explores as far down a branch as possible before backtracking.
- **How it works**:
  1. Start at the root node.
  2. Explore a branch completely before moving to the next.
- **Real-World Applications**:
  - Solving mazes and puzzles.
  - Topological sorting in scheduling tasks.

```javascript
function dfs(graph, start, visited = new Set()) {
  console.log(start);
  visited.add(start);
  for (const neighbor of graph[start]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  }
}

dfs(graph, 'A'); // A, B, D, E, F, C
```

---

This cheat sheet provides a quick reference for common data structures and algorithms with explanations, real-world applications, and examples in JavaScript.
