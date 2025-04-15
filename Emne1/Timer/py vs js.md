# py vs JS

## Methods

|Python|Javascript|
|-|-|
|`def function():`|`function name(){}`|
|`.append()`|`.push()`|
||`.join()`|
|`.lower()`|`.toLowerCase()`|
|`.upper()`|`.toUpperCase()`|
|`for letter in word:` <br> <ul>`if letter in vowelsList:`| `for (let letter of word) {` <br> <ul>`if vowelsList.includes(letter){`<br>`}`<br>`}`|
|`for i in range (start, stop):`|`for (let i = start; i < end; i++){`<br>`}`|
|`name =`|`let, var, const name =`|
|`if condition:` <ul> `event`| `if (condition){`<ul>`event;}`|
|`elif condition:` <ul> `event`| `if else (condition){`<ul>`event;}`|
|`else:` <ul> `condition`| `else {condition}`|
|`while condition:`|`while (condition){}`|
|reverse list: <br>`list[::-1]`| `list.split("").reverse().join("");`|
|`f"something {number}"`|`` `something ${number}` ``|
|Lists|Arrays|
|`numbers = [1, 2, 3, 4];`<br>`words = ["Hei", "på", "deg"];`<br>`for n in numbers:`<ul>`print(n)`|`let numbers = [1, 2, 3, 4];`<br>`let words = ["Hei", "på", "deg"];`<br>`for (let i = 0; i < numbers.length; i++){`<ul>`console.log(numbers[i]);}`|
|`word = str(input())`|HTML : `<input id="word" type="text" handling ="function()">` <br> JS:`document.getElementById("word").value`|
|MVC|
|**MODELS :** *building blocks (variables)*|
||`let var1 = ""`<br>`let var2 = ""`<br>`let var3 = ""`|
|**VIEW :** *final product (page)*|
||`function updateView(){` <ul> `document.getElementbyId('app').innerHTML = /*HTML*/}`|   
|**CONTROLLER :** *code you write, takes the building blocks and organises them appropriately*|
||`function controllerFunction(var1, var2, var3){`<ul> `change var in the code }`|

## random Js stuff

``` html

<input id="input" type="text" placeholder="description" onkeypress="handleKeyPress(event)">

<script>
   function handleKeyPress(event) {
      if (event.key === "Enter") {
         //code you wanna
      }
   }
<script>
```

``` html
<!-- BUTTONS -->

<!-- arbitrary -->
<button id="idk" onclick="changeBackground()">Chosen color</button>

<!-- arbitrary to innerHTML-->

<div class="colors"> 
   <button onclick="changeBackgroundTo(this)">Blue</button>
   <button onclick="changeBackgroundTo(this)">purple</button>
   <button onclick="changeBackgroundTo(this)">grey</button>
</div>

<script>
   function changeBackground(){
      document.getElementById('page').style.backgroundColor = 'lightblue'; 
   }
   function changeBackgroundTo(button){ //what HTML element "this" is (<...>)
      let color = button.innerHTML.toLowerCase();
      document.getElementById('page').style.backgroundColor = color;
   }
</script>

<!-- INPUTS -->
<input type="number, text" onkeydown="if (event.code === 'Enter') event()"> //to detect enter being pressed 
```

Okay, let's add the explanations, use cases, and syntax for the JavaScript array methods you listed, formatted in Markdown.

## JavaScript Array Methods

These methods are fundamental for manipulating arrays in JavaScript.

### `.push()` 

(`.append` the original array, and `.len()` for the new array)

* **Explanation:** Adds one or more elements to the *end* of an array and returns the new length of the array. This method modifies the original array.
* **Syntax:** `array.push(element1, element2, ..., elementN)`
* **Use Cases:**
    * Adding a new item to a shopping cart.
    * Appending data received from a server to a list displayed on a webpage.
    * Building an array of user inputs.
* **Example:**

    ```javascript
    let fruits = ["apple", "banana"];
    console.log(fruits); // Output: ["apple", "banana"]

    let newLength = fruits.push("orange", "grape");
    console.log(fruits);      // Output: ["apple", "banana", "orange", "grape"]
    console.log(newLength);   // Output: 4
    ```

### `.pop()`

(`.del()`)

* **Explanation:** Removes the *last* element from an array and returns that removed element. This method modifies the original array. If the array is empty, it returns `undefined`.
* **Syntax:** `array.pop()`
* **Use Cases:**
    * Removing the last viewed item from a browsing history.
    * Implementing an "undo" functionality.
    * Processing items from a stack data structure (Last-In, First-Out - LIFO).
* **Example:**

    ```javascript
    let fruits = ["apple", "banana", "orange"];
    console.log(fruits); // Output: ["apple", "banana", "orange"]

    let lastFruit = fruits.pop();
    console.log(fruits);      // Output: ["apple", "banana"]
    console.log(lastFruit);   // Output: "orange"

    let emptyArray = [];
    console.log(emptyArray.pop()); // Output: undefined
    ```

### `.shift()`

* **Explanation:** Removes the *first* element from an array and returns that removed element. This method modifies the original array and shifts all other elements to a lower index. If the array is empty, it returns `undefined`.
* **Syntax:** `array.shift()`
* **Use Cases:**
    * Processing tasks from a queue (First-In, First-Out - FIFO).
    * Removing the oldest item from a list to maintain a fixed size.
    * Handling events in the order they occurred.
