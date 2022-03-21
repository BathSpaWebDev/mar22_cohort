## CSS trnsform

Css transform is a css property that allows us to interact with elements. There are a number of types of tranform we can apply to elements. You can find them all [HERE](https://www.w3schools.com/cssref/css3_pr_transform.asp).

In class we have covered two different types of transform - rotate and translate.

With these examples we have created a spinning effect, and a slide-in text.

To make something rotate when we hover over something, you can apply the transition property, e.g. `transition: transform 2s;` - this means any change to the transform property will take 2s to complete. We then add the change to the transform property inside our :hover css rule 

Here is the code for the example: 

html
```
<div class="box">
    <div class="box__inner">
        <span>Hover over me</span>
    </div>
</div>
```

css
```
.box__inner {
    background-color: green;
    padding: 2rem;
    width: 140px;
    height: 140px;
    color: #fff;
    font-size: 2rem;
    transition: transform 1s;
}

.box:hover .box__inner {
    background-color: red;
    cursor: pointer;
    transform: rotateY(360deg);
}
```

In order to make something slide in we set the transform property's _translateX_ value, and we use transtion to  control the duration of the change.

The code is like so:

html
```
 <div class="box">
        <div class="box__inner">
            Lorem ipsum dolor at nesciunt, laudantium possimus fuga quae maiores quis nulla?
        </div>
    </div>
```

css
```
.box {
    width: 400px;
    height: 400px;
    background-color: blue;
    overflow-x: hidden; /*this hides anything that is outside of its perimiter */
}
.box .box__inner {
    width: 100%;
    height: 100%;
    background-color: red;
    transform: translateX(-100%);
    transition: 1s transform linear;
    color: var(--brand-col-2);
    padding: 10px;
}

.box:hover .box__inner {
    transform: translateX(0);
}
```

Nb: We set the default position to be 100% to the left, so it is effectively hidden as we are using overflow:hidden;
Then in our :hover css rule (note that :hover is on the parent container .box and not on .box__inner), we set the .box__inner to `transform: translate(0);` so it will move into the center of the box.

## ems and rems

ems and rems are both units of measurement based on relative to a font-size. **em** is relative to the parent element's font-size.

So if a div has a font-size set to 40px. and a child of that div has a font-size set to 2em will be computed as 80px.

**rem** (root em) is relative to the font-size of the root element. So if you set the html font-size it will affect the font sizes that are set in rem accordinly.

## Calc function

The calc function is a way of calulating a value from another value. 

Take this example. It will calculate the font size as 2em (computed as 40px because the parent font-size is 20px ie. 2 times 20px = 40px) minus 4px.

```
.example {
    font-size: 10px;
    font-size: 20px;
}

.example p {
    font-size: calc(2em - 4px);
}

```
Another use of calc could be to calulate a tenth of the viewport with:

```
.mydiv {
    width: calc(100vw / 10);
}
```

## Variables

Variables allow us to store a value that we can reuse over and over again. For axample we can store a brand colour in a variable, then call the bran colour in multiple places in our css.

The great thing is if you want to later change that colour lightly, you don't have to search through and find every place you wrote the colour, you just chang the variable value once.

To call variable in css, you use the :root psuedo element (write this at the top of your css file):

```
:root {
    --brand-colour: #00ff00;
}
```
Then to call the variable in a css rule:
```
h1 {
    color: var(--brand-colour);
}
```

## Keyframe animations

For more flexibility with animations we can use the `@keyframes` feature that was introduced with css3.

Basicallly, keyframes define your animation - and can think of it like a timeline.

To reuse our example of rotating a box but get it to constantly spin around, you can make this keyframe
```
@keyframes myRotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(180deg);
    }
}
```
Then add it to your css rule using the animation property.

```
.box-to-rotate {

    /* set height, width and other css here */

    animation: rotation 5s linear infinite;
}
```

## Homework

1. Please create some animations using transtion and transform in combintation. If you feel up to it, try doing it with @keyframes. Be as creative as you like!

2. If you have time, have a go at the frontend layout challenge. You can download the design files and starter code [here](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-/hub/3column-preview-card-component-1g2OdvYOh)