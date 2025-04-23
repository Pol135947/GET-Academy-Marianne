# JavaScript Array Methods Explained

This document outlines some of the most frequently used JavaScript array methods, explaining their purpose and how to use them.

---

## `.push()`

* **One-liner:** Adds one or more elements to the end of an array.
* **Details:** This method modifies the original array by appending new elements. It returns the new length of the array after the additions.
* **Syntax:** `array.push(element1, element2, ..., elementN)`
* **Example:**
    ```javascript
    let fruits = ['apple', 'banana'];
    console.log('Original array:', fruits); // Output: Original array: ['apple', 'banana']

    let newLength = fruits.push('orange', 'grape');

    console.log('Modified array:', fruits); // Output: Modified array: ['apple', 'banana', 'orange', 'grape']
    console.log('New length:', newLength); // Output: New length: 4
    ```

---

## `.pop()`

* **One-liner:** Removes the last element from an array.
* **Details:** This method modifies the original array by removing the last element. It returns the element that was removed.
* **Syntax:** `array.pop()`
* **Example:**
    ```javascript
    let fruits = ['apple', 'banana', 'orange'];
    console.log('Original array:', fruits); // Output: Original array: ['apple', 'banana', 'orange']

    let removedFruit = fruits.pop();

    console.log('Modified array:', fruits); // Output: Modified array: ['apple', 'banana']
    console.log('Removed element:', removedFruit); // Output: Removed element: orange
    ```

---

## `.shift()`

* **One-liner:** Removes the first element from an array.
* **Details:** This method modifies the original array by removing the first element. It returns the element that was removed. All subsequent elements are shifted down by one index.
* **Syntax:** `array.shift()`
* **Example:**
    ```javascript
    let fruits = ['apple', 'banana', 'orange'];
    console.log('Original array:', fruits); // Output: Original array: ['apple', 'banana', 'orange']

    let removedFruit = fruits.shift();

    console.log('Modified array:', fruits); // Output: Modified array: ['banana', 'orange']
    console.log('Removed element:', removedFruit); // Output: Removed element: apple
    ```

---

## `.unshift()`

* **One-liner:** Adds one or more elements to the beginning of an array.
* **Details:** This method modifies the original array by adding new elements to the start. It returns the new length of the array. Existing elements are shifted up to higher indices.
* **Syntax:** `array.unshift(element1, element2, ..., elementN)`
* **Example:**
    ```javascript
    let fruits = ['banana', 'orange'];
    console.log('Original array:', fruits); // Output: Original array: ['banana', 'orange']

    let newLength = fruits.unshift('apple', 'kiwi');

    console.log('Modified array:', fruits); // Output: Modified array: ['apple', 'kiwi', 'banana', 'orange']
    console.log('New length:', newLength); // Output: New length: 4
    ```

---

## `.forEach()`

* **One-liner:** Executes a provided function once for each array element.
* **Details:** This method iterates over the array elements but does *not* return a new array; it always returns `undefined`. It's primarily used for its side effects (e.g., logging to console, modifying external variables). The callback function receives `(element, index, array)` as arguments.
* **Syntax:** `array.forEach(callbackFunction(element, index, array))`
* **Example:**
    ```javascript
    let numbers = [1, 2, 3];
    console.log('Original array:', numbers); // Output: Original array: [1, 2, 3]

    console.log('Iterating with forEach:');
    numbers.forEach((num, index) => {
      console.log(`Index ${index}: ${num}`);
    });
    // Output:
    // Index 0: 1
    // Index 1: 2
    // Index 2: 3

    // Note: forEach does not return a value you can assign (it's undefined)
    let result = numbers.forEach(num => num * 2);
    console.log('Result of forEach:', result); // Output: Result of forEach: undefined
    ```

---

## `.map()`

* **One-liner:** Creates a new array populated with the results of calling a provided function on every element in the calling array.
* **Details:** This method does *not* modify the original array. It returns a *new* array where each element is the result of the callback function applied to the corresponding element of the original array. The callback function receives `(element, index, array)` as arguments.
* **Syntax:** `let newArray = array.map(callbackFunction(element, index, array))`
* **Example:**
    ```javascript
    let numbers = [1, 2, 3];
    console.log('Original array:', numbers); // Output: Original array: [1, 2, 3]

    let doubledNumbers = numbers.map(num => num * 2);

    console.log('Original array (unchanged):', numbers); // Output: Original array (unchanged): [1, 2, 3]
    console.log('New mapped array:', doubledNumbers); // Output: New mapped array: [2, 4, 6]
    ```

---

## `.filter()`

