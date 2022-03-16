# Responsive design

Responsive design is making a website work on different devices. Previously, before media queries were invented, everything would either just get shrunk to the size of the device creen - making text really small and unreadable, or you would have to scroll across horizontally etc.. which was really bad user experience.

Responsive design means you are providing a better user experience, eg. more legible, more visually pleasing, dependent on the diveice width ( viewport size).

## Media queries

In css we can define different styles for different viewport sizes using media queries.
A media query looks something like this:

```
@media (min-width: 768px) {
    
}

```

You can write `screen only` but it is thehere by default


## Breakpoints

Breakpoint the (usually) px value viewport widths at which a media query will kick in.

You usually have breakpoints for the common deveice sizes eg mobile, tablet (portrait and horizontal), desktop etc...

We can get some basic breakpoints from Bootstrap (bootsrap is a css library that you can add to your site, but that is another story).

They are:

- 576px, 
- 768px, 
- 992px, 
- 1200px, 
- 1400px

## Responsive images 

You can use the `picture` tag or _srcset attributes_ to create responsive images (ie load different images at different breakpoints). I will will explain this a bit more tomorrow.

Example of picture tag:
```
<picture>
    <source media="(min-width: 768px)" srcset="path/to/rectangleimage.jpeg">
    <img src="path/to/squareimage.jpg" alt="random">
</picture>
```


## Homework challenge

Create a coloured background hero banner which takes up the full width of the page, but only takes up a one third of the height of the viewport. 

On  Mobile it should take up the full height of the mobile viewport. 

Stretch task :

Add some text in the center of the banner (you can do this with flex).


## Tther challenge

With the 3 column preview card we did for yesterday's homework. Make it so the cards stack on top  of each other on a mobile, but are side by side on desktop.

Hide the button on mobile.

Instead of the button replace it with a link that says "learn more".

