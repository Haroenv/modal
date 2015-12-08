/**
 * add a notice, removeable by clicking the 'close button'
 * Creates <p class="notice"><span class="notice--close"></span>text</p>
 * @param  {string} text the notice text
 * @author Haroen Viaene <hello@haroen.me>
 * @version 0.1
 */
var notice = function(text){
	var notice = document.createElement('p');
	var close = document.createElement('span');
	var content = document.createTextNode(text);

	notice.appendChild(close);
	notice.appendChild(content);

	close.className += 'notice--close';
	notice.className += 'notice';

	if ("webkitAppearance" in document.body.style) {
		close.style.webkitAppearance = "searchfield-cancel-button";
	} else {
		close.appendChild(document.createTextNode('✕'));
	}

	document.body.insertBefore(notice, document.body.firstChild);

	close.addEventListener('click',function(){
		document.body.removeChild(notice);
	});
};