## Home work

1. Read about flex box
[Link here](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

2. Try and improve your bio pages, using skills we have learnt this week

3. Add some more cards to the top trumps page.


Notes on nesting html. Make sure you are spending a bit of time thinking about the structure of what you are building. 

Plan it out,  by sketching it first - or create a low level wireframe.

Then divide it up into manageable blocks or components. In this top trumps example, I first build the html structure, using nested divs like so. Having the divs nested allows me to style my layut easier. 

Example for top trumps card:
```
<div class="tt">
    <div class="tt__header">
        <div>one</div>
        <div>two</div>
        <div>Three</div>
    </div>
    <div class="tt__image">
        
        <img src="https://picsum.photos/400/200" alt="random picture">
    
        <div class="tt__link">
            <div class="inner">
                <a href="google.com">Click me</a>
            </div> 
        </div>
    </div>
    <div class="tt__details">
        <div class="tt__detail-row">
            <div class="left">bla</div>
            <div class="right">something</div>
        </div>
        <div class="tt__detail-row">
            <div class="left">bla</div>
            <div class="right">something</div>
        </div>
        <div class="tt__detail-row">
            <div class="left">bla</div>
            <div class="right">something</div>
        </div>
    </div>
</div>
```