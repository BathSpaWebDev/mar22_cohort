
An HTML tag has an opening tag and a closing tag. They look something like this:

```
<tagname>...something inside</tagname>
```

This is an example of a paragraph tag:
```
<p>Child</p>
```

## HTML document

An html document starts with a Doctype - This does not have a closing tag and looks like this: `<!DOCTYPE html>`

Everything in our html document goes inside an html tag. When another element is placed inside another element this is called 'nesting'.

```
<html>
...
</html>
```

Inside the html tag, we have the **head** and the **body** tag.

## head tag
In the head we put information about the html documen - things like title tag, links to stylesheets, meta tags (for SEO etc..).


```
  <head>
    <title>My title</title>
  </head>
```


## body tag
The **body** tag is where all our visible content goes inside

```
  <body>
    <h1>Example HTML paragraph</h1>
    <p>Example HTML paragraph</p>
    <p>Example HTML paragraph</p>
  </body>
```

Putting it all together it look like this:

```
<html>

  <head>
    <title>Demo website</title>
  </head>

  <body>
    <h1>Example HTML paragraph</h1>
    <p>Example HTML paragraph</p>
    <p>Example HTML paragraph</p>
  </body>

</html>

```


_**Shortcut**_

In atom you can install [autocomplete-snippets](https://atom.io/packages/autocomplete-snippets) then:

Open up Atom,  save as .html file. With the blank document open, type _html_ and then press _enter_ - it will create a basic html template for you.

In VS Code it can be done by follwing this [guide](https://marketplace.visualstudio.com/items?itemName=sidthesloth.html5-boilerplate)
