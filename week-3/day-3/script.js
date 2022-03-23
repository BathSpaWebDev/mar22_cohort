// const fruits = [
//     "apple",
//     "orange",
//     "pear"
// ]

// console.log(fruits);
// const selectedFruit = fruits[2];

// console.log(selectedFruit);
///


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



/* 

create a new object called person

create a function that will add the person details to the page. 

The function will accept a parameter for person.

It will the create the html and inject to into the document.

*/


function printPersonDetails(person) {
    /* 
    get age and store in variable 
    get name and store in variable 
    get hair colour and store in variable 
    */

    //1. create a containing div that will wrap the person html
    //2. Create and store in a variable a paragraph that will contain the NAME information - Use document.createElement('p')
    //3. Create and store in a variablea paragraph that will contain the AGE information
    //4. Create and store in a variable a paragraph that will contain the HAIR COLOUR information

    // 5. Append the paragraphs to the containing div using appendChild()
    // 6. Append the containing div to the html document
}

printPersonDetails(person1);
printPersonDetails(person2);