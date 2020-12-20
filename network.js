const Client = require("./client");
//const shell = require("./busybox");

//window.runCmd = new shell();


window.client = new Client();

window.client.on("ACCEPTED", () => {
	setInterval(() => { client.send("PING"); }, 1000);
});

window.client.on("JOIN", (CHANAME) => {
	chatPut(CHANAME)
});



window.client.on("LEFT", (CHANAME,user) => {
	if (user==window.username)
	{	
		chatDel(CHANAME)}
		else if (CHANAME!="main"){
			frdEliminate(CHANAME,user);
		}
});

window.client.on("LEFTBATTLE", (bID,user) => {
	console.log("received leaving battle"+user)
	if (user==window.username){
		chatDel(bID);
		window.isExited=true;
	}
	
});

/*var usrinBattle = []*/
/*window.client.on("JOINEDBATTLE",(id, users) => {
 i f* (users==window.username){
 window.client.joinChanel(id);
 }
 
 
 });*/

var usrinChan = []
window.client.on("CLIENTS",(CHANME, users) => {
	if (CHANME!="main"){
		usrinChan = users.split(" ");
		for (var userPtr=0; userPtr<usrinChan.length;userPtr++){
			frdPut(CHANME,usrinChan[userPtr],'A\'s gem');}
	}
});

window.client.on("JOINED",(CHANME, user) => {
	if (CHANME!="main"&user!=window.username){
		frdPut(CHANME,user,'A\'s gem');
	}
});

//window.client.on("JOINEDBATTLE",(bID, users) => {
//	frdPut(bID,users,'Combat Group'+bID)
//});

window.client.on("JOINBATTLE",(bID, user) => {
	window.nowinBattle=bID;
	lobbyFlush(bID, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, document.getElementById("title"+bID).innerHTML, 0, 0);
	window.client.joinChanel(bID);
	window.isExited=false;
});

//window.client.on("CLIENTBATTLESTATUS",(usr, status,teamColor) => {
//	if (usr==window.username){
//	window.client.joinChanel(CHANAME)
//	}
//});

var msgSaid = [];
window.client.on("SAID", (channel,user,msg) => {
	msgSaid[0]=user;
	msgSaid[1]=msg;
	msgSaid[2]=channel;
	msgPut(msgSaid)
});

window.client.on("CLIENTSTATUS", (user,status) => {
	if (user.startsWith("Autohost")){
		if (status ==1)
		{
			
			runCmd('./engine/spring _script.txt', (output) => {
				console.log(output);
			});
			
		}
	}
});
