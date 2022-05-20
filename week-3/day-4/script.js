// const dogs = [
//     'Labrador', 'Chihuahua', 'Alsation'
// ]

// function delayedOutput(array) {
//     // console log the name of each dog from the dogs array,
//     // there should a 1 second delay between each dog
//     for (let i = 0; i < array.length; i++) {

//         setInterval(function() {
//             console.log(array[i]);
//         }, 1000);
//     }
// }
// delayedOutput(dogs);



// function sayHello() {
//     console.log('Hello');
// }
// setTimeout(sayHello, 1000);


// IMAGES example

const imageUrls = [
    'images/img-1.jpg',
    'images/img-2.jpg',
    'images/img-3.jpg'
]


function clickHandler(event) {
    const el = event.target;
    console.log(el);
    if (el.classList.contains('active')) {
        event.target.classList.remove('active');
    } else {
        event.target.classList.add('active');
    }
}

const thumbs = document.getElementsByClassName('thumbnail');
console.log(thumbs);

for (let i = 0; i < thumbs.length; i++) {
    const thumbnail = thumbs[i];
    thumbnail.addEventListener('click', clickHandler)
}

// .addEventListener('click')


function doImage(url) {
    const div = document.getElementById('mydiv');
    const img = document.createElement('img');
    img.src = url;
    img.className = "thumbnail";
    mydiv.appendChild(img);
}



// function displayBigImage() {

// }

// for (let i = 0; i < imageUrls.length; i++) {
//     doImage(imageUrls[i]);
// }





// const myString = 'Quote of the day: &quot;Some quote&quot;';
// document.getElementById('mydiv').innerHTML = myString;




















// const names = [
//     'Anna',
//     'Paul',
//     'Sophie'
// ]

// console.log(dogs.length);
// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }

// function makeSentence(person, dog) {
//     const x = getRandomInt(names.length);
//     return names[x] + "'s favourite dog is " + dog
// }

// for (let i = 0; i < dogs.length; i++) {
//     // console.log(dogs[i]);
//     console.log(makeSentence('John', dogs[i]));
// }

// WHILE LOOP
// let text = "";
// let i = 0;
// while (i < 10) {
//     text += "The number is " + i + "<br>";
//     i++;
// }

// const div = document.getElementById('mydiv');
// console.log(div);
// div.innerHTML = text;