"use strict";

const net = require("net");
const crypto = require("crypto");
const EventEmitter = require("events");
const regexPatterns = require("./regex-patterns");

const SERVER_URL = "ultirts.net";
const SERVER_PORT = 8200;

class Client extends EventEmitter {
	constructor() {
		super();
		this.connect = false;
	}

	connectToServer(server_url = SERVER_URL, server_port = SERVER_PORT) {
		this.socket = new net.Socket();
		this.socket.connect(server_port, server_url);
		this.socket.on("connect", () => {
			this.connected = true;
			this.emit("connected");
		});
		this.socket.on("close", () => {
			this.connected = false;
			this.emit("disconnected");
		});
		this.socket.on("data", (data) => {
			data
				.toString()
				.split("\n")
				.forEach((message) => {
					if (message.length > 0) {
						console.log("Received: " + message)
						const commandLength = message.indexOf(" ");
						const command = message.substring(0, commandLength);
						const args = message.substring(commandLength, message.length);
						if (command in regexPatterns) {
							const pattern = regexPatterns[command];
							if (pattern) {
								const result = pattern.exec(args);
								if (result == null) console.log("Unknown Pattern: " + message);
								else this.emit(command, ...result.slice(1, result.length));
							} else {
								this.emit(command);
							}
						}
					}
				});
		});
	}
	
	joinChanel(chanName) {
		const message ="JOIN " +chanName;
		this.send(message);
	}
	
	joinBattle(bID) {
		const message ="JOINBATTLE " +bID;
		this.send(message);
	}
	
	leaveChanel(chanName) {
		const message ="LEAVE " +chanName;
		this.send(message);
	}
	leaveBattle() {
		const message ="LEAVEBATTLE";
		this.send(message);
	}
	

	
	say(channel, something) {
		const message ="SAY " +channel+" "+something;
		this.send(message);
	}
	
	sayBattle(something) {
		const message ="SAYBATTLE " +something;
		this.send(message);
	}
	
	login(username, password, cpu = 0, localIP = "*") {
		const passwordHash = crypto
			.createHash("md5")
			.update(password)
			.digest("base64");

		const message =
			"LOGIN " + username + " " + passwordHash + " " + cpu + " " + localIP;
		this.send(message);
		setInterval(() => { this.send("PING"); }, 20000);
		
	}

	logout(reason = "unknown") {
		this.send("EXIT " + reason);
		self.endConnection();
	}

	endConnection() {
		this.socket.destroy();
		clearInterval(window.timer4);
	}

	send(message, display = false) {
		if (display) console.log("Sending: " + message);
		this.socket.write(message + "\n");
	}
}

module.exports = Client;