* **One-liner:** Creates a new array with all elements that pass the test implemented by the provided function.
* **Details:** This method does *not* modify the original array. It returns a *new* array containing only the elements for which the callback function returned `true` (or a truthy value). The callback function receives `(element, index, array)` as arguments.
* **Syntax:** `let newArray = array.filter(callbackFunction(element, index, array))`
* **Example:**
    ```javascript
    let numbers = [1, 2, 3, 4, 5, 6];
    console.log('Original array:', numbers); // Output: Original array: [1, 2, 3, 4, 5, 6]

    let evenNumbers = numbers.filter(num => num % 2 === 0);

    console.log('Original array (unchanged):', numbers); // Output: Original array (unchanged): [1, 2, 3, 4, 5, 6]
    console.log('New filtered array (evens):', evenNumbers); // Output: New filtered array (evens): [2, 4, 6]
    ```

---

## `.reduce()`

* **One-liner:** Executes a reducer function on each element of the array, resulting in a single output value.
* **Details:** This method iterates through the array and applies a callback function that accumulates a result. The callback receives `(accumulator, currentValue, currentIndex, array)`. An optional second argument to `reduce` serves as the initial value for the accumulator. If no initial value is provided, the first element of the array is used as the initial accumulator, and iteration starts from the second element. It does *not* modify the original array.
* **Syntax:** `let result = array.reduce(callbackFunction(accumulator, currentValue, currentIndex, array), initialValue)`
* **Example:**
    ```javascript
    let numbers = [1, 2, 3, 4];
    console.log('Original array:', numbers); // Output: Original array: [1, 2, 3, 4]

    // Summing all numbers, starting accumulator at 0
    let sum = numbers.reduce((accumulator, currentValue) => {
      console.log(`Accumulator: ${accumulator}, CurrentValue: ${currentValue}`);
      return accumulator + currentValue;
    }, 0); // Initial value is 0

    console.log('Original array (unchanged):', numbers); // Output: Original array (unchanged): [1, 2, 3, 4]
    console.log('Reduced result (sum):', sum); // Output: Reduced result (sum): 10
    ```

---

## `.find()`

* **One-liner:** Returns the first element in the array that satisfies a provided testing function.
* **Details:** This method iterates through the array and returns the value of the *first* element for which the callback function returns `true`. If no element satisfies the condition, it returns `undefined`. It does *not* modify the original array. The callback receives `(element, index, array)`.
* **Syntax:** `let foundElement = array.find(callbackFunction(element, index, array))`
* **Example:**
    ```javascript
    let users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }];
    console.log('Original array:', users);

    let bob = users.find(user => user.name === 'Bob');
    let dave = users.find(user => user.name === 'Dave');

    console.log('Found element (Bob):', bob); // Output: Found element (Bob): { id: 2, name: 'Bob' }
    console.log('Found element (Dave):', dave); // Output: Found element (Dave): undefined
    console.log('Original array (unchanged):', users);
    ```

---

## `.slice()`

* **One-liner:** Returns a shallow copy of a portion of an array into a new array object.
* **Details:** This method does *not* modify the original array. It extracts elements starting from the `start` index up to (but not including) the `end` index. If `end` is omitted, it extracts to the end of the array. If `start` is omitted, it starts from index 0. Negative indices count from the end of the array.
* **Syntax:** `let newArray = array.slice(start, end)`
* **Example:**
    ```javascript
    let letters = ['a', 'b', 'c', 'd', 'e'];
    console.log('Original array:', letters); // Output: Original array: ['a', 'b', 'c', 'd', 'e']

    let middleLetters = letters.slice(1, 4); // Start at index 1, end before index 4
    let lastTwo = letters.slice(-2); // Start 2 elements from the end

    console.log('Original array (unchanged):', letters); // Output: Original array (unchanged): ['a', 'b', 'c', 'd', 'e']
    console.log('Sliced middle:', middleLetters); // Output: Sliced middle: ['b', 'c', 'd']
    console.log('Sliced last two:', lastTwo); // Output: Sliced last two: ['d', 'e']
    ```

---

## `.splice()`

* **One-liner:** Changes the contents of an array by removing or replacing existing elements and/or adding new elements *in place*.
* **Details:** This method *modifies* the original array. It takes a `start` index, an optional `deleteCount` (how many elements to remove), and optional `item1, ..., itemN` (elements to add). It returns an array containing the elements that were deleted.
* **Syntax:** `let deletedElements = array.splice(start, deleteCount, item1, item2, ..., itemN)`
* **Example (Removing):**
    ```javascript
    let letters = ['a', 'b', 'c', 'd', 'e'];
    console.log('Original array:', letters); // Output: Original array: ['a', 'b', 'c', 'd', 'e']

    let removed = letters.splice(1, 2); // Start at index 1, remove 2 elements

    console.log('Modified array:', letters); // Output: Modified array: ['a', 'd', 'e']
    console.log('Removed elements:', removed); // Output: Removed elements: ['b', 'c']
    ```
