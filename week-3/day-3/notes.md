## Object data types

## Importing an external js script

You can import an external script by including it at the end of (but inside) the <head> tag. If you do it this way you should use the keyword **defer** so it loads at the end of the HTML.

The script tage should look like this:
`<script src="script.js" type="text/javascript" defer></script>`

Alternatively you can include the script, without defer, at the bottom of the body like this:

`<script src="script.js" type="text/javascript"></script>`

Notethat the src attribute must match the relative path to the script.js file where you are writing your javascript.

### Object

syntax:
```
let object = {
  property: value,
}
```
To access an object in javascript you can use either: 
`object.property` or `object['property']`

### Array
Arrays are a special type of object but they don't have named properties.

syntax:
```
let array = [
  'value',
  'another value'
]
```
Array items have a key and a value - like 0: myvalue To access an array in javascript you can use: array[0] the number in the square brackets being the key of the array item. Sequences of indexes in js begin with 0.. then 1, 2, 3 etc..


### Homework

Start a new project folder, with a fresh index.html, and a script.js (external script imported into your html)

Inside your script js: 
Create two objects called **person1** and **person2**

Decalre a function that will add the person details to the page. It will be a reusable function that will output html in your html document - it should output different values depending on the object that is passed in.

The function will accept a single parameter (person). 

Here is some code to help you get started, it has some psuedo code to plan what we are going to do:

```
const person1 = {
    name: 'Joe Bloggs',
    age: 56,
    hairColour: 'brown'
}

const person2 = {
    name: 'Sarah Brown',
    age: 44,
    hairColour: 'blonde'
}

function printPersonDetails(person) {
    /* 
    get age and store in variable 
    get name and store in variable 
    get hair colour and store in variable 
    */

    //1. create a containing div that will wrap the person html - Use document.createElement('div')
    //2. Create and store in a variable a paragraph that will contain the NAME information - Eg. let agePara = document.createElement('p');
    //3. Create and store in a variablea paragraph that will contain the AGE information
    //4. Create and store in a variable a paragraph that will contain the HAIR COLOUR information
    // 5. Add the age to the age paragraph using innerHTML e.g agePara.innerHTML = age;
    // 6. Add the name to the name paragraph 
    // 7. Add the hairColour to the hair colour paragraph 


    // 8. Append the paragraphs to the containing div using appendChild()
    // 9. Append the containing div to the html document

    // write your ACTUAL code here inside the function curly brackets
}

printPersonDetails(person1);
printPersonDetails(person2);
```