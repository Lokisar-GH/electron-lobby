const Client = require("./client");

window.client = new Client();

window.client.on("ACCEPTED", () => {
	setInterval(() => { client.send("PING"); }, 1000);
});
