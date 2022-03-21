# Forms
Forms are used for capturing data from user input. There are many things you can do with the data when the form is submitted. For example you can post records to a database, send an email, save a excel/csv file etc..

# inputs
inputs are the fields where we get the input from the user. You can style them using css.
Each input can have a corresponding <label> tag.

You connect the label to the input using the "for" attribute.

## Submitting a form

When you click a button with the type set to "form" it carries out the onsubmit event ( which you can specify in javascript). If you are using php it carries out the action (specified in the action attribute).

## Example simple form html only
```
<form onsubmit="">
    <div class="form-row">
        <label for="first-name">First name</label><br>
        <input type="text" id="first-name" name="first-name" >
    </div>
    <div class="form-row">
        <label for="surname">Surname</label><br>
        <input type="text" id="surname" name="surname" >
    </div>

    <button type="submit">Submit form</button>
</form>
```
It is important to add a name and id to forms. You will learn more about capturing information from form input values later using these attributes.

_Nb: I have divided the form up into divs so I can easily style consistently accross all rows._

_Nb: There are other types of input, eg, radio, checkbox, email, phone - you can read about them [here](https://www.w3schools.com/html/html_forms.asp)_

# Position 
Position is a css property that determines how an element canbe positioned relative to other elements on the page. It is important in cacheiving different layouts, and moving. 

It is a fairly tricky concept to grasp, so focus on reading about it as much as possible as it will help you a lot in the long run.

## Position:relative;

Position relative follows the **document flow**, this means relative elements are placed left to right, and stacking on top of on another (if they are block elemtents). They take up space in the document flow, and other elements shift to after/below them. 

_(this is not the case with absolute positioned elements which are removed from this normal flow - ie they don't take up space and other elements act as if it wasn't there.)_

If I set the top offset on a relative element (eg. top: 100px;), it will move the element 100px from its original top boundary.


## Position:absolute;
When you set the box to absolute, it takes the box out of the normal document flow. Other elements around it behave as though it didn't exist.

Setting the top, left, right, bottom properties now moves the box relative to the 
**nearest parent container which is set to relative.**

eg. if I do the following:

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
...it will place the child div 15px from the right of the parent div's boundary and 100px from the bottom of the parent div. It is no longer relative to the viewport because the parent div has position relative.

## Fixed position

With `position:fixed;` it also takes the element out of the document flow. The difference is that setting the top, left, bottom, right properties **moves the box relative to the viewport (browser window).**

## Homework

### hw1
Create a square box with a coloured background, and legible text (make sure the contrast is enough to read). This needs to be `position:relative;`.

Inside the box, add a inner div, which will be `position:absolute;`

Place the inner div to the bottom right, by setting the right, and bottom properties ( as explained in the example today).

### hw2

Create a top trump card that is laid out similarly to the ebay example (see slack). Add a link to the div containing the image, so the link sits above the image to the bottom right of the container ( see sketch in slack).

[Link to Ebay example](https://www.ebay.co.uk/itm/163439171791?chn=ps&var=462774904504&norover=1&mkevt=1&mkrid=710-134428-41853-0&mkcid=2&itemid=462774904504_163439171791&targetid=1278608952936&device=c&mktype=&googleloc=1006502&poi=&campaignid=14727339348&mkgroupid=127909237815&rlsatarget=pla-1278608952936&abcId=9300672&merchantid=7267174&gclid=CjwKCAiA4KaRBhBdEiwAZi1zzlazU2G7PKuHT7et2UtZQNKPBkoUHHOBxSHiJjb6K776oKpTEMjbhBoCmUwQAvD_BwE)

