# noQuery
A function for elements selection in 67 ASCII chars.

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