* **Example:**

    ```javascript
    let fruits = ["apple", "banana", "orange"];
    console.log(fruits); // Output: ["apple", "banana", "orange"]

    let firstFruit = fruits.shift();
    console.log(fruits);       // Output: ["banana", "orange"]
    console.log(firstFruit);    // Output: "apple"

    let emptyArray = [];
    console.log(emptyArray.shift()); // Output: undefined
    ```

### `.unshift()`

* **Explanation:** Adds one or more elements to the *beginning* of an array and returns the new length of the array. This method modifies the original array and shifts all existing elements to a higher index.
* **Syntax:** `array.unshift(element1, element2, ..., elementN)`
* **Use Cases:**
    * Adding a high-priority item to the front of a task list.
    * Prepending data to an array.
    * Inserting elements at the start of a queue-like structure.
* **Example:**

    ```javascript
    let fruits = ["banana", "orange"];
    console.log(fruits); // Output: ["banana", "orange"]

    let newLength = fruits.unshift("apple", "mango");
    console.log(fruits);      // Output: ["apple", "mango", "banana", "orange"]
    console.log(newLength);   // Output: 4
    ```

### `.slice()`

* **Explanation:** Returns a *new* array containing a portion of the original array. It takes two optional arguments: `begin` (the starting index, inclusive) and `end` (the ending index, exclusive). If `end` is omitted, it extracts to the end of the array. It does *not* modify the original array.
* **Syntax:** `array.slice(begin, end)`
* **Use Cases:**
    * Creating a subarray from a larger array.
    * Copying parts of an array.
    * Extracting a specific range of elements for processing.
* **Example:**

    ```javascript
    let fruits = ["apple", "banana", "orange", "grape", "kiwi"];
    console.log(fruits); // Output: ["apple", "banana", "orange", "grape", "kiwi"]

    let slicedFruits1 = fruits.slice(2);      // From index 2 to the end
    console.log(slicedFruits1); // Output: ["orange", "grape", "kiwi"]

    let slicedFruits2 = fruits.slice(1, 4);   // From index 1 up to (but not including) 4
    console.log(slicedFruits2); // Output: ["banana", "orange", "grape"]

    let slicedFruits3 = fruits.slice();      // Creates a shallow copy of the entire array
    console.log(slicedFruits3); // Output: ["apple", "banana", "orange", "grape", "kiwi"]
    ```

### `.splice()`

* **Explanation:** Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It returns an array containing the deleted elements (or an empty array if no elements were deleted). This method *modifies* the original array.
* **Syntax:** `array.splice(start, deleteCount, item1, item2, ...)`
    * `start`: The index at which to start changing the array.
    * `deleteCount` (optional): The number of elements in the array to remove from the `start` index. If `0`, no elements are removed.
    * `item1, item2, ...` (optional): The elements to add to the array, beginning at the `start` index.
* **Use Cases:**
    * Inserting elements into the middle of an array.
    * Removing elements from a specific index.
    * Replacing elements within an array.
* **Example:**

    ```javascript
    let fruits = ["apple", "banana", "orange"];
    console.log(fruits); // Output: ["apple", "banana", "orange"]

    // Remove 1 element starting at index 1
    let removed1 = fruits.splice(1, 1);
    console.log(fruits);    // Output: ["apple", "orange"]
    console.log(removed1); // Output: ["banana"]

    // Remove 0 elements, and insert "grape" at index 1
    let removed2 = fruits.splice(1, 0, "grape");
    console.log(fruits);    // Output: ["apple", "grape", "orange"]
    console.log(removed2); // Output: []

    // Remove 1 element starting at index 0, and insert "kiwi" and "mango"
    let removed3 = fruits.splice(0, 1, "kiwi", "mango");
    console.log(fruits);    // Output: ["kiwi", "mango", "grape", "orange"]
    console.log(removed3); // Output: ["apple"]
    ```

### `.concat()`

* **Explanation:** Returns a *new* array that is the result of merging (or concatenating) the calling array with other array(s) and/or value(s). It does *not* modify the original arrays.
* **Syntax:** `array.concat(value1, value2, ..., valueN)`
    * `valueN`: Arrays or values to concatenate into the new array.
* **Use Cases:**
    * Combining two or more arrays into a single array.
    * Adding individual elements to the end of an array (though `push` is often preferred for this).
* **Example:**

    ```javascript
    let arr1 = [1, 2];
    let arr2 = [3, 4];
    let arr3 = [5, 6];
    let value = 7;

    let combinedArray1 = arr1.concat(arr2);
    console.log(combinedArray1); // Output: [1, 2, 3, 4]

    let combinedArray2 = arr1.concat(arr2, arr3);
    console.log(combinedArray2); // Output: [1, 2, 3, 4, 5, 6]

    let combinedArray3 = arr1.concat(value);
    console.log(combinedArray3); // Output: [1, 2, 7]

    let combinedArray4 = arr1.concat(arr2, value);
    console.log(combinedArray4); // Output: [1, 2, 3, 4, 7]

    console.log(arr1); // Output: [1, 2] (original array is not modified)
    ```

This detailed explanation with syntax and use cases should provide a good understanding of these essential JavaScript array methods.