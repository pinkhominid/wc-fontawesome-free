# wc-fontawesome-free
[Font Awesome Free](https://fontawesome.com/icons?d=gallery&m=free) icons as Web Components

## Why?
- Simple to use
- Import only what you need
- Tree shakable
- Shadow DOM encapsulated

## Install
```sh
npm i wc-fontawesome-free construct-style-sheets-polyfill
```

## Use
```js
// Import Constructible Stylesheets polyfill for Firefox & Safari
// https://www.npmjs.com/package/construct-style-sheets-polyfill
import '../node_modules/construct-style-sheets-polyfill/dist/adoptedStyleSheets.js';

// Import icons you need
import '../node_modules/wc-fontawesome-free/fab-accessible-icon.js'
import '../node_modules/wc-fontawesome-free/far-smile-wink-icon.js'
import '../node_modules/wc-fontawesome-free/fas-user-astronaut-icon.js'
```

```html
<fab-accessible-icon class="fa-border"></fab-accessible-icon>
<far-smile-wink-icon class="fa-3x fa-flip-vertical"></far-smile-wink-icon>
<fas-user-astronaut-icon class="fa-spin" style="fill:skyblue"></fas-user-astronaut-icon>
```

Supports Font Awesome Styling via classes. For example, [sizing](https://fontawesome.com/how-to-use/on-the-web/styling/sizing-icons), [rotation](https://fontawesome.com/how-to-use/on-the-web/styling/rotating-icons), and [animation](https://fontawesome.com/how-to-use/on-the-web/styling/animating-icons).

You can change icon colors using the [fill](https://css-tricks.com/almanac/properties/f/fill/) property in CSS.
