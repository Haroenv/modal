(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var modal = require('modal');

var modalText = document.getElementById('modalText');
var modalButton = document.getElementById('modalButton');
var output = document.getElementById('output');
var okay = function() {
  output.innerHTML += 'okay\n';
};
var cancel = function() {
  output.innerHTML += 'cancel\n';
};
modalButton.addEventListener('click', function() {
  modal(modalText.value, okay, cancel);
});

},{"modal":2}],2:[function(require,module,exports){
/**
 * add a modal, removeable by clicking the 'cancel button or the okay button'
 * Creates:
 * @param  {string} text the notice text
 * @param {function} the callback function when clicked on 'okay'
 * @param {function} the callback funtion when clicked on 'cancel'
 * @author Haroen Viaene <hello@haroen.me>
 * @version 1.0.0
 */
(function (root, factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], function () {
      return (root.modal = factory());
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals
    root.modal = factory();
  }
})(this, function () {
  // UMD Definition above, do not remove this line

  // To get to know more about the Universal Module Definition
  // visit: https://github.com/umdjs/umd

  'use strict';

  var modal = function(text,agreeCallback,disagreeCallback){
    var div = document.createElement('div');
    var cancel = document.createElement('button');
    var okay = document.createElement('button');
    var buttons = document.createElement('div');
    var content = document.createElement('p');

    div.setAttribute('role','alertdialog');

    content.appendChild(document.createTextNode(text));

    div.appendChild(content);
    div.appendChild(buttons);
    buttons.appendChild(cancel);
    buttons.appendChild(okay);

    div.className = 'modal';
    content.className = 'modal--content';
    cancel.className = 'modal--cancel';
    okay.className = 'modal--okay';

    cancel.innerHTML = 'Cancel';
    okay.innerHTML = 'OK';

    document.body.insertBefore(div, document.body.firstChild);

    cancel.focus();

    div.querySelector('.modal--okay').addEventListener('click',function(){
        document.body.removeChild(div);
        agreeCallback();
    });

    div.querySelector('.modal--cancel').addEventListener('click',function(){
        document.body.removeChild(div);
        disagreeCallback();
    });
  };

  return modal;

});

},{}]},{},[1]);
