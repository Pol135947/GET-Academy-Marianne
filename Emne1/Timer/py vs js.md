# py vs JS

## Methods

|Python|Javascript|
|-|-|
|`def function():`|`function name(){}`|
|`.append()`|`.push()`|
||`.join()`|
|`for letter in word:` <br> <ul>`if letter in vowelsList:`| `for (let letter of word) {` <br> <ul>` if vowelsList.includes(letter){`<br>`}`<br>`}`|
|`.lower()`|`.toLowerCase()`|
|`for i in range (start, stop):`|`for (let i = start; i < end; i++){`<br>`}`|
|`name =`|`let, var, const name = `|
|`if condition:` <ul> `event`| `if (condition){`<ul>`event;}`|
|`elif condition:` <ul> `event`| `if else (condition){`<ul>`event;}`|
|`else:` <ul> `condition`| `else {condition}`|
|`while condition:`|`while (condition){}`|
|reverse list: <br>`list[::-1]`| `list.split("").reverse().join("");`|
|`f"something {number}"`|`` `something ${number}` ``|
|Lists|Arrays|
|`numbers = [1, 2, 3, 4];`<br>`words = ["Hei", "på", "deg"];`<br>`for n in numbers:`<ul>`print(n)`|`let numbers = [1, 2, 3, 4];`<br>`let words = ["Hei", "på", "deg"];`<br>`for (let i = 0; i < numbers.length; i++){`<ul>`console.log(numbers[i]);}`|
|`word = str(input())`|HTML : `<input id="word" type="text" handling ="function()">` <br> JS:`document.getElementById("word").value`|

### random Js stuff

``` html

<input id="input" type="text" placeholder="description" onkeypress="handleKeyPress(event)">

<script>
   function handleKeyPress(event) {
      if (event.key === "Enter") {
         //code you wanna
      }
   }
```