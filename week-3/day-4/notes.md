# creating HTML in Javascript

Make sure you plan out the html that you are wanting to create. Then write out the steps you need to do, eg _create paragraph element and store in variable_ 


```
const div = document.createElement('div');
```

<div></div>

```
const para = document.createElement('p');
```

<p>...innerHTML...</p>

```
para.innerHTML = person.age;

div.appendChild(para);
```
```
<div>
    <p>...person.age...</p>
    <p>...person.name...</p>
    <p>...person.haircolour...</p>
</div>
```
## Difference between using .appendChild and .innerHTML
- innerHTML is mutable, this means that the content get REPLACED
- appendChild, ADDS something to what is there

## PSUEDO CODING
Define what you want to acheive
Detail all the steps you will need to take in ordert o get there. 

## Loops

Loops are when you iterate through an array of items, or a series defined by a counter.

### for loops

A for loop has slightly odd syntax:

```
for (set a counter; set a condition; modify your variable) {
    // this code runs while your condition is true
}
```

Let's look at a real example:
```
// set a counter (using a variable called i): let i = 1
// set a condition: i < 10
// modify your variable: i++
for (let i = 1; i <= 10; i++) {
    // prints the numbers 1 to 10
    console.log(i)
}
```

As long as i is less than or equal to 10, it will run the code inside the curly braces ({ and }). At the end of every loop, it will run i++ - all that does is add 1 to i. It is the same as doing i = i + 1. Then, it will check the condition again (is i still less than, or equal to, 10?). If it is, it will run the code again.

### continue
Sometimes we don't want the code to run for every number. Let's look at this example, using the length of an array:

```
const fruit = ["apple", "banana", "tomato", "grape"]
for (let i = 0; i < fruit.length; i++) {
    console.log("I am adding " + fruit[i] + " to my fruit salad.")
}
```

I don't know about you, but I don't want tomato in my fruit salad!! We can skip to the next loop using continue.

```
const fruit = ["apple", "banana", "tomato", "grape", "apricot", "orange"]
for (let i = 0; i < fruit.length; i++) {
    if (fruit[i] === "tomato") {
        // skips to the next loop
        continue
    }
    console.log("I am adding " + fruit[i] + " to my fruit salad.")
}
```
Anything below the continue keyword will not run in that iteration.

### break
break will end the entire loop; it will not skip to the next iteration.
```
const fruit = ["apple", "banana", "tomato", "grape", "apricot", "orange"]
let fruitSalad = []
for (let i = 0; i < fruit.length; i++) {
    fruitSalad.push(fruit[i])
}
```
This example will add fruit to a fruit salad. However, my fruit salad can have a maximum of three fruits in it. When I've put in three fruit, I want to stop running the for loop. We can do that using break.
```
const fruit = ["apple", "banana", "tomato", "grape", "apricot", "orange"]
let fruitSalad = []
for (let i = 0; i < fruit.length; i++) {
    fruitSalad.push(fruit[i])
    if (fruitSalad.length === 3) {
        // stops the for loop
        break
    }
}
```
### putting continue and break together
In our example above, my fruitSalad array will contain apple, banana and tomato. If we combine continue and break we can remove the tomato easily:
```
const fruit = ["apple", "banana", "tomato", "grape", "apricot", "orange"]
let fruitSalad = []
for (let i = 0; i < fruit.length; i++) {
    if (fruit[i] === "tomato") continue
    fruitSalad.push(fruit[i])
    if (fruitSalad.length === 3) break
}
```
Here's something to note: if you're only doing an if statement on ONE line, you don't need curly braces.

## Escaping characters

Use backslash in a string to escape characters. Examples:

`"5'1\""`

`'5\'1"'`

`"Jane says, \"Hi\""`

You can also use [**HTML Entities**](https://www.w3schools.com/html/html_entities.asp)

## String interpolation

String interpolation is one way of using the value of a variable in a string.

Use backticks instead of single or double quotes for the string, and use the syntax ${variableName} to put the value of a variable into the string.
```
const greeting = "Hello"
console.log(`${greeting} Mike`)
```
Another way to use the value of a variable in a string is concatenation:
```
const greeting = "Hello"
console.log(greeting + " Mike")
```
Both of these code examples will output Hello Mike in the console.

## Homework

