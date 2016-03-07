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
