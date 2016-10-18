// GO!

// TASK 1

var vbutton = document.querySelector('#hide-button');
var hidenav = document.querySelector('.nav-menu');

vbutton.textContent = 'hide nav';

vbutton.addEventListener('click', function () {
	hidenav.classList.toggle('nav-menu-hidden');
	if (vbutton.textContent === 'show nav') {
		vbutton.textContent = 'hide nav';
	} else {
		vbutton.textContent = 'show nav';
	}
});


// TASK 2
var textboxtask2 = document.querySelector('#task2');
var list = document.querySelector('.add-guest');

textboxtask2.addEventListener('keyup', function (event) {
	if (event.keyCode === 13) {
		var li = document.createElement('li');
		li.textContent = textboxtask2.value;
		list.appendChild(li);
		textboxtask2.value = '';
		li.classList.add('guest');
	}
});


//TASK 3
var textboxtask3 = document.querySelector('#task3');
var list3 = document.querySelector('.add-guest-bonus');

textboxtask3.addEventListener('keyup', function (event) {
	if (event.keyCode === 13) {
		var li3 = document.createElement('li');
		var button = document.createElement('button');
		button.textContent = 'X';
		li3.textContent = textboxtask3.value;
		list3.appendChild(li3);
		li3.appendChild(button);
		button.addEventListener('click', function () {
			li3.parentElement.removeChild(li3);
		});
		textboxtask3.value = '';
		li3.classList.add('guest');
	}
});






