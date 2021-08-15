---
title: 'Measuring performance benchmark of JavaScript operations'
date: 2021-08-15
category: 'javascript'
draft: false
featuredImage: ../images/proto.png
---

<div class="bigImage">
    <img src="./images/javascript-big.webp" watch="js operations">
</div>

Let’s compare the performance of some of the regularly used Javascript operations -

## Checking key in the object -

```js
var testObj = {a: 91, b: 07, c: “talvinder”, d: 983, e: ‘singh’, o: “key”, f: ‘82828’, g: 8};
```
- using “in” — 312ms
- using “undefined” — 298ms 🏆
- using “hasOwnProperty” — 304ms

```js
/* Using in */
var result;
if (“key” in testObj) {
 result = true;
}
/* Using undefined */
var result;
if (testObj.key !== undefined) {
    result = true;
}
/* Using hasOwnProperty */
var result;
if (testObj.hasOwnProperty("key")) {
    result = true;
}
```

## 2. Contains Sub-string -

```js
var str = “this is publicis sapient lorem ipsum this is publicis sapient lorem ipsumthis is publicis sapient lorem ipsumthis is publicis sapient lorem ipsum   hello lorem ipsum dolar sit”;
var needle = “hello”;
var needleRegex = /hello/;
```

- indexOf — 237ms
- regex — 180ms 🏆
- match — 220ms
- includes (ES6) — 220ms
- search — 217ms

```js
/* Using indexOf */
var test = str.indexOf(needle);
/* Using regex */
var test = needleRegex.test(str);
/* Using match */
var test = str.match(needleRegex);
/* Using includes */
var test = str.includes(needle);
/* Using search */
var test = str.search(needleRegex);
```


## 3. for() vs .map() vs .forEach()

```js
var arr=’this is publicis sapient lorem ipsum this is publicis sapient lorem ipsumthis is publicis sapient lorem ipsumthis is publicis sapient lorem ipsum   hello lorem ipsum dolar sitthis is publicis sapient lorem ipsum this is publicis sapient lorem ipsumthis is publicis sapient lorem ipsumthis is publicis sapient lorem ipsum   hello lorem ipsum dolar sitthis is publicis sapient lorem ipsum this is publicis sapient lorem ipsumthis is publicis sapient lorem ipsumthis is publicis sapient lorem ipsum   hello lorem ipsum dolar sitthis is publicis sapient lorem ipsum this is publicis sapient lorem ipsumthis is publicis sapient lorem ipsumthis is publicis sapient lorem ipsum   hello lorem ipsum dolar sit’.split(‘’);
var a;
```

- for — 455ms 🏆
- map — 2357ms
- forEach — 2046ms

```js
/* for loop */
for(var i=arr.length;i →0;)a=arr[i];
/* map */
arr.map(function(b){a=b});
/* forEach */
arr.forEach(function(b){a=b});
```

### 4. Check if array

```js
var testArray = [29, 29 , 28, 39, 38, 2828, 28, 993, 3];
var testVar = “hello”;
var result;
```
- isArray — 294ms
- constructor — 246ms 🏆
- prototype — 272ms

```js
/* isArray */
if (Array.isArray(testArray)) result = true;
if (Array.isArray(testVar)) result = true;
/* Constructor */
if (testArray.constructor === Array) result = true;
if (testVar.constructor === Array) result = true;
/* prototype*/
if (Object.prototype.toString.call(testArray)) result = true;
if (Object.prototype.toString.call(testVar)) result = true;
```