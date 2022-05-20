## Background images

Background images let us apply an image to an element using CSS. **Do not confuse them with the img html tag**. Background images are not read by google so are not as good as a img tag in terms of SEO. However sometimes it is easier to acheive certain things with a bacckground image than with the img tag.

To set a background image, do the following:
```
.myElement {
    background-image: url('path/to/image.png');
}
```

you will probably need to set some other properties t make the image appear as you want it:
```
.myElement {
    background-image: url('path/to/image.png');
    background-repeat: no-repeat;
    background-size:cover;
    background-position:center;
}
```
You can learn about all these different properties by searching for them on w3schools or Mozilla.

## Restaurant project

For homework build the homepage of your dummy website. The idea is for you to practise things you have learnt from the first 2 weeks.


You can use the code from the restaurant-site folder.
