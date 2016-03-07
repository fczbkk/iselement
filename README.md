# isElement

Utility function that returns `true` if referenced object is DOM element.

Most similar functions just checks, if object is instance of `HTMLElement`. That does not always work, because it exotic elements like SVG polygons.

## How to use

```
import isElement from 'iselement';

isElement(my_object);  // --> true/false
```

## Bug reports, feature requests and contact

If you found any bugs, if you have feature requests or any questions, please, either [file an issue at GitHub](https://github.com/fczbkk/is-element/issues) or send me an e-mail at [riki@fczbkk.com](mailto:riki@fczbkk.com).

## License

Element collector is published under the [MIT license](https://github.com/fczbkk/is-element/blob/master/LICENSE).