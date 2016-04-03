# Modal

Give a simple modal at the middle of a page, okayable and dismissable with a click.

Demo: [haroen.me/modal](https://haroen.me/modal).

# Usage

## manual way

Link both `style.css` and `modal.js` in your html file. Then in a script you can make a new notice by doing

```js
modal(modalText.value, function(){
  // code to evaluate when pressed on okay
}, function(){
  // code to evaluate when pressed on cancel
});
```

## browserify
You need to install this via npm first like this:

```sh
npm install --save git+https://github.com/haroenv/modal.git
```

Just require modal as any other CommonJS module after installing it via npm:

```javascript
var modal = require('modal');
```

In terms of CSS you have to decide whether you reference the CSS file, which is in the `node_modules` folder or use a tool like [parcelify](https://www.npmjs.com/package/parcelify) to bundle the CSS. 

# Used by

Haroen Viaene in [haroenv/maps-checker](https://github.com/haroenv/maps-checker).

# License

[![Creative Commons Licence](https://i.creativecommons.org/l/by/4.0/88x31.png)](http://creativecommons.org/licenses/by/4.0/)
Modal is licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/). No warranty whatsoever.
