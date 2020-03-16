const {shell} = require('electron');
const allA = document.querySelectorAll('a');

Array.prototype.forEach.call(allA, a => {
	a.addEventListener('click', e => {
		e.preventDefault();
		shell.openExternal(a.href);
	}, false);
});
