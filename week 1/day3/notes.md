# Hyperlinks

Hyperlinks take us from one page to another, when we click it. You can create a hyperlink  like so:

```
<a href="https://google.com" target="_blank" rel="noopener noreferrer">Click me</a>
```
The href tells us the path of the page we wnat to link to - this can be relative (to the file we are editing), or absolute (eg: https://google.com).

Please note that the href must go within the opening a tag ( *before the `>`*)

To make it open in a new tab, you add target attribute (value is "_blank") and the rel attribute as follows:

```
<a href="https://google.com" target="_blank" rel="noopener noreferrer">Click me</a>
```


## Stylesheets

External stylesheets allow us to keep the code tidier and less cluttered. You need to save a stylesheet with a `.css` suffix. In your HTML document, you need to link the stylessheet using the <link> tag, like so:

```
<link rel="stylesheet" href="path/to/your/stylesheet.css">
```

## Writing css

Css is allows us to change the visual side of our webpage. It allows us to apply "styles" to html elements.

For example I can apply a style to a paragraph like this: 

```
p {
    color:red;
}
```

The syntax is as follows:

```
selector {
    css-property: value
}
```

you can add comments in css like this:

```
/* Add some explanation or comment about your code here */
```

## classes

Classese are attributes you add to you html tags. They are identifiers they allow us to identify and specify certain elemtents in our css rules (in even in javascript). 

For example if I add a class of "myclass" to a div, then apply a css rul to select .myclass itthe css rule will only apply to that class of div, and not others.

To use class selector in css, precede the classname with a **`.`**

Example of adding a border to a div with the class of box:

html:
```
<div class="box"></div>
<div></div>
```

css:
```
.box {
    border: 1px solid black;
}
```
*Note: the border will only be applied to the first div*

# Ids
An Id is similar to a class in that it adds an identifier to our html element, but with an id it is a unique identifier - ie you should not have more than one of them on the document.

Example:
html:
```
<div id="box1"></div>
```

css:
```
#box {
    border: 1px solid black;
}
```
To use id as selector in css, precede the classname with a **`#`**

## Nested css

You can target **children** by writing the parent selector, followed by a space and then the child selector. For example, to apply styles to a ul within a div with the class "box", do this:

```
.box ul {
    /* my css properties and values here */
}
```

# Homework challenge

Create a bio page in html, with an external stylesheet. Try to apply some styling to the page as best you can.

- Photo of yourself (or random image)

- Your name in a Header one tag

- Subtitle

- a bio paragraph

- Some social media links




