
## Flexbox 

Flex box is a css layout system that enables us to create layouts, that work flexibly - ie they work independent of the content in the flex container.

Flexbox  makes things easier - before we had to use things like `float`, which could cause knock-on effects and layout issues that were hard to debug ( and was often trickier to acheive more complex, nested layouts).

### How Flex works

It consists of a flex-container, and flex items ( these are the elements within the container). We define a flex container by applying a css property to the parent element, like so:

css
```
.flex-container {
    display: flex; 
}
```

html:
```
<div class="flex-container">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
</div>
```

Once the flex container is set, you can apply other flex properties that determine the behaviour of the inner elements (flex items)

## justify-content
With this property place theflex item either at the beginning, middle or end on the x axis. This allows us to easily center a div in a box for example. 


## align-items
align-items vertically aligns items. But you have to set the height of the container for this to work.

## flex-wrap 
Setting flex wrap on the container makes the items go onto the next line when they exceed the width of the container. By default items do not wrap, it tries to squeeze all items onto one line (which sometime is not what you want)

# Creating a center-aligned logo

We can easily make a div(e.gl a div containing a logo) sit in the vertical and horizontal center of the page.

Set the container to be full width and height of the viewport using height:100vh;width:100vw;

Then use `justify-content:center;`, and `align-items:center;` to make the logo div sit in the middle.

## Psuedo elements

Psuedo classes look liike this `:name-of-puedo-class` .They start colon.

Some example of psuedo classes are :hover, :visited.

You can apply styles to elements when you hover over them like this:

```
.mydiv:hover {
    /*Add some hover styles*/
}
```

Creating a hover effects on a list of links:

html
```
 <nav>
        <ul>
            <li>
                <a href="#">Link 1</a>
            </li>
            <li>
                <a href="#">Link 2</a>
            </li>
            <li>
                <a href="#">Link 3</a>
            </li>
        </ul>
    </nav>
```

css

```
ul {
    list-style: none;
}
ul li {
    display:inline-block;
    width:60px;
    height:40px;
    background:#e9e9e9;
}

ul li a {
    text-decoration:none;
}

ul li a:hover {
    text-decoration:underline;
}

ul li a:visited {
    color:red;
}

```