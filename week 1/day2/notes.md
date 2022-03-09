## Headings

Heading tags are very important for SEO, they tell the browser (and the user) that it is a heading and that it is an important signpost for users.

There are 6 h tags - h1, h2, h3, h4, h5, h6

## Paragraphs

The p tag means it is a paragraph. Every p tag will start on a new line and by default will have some space below it.

## strong tag
This makes the text bold

## Lists
There are two types of list, ordered lists and unordered list. Ordered lists by default have a number on each list item. The syntax is like so:

unordered:
```
    <ul>
        <li>List one</li>
        <li>List two</li>
        <li>List three</li>
    </ul>

```
ordered:
```

    <ol>
        <li>List one</li>
        <li>List two</li>
        <li>List three</li>
    </ol>
```


## To indent
`Command + ]`  - (On windows replace cmd with ctrl)

## To format
`Command + shift + f`

## Wrapping in tags
Open up command palette `cmd + shift + p` then choose settings on Emmet:wrap with abbreviate and enter the command you want to use to wrap something in a tag. 

## Default positioning
BLOCK vs Inline

- **Block elements** take up the full width of the container, and start on a new line. Examples of block elements are paragraph, div, heading tags, section.

- **Inline elements** only take up the width of the whatever is inside the tag. They do not start on a new line. They are left to right.
span, em, strong are all inline elements.

## Divs
Divs are containers /dividers, they help us divide our content into smaller manageable blocks of content.

## Semantic html
In addition to divs there are some other layout elements that behave the same as a div, but give more information about what the content is. These are said to be more 'semantic'.

Semantic HTML is using html tags that have meaning, and give the user and screen readers, as well as google bots signposts for what the content is about.

<section></section>
<article></article>
<nav></nav>

section should be used when you have a block of related content.

An article represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable. It is common to wrap a blog post in an article tag.

You should use <div> when there is no other more semantically appropriate element that suits your purpose. 

Span is a useful inline element that allows you to add a different identity or class to one part of an element. It is like a sub divider.

## HTML attributes
HTML attributes provide additional information about HTML elements.

We have seen the style attribute used for adding css inline. The structure of an attribute is:
` nameofattribute="" `

for example, `style="color:red;"` 

Attributes go inside the opening tag - eg a title attribute: 
`<div title="my title"></div>`

## Img tag

Image tag is self-closing - this means you do not need to have a closing tag. The src atttribute tells you where to look for the image.
`<img src="https://picsum.photos/200/100" alt="random image" >`