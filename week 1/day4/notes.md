# Forms
Forms are used for capturing data from user input. There are many things you can do with the data when the form is submitted. For example you can post records to a database, send an email, save a excel/csv file etc..

# inputs
inputs are the fields where we get the input from the user. You can style them using css.
Each input can have a corresponding <label> tag.

You connect the label to the input using the "for" attribute.

## Submitting a form

When you click a button with the type set to "form" it carries out the onsubmit event ( which you can specify in javascript). If you are using php it carries out the action (specified in the action attribute).


# Position 
Position css property

## Position:relative;

If I set the top offset (eg. top: 100px;), it will move the box 100px from its original position.


## Position:absolute;
When you set the box to absolute, it takes the box out of the normal document flow. Other elements around it behave as though it didn't exist.

Setting the top, left, right, bottom properties now moves the box relative to the 
**nearest parent container which is set to relative.**

eg. if the parent container is set to position relative and I do the following:

```
div.parent {
    position:relative;
    height:200px; /* set the height in case there is no content */
}
div.child {
    position:absolute;
    bottom:100px;
    right: 15px;
}
```
It will place the child div 15px from the right of the parent div's boundary and 100px from the bottom of the parent div.

## Fixed position

With `position:fixed;` it also takes the element out of the document flow. The difference is that setting the top, left, bottom, right properties **moves the box relative to the viewport (browser window).**

## Homework

### hw1
Create a square box with a coloured background, and legible text (make sure the contrast is enough to read). This needs to be `position:relative;`.

Inside the box, add a inner div, which will be `position:absolute;`

Place the inner div to the bottom right, by setting the right, and bottom properties ( as explained in the example today).

### hw2

Create a top trump car that is laid out similarly to the ebay example (see slack). Add a link to the div containing the image, so the link sites above the image to the bottom right of the container ( see sketch in slack).

[Link to Ebay example](https://www.ebay.co.uk/itm/163439171791?chn=ps&var=462774904504&norover=1&mkevt=1&mkrid=710-134428-41853-0&mkcid=2&itemid=462774904504_163439171791&targetid=1278608952936&device=c&mktype=&googleloc=1006502&poi=&campaignid=14727339348&mkgroupid=127909237815&rlsatarget=pla-1278608952936&abcId=9300672&merchantid=7267174&gclid=CjwKCAiA4KaRBhBdEiwAZi1zzlazU2G7PKuHT7et2UtZQNKPBkoUHHOBxSHiJjb6K776oKpTEMjbhBoCmUwQAvD_BwE)

