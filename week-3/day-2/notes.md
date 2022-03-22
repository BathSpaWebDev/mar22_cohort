## Functions

A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).

Function looks like this

```
function nameOfFunction(parameter1, parameter2) {
    //code to be excuted
}
```

to call a function we do this:
```
nameOfFunction(value1, value2);
```
## Why we use functions

We use functions to create reusable code. So we can call the same function multiple times, without writing all those lines of js again.

We can pass in different values each time the function is called.

## Conditionals

A conditional statement allows us to perform certain tasks if a condition is met. 

The syntax for a consition is as follows:
```
 if ( /* condition goes here */ ) {
    // js to be carried out if true
}
```

## Operators

**Comparison operators** are symbols you use to compare values, and are mainly used inside a condition:

- `===` is exactly equal to 
- `>` Greater than
- `>=` greater than or equal to etc..

**Logical operators**

You can have more than one considtions using these logical operators:
- `&&` And
- `||` Or

eg.
```
if( a === b && a < c ){
    // only executes if both conditions are met
}
if( a === b || a === c ){
    // only executes if one or the other condition is met
}
```
## Homework
1.
Come up with 3 functions that perform some arithmetic and use comparison operators to output a message if a ondition is met.

See example done in class.

For example if number is less than another one, then log a message to the console (or add a message to the HTML). 

2. Try and add the date to your bio page, maybe under the title. Use this code (this is just to give an example of something dynamic you can do with javascript):

```
const date = new Date();

const formattedDate = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'full'
}).format(date)

// add it to the htHTML - demo is an html element (you have to use getElementBy...)
demo.innerHTML = formattedDate;

```




