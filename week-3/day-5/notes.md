# Events

Events are how we handle interaction with the user in javascript. When something happens, for example a user clicks, scrolls, submits a form, we can use this to tell the javascript engine what to do.

The most common event is a CLick event.

There are two ways to do a click event. The first is using an inline onlcik attribute in the html.

`<button id="btn" onclick="myFunction()">Click me</button>`

As log as you use a function declaration, in your js script, this will work ie:

```
function myFunction(){
    // some code
}
```

The second way is using an event listener in your script:

```        
document.getElementById('btn').addEventListener('click', myFunction)
```


