# Responsive design

Responsive design is making a website work on different devices. Previously, before media queries were invented, everything would either just get shrunk to the size of the device screen (viewport) - making text really small and unreadable, or you would have to scroll across horizontally etc.. which was really bad user experience.

Responsive design means you are providing a better user experience, eg. more legible, more visually pleasing, dependent on the divice width ( viewport size).

## Media queries

In css we can define different styles for different viewport sizes using media queries.
A media query looks something like this:

```
@media (min-width: 768px) {
    
}

```

You can write `screen only` but it is there by default. If you pref to include it do the following:

```
@media screen only and (min-width: 768px) {
    
}
```

## Breakpoints

Breakpoints are the (usually) px value viewport widths at which a media query will kick in.

You usually have breakpoints for the common device sizes eg mobile, tablet (portrait and horizontal), desktop etc...

We can get some basic breakpoints from Bootstrap (bootstrap is a css library that you can add to your site, but that is another story).

They are:

- 576px, 
- 768px, 
- 992px, 
- 1200px, 
- 1400px

## min width, max-width

You can define media queries as min-width or max-width. The following says all css inside this media query will take effect when the viewport is **at least** (ie more than) 768px:

```
@media (min-width: 768px) {
    /* some styles*/
}
```

The following means styles take effect when it viewport is **no more than** 768px: 
```
@media (max-width: 768px) {
    /* some styles*/
}
```

You can also for really specific targetting, combine min and max widths so it takes effect **between two breakpoints**:

```
@media (min-width:576px and max-width: 768px) {
    /* some styles*/
}
```

## Common strategies

If you are using a MOBILE_FIRST way of working, you would use min-width media queries.. This means you are first thinking about your default styles FOR MOBILE (eg those outside of any media query). Then the deskptop styles get defined in the media queries, almost as an after thought.

The opposite would be desktop first approace., and you wuold use max width in your media queries.

Your approach will depend on specifics, but often people interact more with websites on mobile, so bear this in mind.


# Hide/show things

You can hide or show things on mobile by setting `display:none;` or `display:block;` inside a media query. Remember to nest the whole css rule with selector included.

```
.desktop-image {
    display:block;
}
@media (max-width: 768px) {
    .desktop-image {
        display:none;
    }
}
```

## Change layout

A common thing to do is change layout by defining different flex properties for elements within media queries.

## Responsive images 

You can use the `picture` tag or _srcset attributes_ to create responsive images (ie. load different images at different breakpoints). I will will explain this a bit more tomorrow.

### picture
Example of picture tag:
```
<picture>
    <source media="(min-width: 768px)" srcset="path/to/rectangleimage.jpeg">
    <img src="path/to/squareimage.jpg" alt="random">
</picture>
```

### just img with srcset
You can also acheive responsive images using just the image tag, but I recommend going with the picture tag as it is easier to get working.

If you want to try though it is like this:
```
<img src="image.jpg" 
     srcset="small.jpg 300w,
             medium.jpg 600w,
             large.jpg 900w"
/>
```
### background images
Finally, you can change the background image of a div in a media query, but first we need to cdo background-images, which we will cover tomorrow.



## Homework challenge

Create a coloured background hero banner which takes up the full width of the page, but only takes up a one third of the height of the viewport. 

On  Mobile it should take up the full height of the mobile viewport. 

Stretch task :

Add some text in the center of the banner (you can do this with flex).


## Tther challenge

With the 3 column preview card we did for yesterday's homework. Make it so the cards stack on top  of each other on a mobile, but are side by side on desktop.

Hide the button on mobile.

Instead of the button replace it with a link that says "learn more".