* **Example (Adding/Replacing):**
    ```javascript
    let letters = ['a', 'b', 'c', 'd', 'e'];
    console.log('Original array:', letters); // Output: Original array: ['a', 'b', 'c', 'd', 'e']

    // Start at index 1, remove 1 element ('b'), add 'x' and 'y'
    let removedAndReplaced = letters.splice(1, 1, 'x', 'y');

    console.log('Modified array:', letters); // Output: Modified array: ['a', 'x', 'y', 'c', 'd', 'e']
    console.log('Removed elements:', removedAndReplaced); // Output: Removed elements: ['b']
    ```

---

## `.includes()`

* **One-liner:** Determines whether an array includes a certain value among its entries.
* **Details:** This method returns `true` if the array contains the specified element, and `false` otherwise. It uses the "SameValueZero" algorithm for comparison (similar to `===`, but `NaN` is considered equal to `NaN`). An optional second argument specifies the index from which to start searching.
* **Syntax:** `let booleanResult = array.includes(valueToFind, fromIndex)`
* **Example:**
    ```javascript
    let numbers = [1, 2, 3, NaN];
    console.log('Array:', numbers); // Output: Array: [1, 2, 3, NaN]

    console.log('Includes 2?', numbers.includes(2)); // Output: Includes 2? true
    console.log('Includes 4?', numbers.includes(4)); // Output: Includes 4? false
    console.log('Includes NaN?', numbers.includes(NaN)); // Output: Includes NaN? true
    console.log('Includes 3 starting from index 3?', numbers.includes(3, 3)); // Output: Includes 3 starting from index 3? false
    ```

---

## `.join()`

* **One-liner:** Joins all elements of an array into a string.
* **Details:** This method converts all array elements to strings, concatenates them, and returns the resulting string. An optional separator string can be provided; if omitted, the elements are separated by a comma (`,`). Does *not* modify the original array.
* **Syntax:** `let joinedString = array.join(separator)`
* **Example:**
    ```javascript
    let words = ['Hello', 'World', '!'];
    console.log('Original array:', words); // Output: Original array: ['Hello', 'World', '!']

    let defaultJoin = words.join(); // Default separator is ','
    let spaceJoin = words.join(' '); // Use space as separator
    let noSeparatorJoin = words.join(''); // Join with no separator

    console.log('Default join:', defaultJoin); // Output: Default join: Hello,World,!
    console.log('Space join:', spaceJoin); // Output: Space join: Hello World !
    console.log('No separator join:', noSeparatorJoin); // Output: No separator join: HelloWorld!
    console.log('Original array (unchanged):', words); // Output: Original array (unchanged): ['Hello', 'World', '!']
    ```

---

## `.sort()`

* **One-liner:** Sorts the elements of an array *in place*.
* **Details:** This method *modifies* the original array. By default, it sorts elements based on their string representations (lexicographical order). To sort numerically or using custom logic, you *must* provide a compare function `(a, b)`.
    * If `compareFunction(a, b)` returns < 0, sort `a` before `b`.
    * If `compareFunction(a, b)` returns > 0, sort `b` before `a`.
    * If `compareFunction(a, b)` returns 0, keep original order of `a` and `b`.
* **Syntax:** `array.sort(compareFunction(a, b))`
* **Example (Default - often incorrect for numbers):**
    ```javascript
    let items = ['banana', 'apple', 'cherry'];
    let numbers = [10, 5, 100, 2];
    console.log('Original items:', items); // Output: Original items: ['banana', 'apple', 'cherry']
    console.log('Original numbers:', numbers); // Output: Original numbers: [10, 5, 100, 2]

    items.sort(); // Sorts strings alphabetically
    numbers.sort(); // Sorts numbers as strings! (100 comes before 2)

    console.log('Sorted items:', items); // Output: Sorted items: ['apple', 'banana', 'cherry']
    console.log('Incorrectly sorted numbers:', numbers); // Output: Incorrectly sorted numbers: [10, 100, 2, 5]
    ```
* **Example (With Compare Function for Numbers):**
    ```javascript
    let numbers = [10, 5, 100, 2];
    console.log('Original numbers:', numbers); // Output: Original numbers: [10, 5, 100, 2]

    // Ascending numeric sort
    numbers.sort((a, b) => a - b);

    console.log('Correctly sorted numbers (ascending):', numbers); // Output: Correctly sorted numbers (ascending): [2, 5, 10, 100]

    // Descending numeric sort
    numbers.sort((a, b) => b - a);
    console.log('Correctly sorted numbers (descending):', numbers); // Output: Correctly sorted numbers (descending): [100, 10, 5, 2]
    ```

---