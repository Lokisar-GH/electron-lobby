const { app, BrowserWindow } = require("electron");

let mainWindow;

function createWindow() {
	mainWindow = new BrowserWindow({
		webPreferences: {
			nodeIntegration: true,
			enableRemoteModule:true
		},
	});

	mainWindow.maximize();
	mainWindow.setMenu(null)
	mainWindow.loadFile("index.html");
	mainWindow.webContents.openDevTools();

	mainWindow.on("closed", function () {
		mainWindow = null;
	});
}

app.on("ready", createWindow);
