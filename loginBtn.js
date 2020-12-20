const Store = require('electron-store');
const isRememberLogin = new Store();
const usernameMem = new Store();
const passwordMem = new Store();


document.getElementById("postLogin").style.visibility = "hidden";
document.getElementById("loginbox").style.visibility = "hidden";
document.getElementById("loginTerminal").style.visibility = "hidden";
var loginBtn = document.getElementById("loginbtn");
var passwordForm = document.getElementById("passwd");



loginBtn.addEventListener("mousedown", () => {
	loginBtn.style.background = "#1a1a1a";
});

loginBtn.addEventListener("mouseup", () => {
	loginBtn.style.background = "white";
	window.timer = setInterval(fadeLeave, 10);
});



if (isRememberLogin.get('isRemembered')=='true')
	{
	document.getElementById("usr").value=usernameMem.get('username');
	document.getElementById("passwd").value=passwordMem.get('password');
	document.getElementById("rememberName").checked = true;
	document.getElementById("loginbox").onmousemove = function(){if (window.isLoggedin == true){return;}logMeIn();};
	}








function logMeIn(){
	window.isLoggedin = true;
	var username = document.getElementById("usr").value;
	var password = document.getElementById("passwd").value;
	window.client.connectToServer();
	window.client.login(username, password);

	
	if (document.getElementById("rememberName").checked == true){
		isRememberLogin.set('isRemembered', 'true');
		usernameMem.set('username', username);
		passwordMem.set('password', password);
 	 } else {
		isRememberLogin.set('isRemembered', 'false');
	}
	window.client.on("ACCEPTED", (username) => {
		window.timer3 = setInterval(finalBoxEnlargeLeave, 10);
		window.username = username;
	});
	window.client.on("DENIED", (reason) => {
		window.client.endConnection();
	});
}

var i = 0;
var j = 0;
var k = 0;

function fadeLeave() {
	loginBtn.style.opacity = 1 - i * 0.04;
	loginBtn.style.left = 50 - 2 * i + "%";
	i = i + 1;
	if (i >= 100) {
		//clearInterval(timer);
		loginBtn.style.visibility = "hidden";
		document.getElementById("loginbox").style.opacity = 0;
		document.getElementById("loginbox").style.visibility = "visible";
		clearInterval(window.timer);
		window.timer2 = setInterval(ariseEnter, 10);
	}
}

function ariseEnter() {
	j = j + 6;
	document.getElementById("loginbox").style.opacity = j / 100;
	document.getElementById("loginbox").style.left = 70 - 0.2 * j + "%";
	if (j >= 100) {
		clearInterval(window.timer2);
	}
}

function finalBoxEnlargeLeave() {
	document.getElementById("shader").style.opacity = 1 - k * 0.01;
	document.getElementById("shader").style.width = 50 - 1 * k + "%";
	document.getElementById("logininput").style.opacity = 1 - k * 0.01;
	document.getElementById("logininput").style.width = 50 - 1 * k + "%";
	k = k + 1;
	if (k >= 100) {
		document.getElementById("loginbox").style.visibility = "hidden";
		document.getElementById("loginTerminal").style.visibility = "visible";

		clearInterval(window.timer3);
		document.getElementById("loginTerminal").innerHTML = window.serverReply;
		document.getElementById("loginTerminal").innerHTML +=
			"</br>Check Update: ||||||||||||||||||||</br> NONE";
		document.getElementById("loginTerminal").innerHTML +=
			"</br>Starting interface renderer</br> 0%";
		document.getElementById("loginTerminal").style.visibility = "hidden";
		document.getElementById("postLogin").style.visibility = "visible";
		document.getElementById("username").innerHTML =window.username
		document.getElementById("c").style.visibility = "hidden";
		/*document.getElementById("chatList").innerHTML +="<p id=\""+displayedChat+"\"><span onclick=\"chatSwt(&#39;"+displayedChat+"&#39;,displayedChat)\"style=\"background-color: #2196f3;color: white; padding: 5px;\">"+displayedChat.substring(0, 6)+"</span><span onclick=\"chatDel(&#39;"+displayedChat+"&#39;)\" id=\"chatClose\" class=\"chatClose\" >&#x2715;</span></p>";
document.getElementById("chatContainer").innerHTML +=" <div class=\"chatContent\" id=\"chat"+displayedChat+"\"><h1 style=\"position: absolute; color: white; top: 0%; left: 9%;font-family: JuneBug2;\">"+displayedChat+"</h1><p style=\"color: white; font-family: JuneBug3;\">"+'Intergalactic Quantum Com'+"</p><div class=\"form__group field\" style=\"bottom:1%; width:100%; position:absolute;left:2%;\"><input onchange=\"chatSubmit()\" type=\"input\" class=\"form__field\" placeholder=\""+window.username+"\" name=\"name\" id=\'name"+displayedChat+"\' required /><label for=\"name"+displayedChat+"\" class=\"form__label\" id=\"formLabel\">"+window.username+"</label></div><div class=\"limitingframe\" style=\"width:107% ;height:78%;top:2%; overflow:scroll; overflow-x: hidden; position:relative;\"><div class=\"chatUserContent\" id=\"chatUserContent"+displayedChat+"\" style =\"bottom: 3%;position: relative; overflow: hidden;\"><!--chat content to be inserted--></div></div></div>";*/
		window.isExited=true;
		window.client.joinChanel("main")
        window.client.joinChanel("bus")

		/*window.client.on("SAIDBATTLE", (user,msg) => {
			console.log("said battle triggered!")
			msgSaid[0]=user;
			msgSaid[1]=msg;
			msgSaid[2]= window.nowinBattle;
			msgPut(msgSaid);
		});*/
	}
}

