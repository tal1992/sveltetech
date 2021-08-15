---
title: 'Watch for Changes using MutationObserver'
date: 2021-08-15
category: 'javascript'
draft: false
featuredImage: ../images/proto.png
---

<div class="bigImage">
    <img src="./images/watch.jpeg" alt="watch">
</div>

<strong>MutationObserver</strong> is a lesser known JavaScript feature which allows you to detect when DOM elements in a web page are inserted, changed or removed. It is still relatively new, but it is supported by every modern browser. It triggers a callback when the change happens.

For long, developers have been using Mutation Events for the same but it has been deprecated in favor of MutationObserver.

```js
let myobserver = new MutationObserver(callback);
    
function callback (mutations) {
  // do what you want to do
}
myobserver.observe(targetNode, options);
```

The argument passed into the constructor in the first line is a callback function that will be called on each DOM changes. For easy understanding, you can compare the last line “observe” with the addEventListner of Javascript.

### Observe Parameters:

We need to pass 2 params inside observe -

- targetNode- It is the DOM node where you want to observe changes.
- options- It is an Object which will contain configurations.

### Configuration for options object:

```js
let options = {
  childList: true,
  attributes: true,
  characterData: false,
  subtree: false,
  attributeFilter: ['one', 'two'],
  attributeOldValue: false,
  characterDataOldValue: false
};
```

### Practical Example

Suppose you have a web page where username is fetched using a 3rd party ajax call over which you have no control but you want to perform some action when the username is populated.

```html
<div>Hello 
  <p class="username"><!-- TO BE FETCHED --></p>
</div>
```

Now, you want to watch the username "p" for a change.

```js
var elem = $(".username"), self; // you can use vanilla js too
    this.observer = new MutationObserver( function(mutations) {
       // do what you want to do
       self.observer.disconnect(); // disconnect observer
    }.bind(this));
    this.observer.observe(elem.get(0), { characterData: true,    childList: true});
                
    self = this;
```

PS: <i>Don’t forget to disconnect the observer once your work is done.</i>
