/**
 * add a modal, removeable by clicking the 'cancel button or the okay button'
 * Creates:
 * @param  {string} text the notice text
 * @param {function} the callback function when clicked on 'okay'
 * @param {function} the callback funtion when clicked on 'cancel'
 * @author Haroen Viaene <hello@haroen.me>
 * @version 0.1
 */
var modal = function(text,agreeCallback,disagreeCallback){
	var modal = document.createElement('div');
	var cancel = document.createElement('button');
	var okay = document.createElement('button');
	var buttons = document.createElement('div');
	var content = document.createElement('p');

	content.appendChild(document.createTextNode(text));

	modal.appendChild(content);
	modal.appendChild(buttons);
	buttons.appendChild(cancel);
	buttons.appendChild(okay);

	modal.className += 'modal';
	content.className += 'modal--content';
	cancel.className += 'modal--cancel';
	okay.className += 'modal--okay';

	cancel.innerHTML = 'Cancel';
	okay.innerHTML = 'OK';

	document.body.insertBefore(modal, document.body.firstChild);

	cancel.focus();

	console.log(modal.querySelector('.modal--okay'));

	modal.querySelector('.modal--okay').addEventListener('click',function(){
		document.body.removeChild(modal);
		agreeCallback();
	});

	modal.querySelector('.modal--cancel').addEventListener('click',function(){
		document.body.removeChild(modal);
		disagreeCallback();
	});
};