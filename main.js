/**
 * add a modal, removeable by clicking the 'cancel button or the okay button'
 * Creates:
 * @param  {string} text the notice text
 * @return {boolean} true if clicked on okay, false if on cancel
 * @author Haroen Viaene <hello@haroen.me>
 * @version 0.1
 */
var modal = function(text){
	var modal = document.createElement('div');
	var cancel = document.createElement('button');
	var okay = document.createElement('button');
	var content = document.createTextNode(text);

	modal.appendChild(content);
	modal.appendChild(cancel);
	modal.appendChild(okay);

	modal.className += 'modal';
	cancel.className += 'modal--cancel';
	okay.className += 'modal--okay';

	cancel.innerHTML = 'Cancel';
	okay.innerHTML = 'OK';

	document.body.insertBefore(modal, document.body.firstChild);

	okay.addEventListener('click',function(){
		document.body.removeChild(modal);
		return true;
	});

	cancel.addEventListener('click',function(){
		document.body.removeChild(modal);
		return false;
	});
};