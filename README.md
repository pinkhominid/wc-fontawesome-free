# wc-fontawesome-free
[Font Awesome Free](https://fontawesome.com/icons?d=gallery&m=free) icons as Web Components

<h1 align="center">
  <img
    width="512"
    src="https://raw.githubusercontent.com/pinkhominid/wc-fontawesome-free/master/logo.png"
    alt="example icons"
  >
  <br>
  <br>
</h1>

## Why?
- Simple to use
- Import only what you need
- Tree shakable
- Shadow DOM encapsulated
- 1,588 awesome free icons

## Install
```sh
npm i wc-fontawesome-free construct-style-sheets-polyfill
```

## Use
1. Look up a [free icon](https://fontawesome.com/icons?d=gallery&m=free)
2. Import using the following format `<style-prefix>-<icon-name>-icon.js`
3. Add the custom element tag using the format `<style-prefix>-<icon-name>-icon`

Where `<style-prefix>` is `fab` (brands), `far` (regular), or `fas` (solid)

```html
<script type="module">
  // Import Constructible Stylesheets polyfill for Firefox & Safari
  // https://www.npmjs.com/package/construct-style-sheets-polyfill
  import '../node_modules/construct-style-sheets-polyfill/dist/adoptedStyleSheets.js';

  // Import icons you need
  import '../node_modules/wc-fontawesome-free/dist/fab-accessible-icon.js'
  import '../node_modules/wc-fontawesome-free/dist/far-moon-icon.js'
  import '../node_modules/wc-fontawesome-free/dist/fas-user-astronaut-icon.js'
  import '../node_modules/wc-fontawesome-free/dist/fas-yin-yang-icon.js'
</script>

<fab-accessible-icon class="fa-border"></fab-accessible-icon>
<far-moon-icon class="fa-3x" style="fill:midnightblue"></far-moon-icon>
<fas-user-astronaut-icon style="fill:skyblue"></fas-user-astronaut-icon>
<fas-yin-yang-icon class="fa-spin fa-lg"></fas-yin-yang-icon>
```

Supports Font Awesome Styling via classes. For example, [sizing](https://fontawesome.com/how-to-use/on-the-web/styling/sizing-icons), [rotation](https://fontawesome.com/how-to-use/on-the-web/styling/rotating-icons), and [animation](https://fontawesome.com/how-to-use/on-the-web/styling/animating-icons).

You can change icon colors using the [fill](https://css-tricks.com/almanac/properties/f/fill/) property in CSS.
