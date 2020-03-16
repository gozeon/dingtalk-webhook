'use strict';
const Store = require('electron-store');

module.exports = new Store({
	defaults: {
		footerText: 'https://github.com/gozeon'
	}
});
