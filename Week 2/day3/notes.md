## Responsive

Responsive design is making a website work on different devices. Previously, before media queries were invented, everything would either just get shrunk to the size of the device creen - making text really small and unreadable, or you would have to scroll across horizontally etc.. which was really bad user experience.

Responsive design means you are providing a better user experience, eg. more legible, more visually pleasing, dependent on the diveice width ( viewport size).

## Media queries

In css we can define different styles for different viewport sizes using media queries.
A media query looks something like this:

```
@media and (min-width: 768px) {
    
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


## challenge

With the 3 column preview card. Make it so the cards stack ontop  of each other on a mobile, but are side by side on desktop.

Hide the button on mobile.

Instead of the button replace it with a link that says "learn more".