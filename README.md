# Modal

Give a simple notice at the top of a page, okayable and dismissable with a click.

<!-- ![](https://i.imgur.com/grRUtGU.png) -->

Demo: [haroen.me/modal](https://haroen.me/modal).

# Usage

Link both `style.css` and `main.js` in your html file. Then in a script you can make a new notice by doing

```js
if ( modal('the text inside the notice') ) {
	// clicked on okay
} else {
	// clicked on cancel
}
```

# Used by

Haroen Viaene in [haroenv/maps-checker](https://github.com/haroenv/maps-checker).

# License

[![Creative Commons Licence](https://i.creativecommons.org/l/by/4.0/88x31.png)](http://creativecommons.org/licenses/by/4.0/)
Modal is licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/). No warranty whatsoever.