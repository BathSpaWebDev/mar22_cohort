# Javascript

Javascript helps us to make the webpages **interactive** and **dynamic**. We can do things like interact with html elments, change values, change colours, trigger animations, load different data, etc.

Take a look at a website like [Airbnb](https://www.airbnb.co.uk/) and click around, you will see there are lots of dynamic things that happen when you click on things. Most of this is handled with Javascript.

## Background 

Not to be confused with Java - they are quite different. Javascript was invented by Brendan Eich, the co founder of the Mozilla project. It was originally called ECMAScript, and later changed to Javascript.

You will still occisionallly see term like ES5, ES6, this relates to the original name. So basically, ES6 is the latest version of Javascript at the time of writing.

## Console

A good way of trying out j is by using the console, in Chrome dev tools for example ( also available in firefox/safari).

This is good for practise but ALSO good for **debugging** issues with your javascript.


## Variables

Variables allow us to store data, that we can use multiple times and perfom action with.

Since ES6 there are two main ways of declaring a variable, **let** and **const**.

Before all variables were declared with **var**, this is now kind of outdated way of doing it, but you can still use it for legacy browser support etc.

### The new variable declarations (const and let)

For both const and let you cannot accidentally declare the smae variable twice, whereas with var it was possible and led to problems in your code elsewhere that were hard to debug.

### Const
With const - you cannot reassign a value to it. That means you can't say:

BAD:
```
 const myNumber = 12;
 myNumber = 10;
```

## let
With let variables you can reassign values - but you cannot redclare.

eg,, this is fine:
```
 let myColour = '#e9e9e9';
 myColour = 'red';
```


## DATA TYPES IN JS

### Strings

Strings are a sequence of characters. A string is used to for text information. A string can also contain different characters and number" 

### Number

and integer of floating point decimal such as  or `2` or `1.245`

### object

An object looks like this 


Objects are declared with curly brackets. They have one or more key/value pairs. They are useful for storing multiple properties in a single variable. Like for example this car object:

```
 const car = {
    make: 'Volvo',
    model: 'X40',
    cylinders: 6,
 }
```

To get a single value:

```
console.log( car.make );
// OR
console.log( car["make"]);
```
Each key is the name of the peoperty, and the value can be any type of data, eg a number, string, another object, array etc..

Make sure you comma separate the properties rather than semi colon.

## Arrays 

An array is a type of object, but they only container the value - but each value has an index (represents the order of the item in the array). Eg
```
const fruits = ['apple', 'orange', 'pear']
```
This is the equvalent of:
```
const fruits = [
    0: 'apple', 
    1: 'orange', 
    2: 'pear']
```

To get a single fruit:

```
console.log( fruits[2] );
```

## Booleans

This is a true or false value. No need to use single quotes.
 Eg.
` let isSaturday = true;`
