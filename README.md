# isElement

Utility function that returns `true` if referenced object is DOM element.

Most similar functions just check, if object is instance of `HTMLElement`. That does not always work, because of exotic elements like SVG polygons.

## How to use

```javascript
import isElement from 'iselement';

isElement(my_object);  // --> true/false
```

# Documentation

## isElement

Returns `true` if provided input is Element.

**Parameters**

-   `input` **\[Any]** 

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 
