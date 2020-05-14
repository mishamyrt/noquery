<img src="https://mishamyrt.github.io/noquery/logo.svg" align="right"
     alt="Logo" width="50" height="101">

# noQuery [![Build Status](https://travis-ci.com/mishamyrt/noquery.svg?branch=master)][ci]

A function for elements selection in 71 ASCII chars.

```js
const title = $('h1')
```

If only one element is found, the function will return it. Otherwise, it will return an array with all [native methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

```js
// Set click callback to all red buttons
$('.button')
  .filter(n => n.classList.contains('__red'))
  .forEach(n => n.addEventListener(
    'click', () => alert('Whoops')
  ))
```

[ci]: https://travis-ci.com/mishamyrt/noquery
