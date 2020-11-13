const { remote } = require('electron')




function restoreWindow() {
	remote.getCurrentWindow().maximize();
}

function minimizeWindow() {
	remote.getCurrentWindow().minimize();
}
