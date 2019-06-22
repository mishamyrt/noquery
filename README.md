<img src="https://mishamyrt.github.io/noquery/logo.svg" align="right"
     alt="Logo" width="50" height="101">

# noQuery [![Build Status](https://travis-ci.com/mishamyrt/noquery.svg?branch=master)][ci]

A function for elements selection in 71 ASCII chars.

```js
const button = $('.button')
```

If only one element is found, the function will return it. Otherwise, it will return an array with all [native methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

```js
$('.buttons').forEach((button) => {
    button.onclick = () => {
        // do something
    }
})
```

[ci]: https://travis-ci.com/mishamyrt/noquery
