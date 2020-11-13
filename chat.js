var displayedChat="main";
var msgQueue=["User","0000"];
function msgPut(Q){
	 //if(username == Q[0]) {  } 
	 console.log("trying to put msg!")
	document.getElementById("chatUserContent"+Q[2]).innerHTML +="<p style=\"display:inline-block; color: white; font-family: JuneBug2; background-color: rgba(100, 100, 100, 0.5);\">"+Q[0]+">>></p> <p style=\"display:inline-block; color: white; font-family: JuneBug; \">"+ Q[1]+"</p></br>";
}

function chatSubmit(isBattleChat=false) {
	if (isBattleChat==false)
	{
		msgQueue[0]=window.username;
		msgQueue[1] = document.getElementById("name"+displayedChat).value;
		console.log("normal chat fired!");
		window.client.say(displayedChat,msgQueue[1])}
	else{
		msgQueue[0]=window.username;
		msgQueue[1] = document.getElementById("name"+displayedChat).value;
		console.log("battle chat fired!");
		window.client.sayBattle(msgQueue[1])
	
	}
}

function chatDel(Name) {   
    if(typeof(document.getElementById("chatTag"+Name)) == 'undefined' || document.getElementById("chatTag"+Name) == null){
       console.log("channel "+Name+" does not exist");
       return;
    } 

	console.log("removing "+Name);
	document.getElementById("chatTag"+Name).parentNode.removeChild(document.getElementById("chatTag"+Name));
	document.getElementById("friendFrame"+Name).parentNode.removeChild(document.getElementById("friendFrame"+Name));
	document.getElementById('chat'+Name).parentNode.removeChild(document.getElementById('chat'+Name));
	if (Name==displayedChat)
	{
	console.log("this is the only chat/mainchat");
	displayedChat="disposed";
	return ;
	}
}

function chatLeave(Name) {   
		window.client.leaveChanel(Name)


}



//  main com is joined automatically without calling any functions
function chatPut(Name, Desc="Intergalactic Quantum Com", isBattleChat=false) {   //call this function back on joining chat
	if (isBattleChat == false){
		console.log("adding regular chat"+Name);
		if (Name!="main"){    //prevents those shit from running when called by loginbtn for the first time
			if (displayedChat!="disposed"){
				document.getElementById("chat"+displayedChat).style.visibility = "hidden";
				document.getElementById("friendFrame"+displayedChat).style.visibility = "hidden";
			}
		
			document.getElementById("infopanel").innerHTML +="<div class=\"friendFrame\" id=\"friendFrame"+Name+"\" style=\"top:-10%; overflow:visible; position: absolute; width:65%;height:120%; display:inline-block;right:35%;z-index:30;\"><h1 style=\"display:inline-block; position: absolute; color: white; top: -15%; left: -3%;font-family: JuneBug2;\">"+Name+"&gt; </h1><h1 style=\"display:inline-block; position: absolute; color: white; top: -15%; left: 10%;font-family: JuneBug2;\">Personnels _</h1><div class=\"friendlimitingFrame\" id=\"friendlimitingFrame"+Name+"\" style=\"top:3%; overflow:auto; position: relative; width:92%;height:91%; display:inline-block; right: -6.3%;\"></div></div>";
			}
		displayedChat=Name; //update displayed chat with the new chat
		if (Name!='main'){
			document.getElementById("chatList").innerHTML +="<p id=\"chatTag"+displayedChat+"\"><span onclick=\"chatSwt(&#39;"+displayedChat+"&#39;,displayedChat)\"style=\"cursor: pointer; background-color: #2196f3;color: white; padding: 5px;\">"+displayedChat.substring(0, 6)+"</span><span onclick=\"chatLeave(&#39;"+displayedChat+"&#39;)\" id=\"chatClose\" class=\"chatClose\" style=\"cursor: pointer;\">＼</span></p>";
		}
		else {
			document.getElementById("chatList").innerHTML +="<p id=\""+displayedChat+"\"><span onclick=\"chatSwt(&#39;"+displayedChat+"&#39;,displayedChat)\"style=\"cursor: pointer; background-color: #2196f3;color: white; padding: 5px;\">"+displayedChat.substring(0, 6)+"</span><span  id=\"chatClose\" class=\"chatClose\" style=\"cursor: pointer;\">⊟</span></p>";
		}
	
		document.getElementById("chatContainer").innerHTML +=" <div class=\"chatContent\" id=\"chat"+displayedChat+"\"><h1 style=\"position: absolute; color: white; top: 0%; left: 9%;font-family: JuneBug2;\">"+displayedChat+"</h1><p style=\"color: white; font-family: JuneBug3;\">"+Desc+"</p><div class=\"form__group field\" style=\"bottom:1%; width:100%; position:absolute;left:2%;\"><input onchange=\"chatSubmit()\" type=\"input\" class=\"form__field\" placeholder=\""+window.username+"\" name=\"name\" id=\'name"+displayedChat+"\' required /><label for=\"name"+displayedChat+"\" class=\"form__label\" id=\"formLabel\">"+window.username+"</label></div><div class=\"limitingframe\" style=\"width:107% ;height:78%;top:2%; overflow:scroll; overflow-x: hidden; position:relative;\"><div class=\"chatUserContent\" id=\"chatUserContent"+displayedChat+"\" style =\"bottom: 3%;position: relative; overflow: hidden;\"><!--chat content to be inserted--></div></div></div>";
}
	else{
		console.log("adding battleChat"+Name);

			if (displayedChat!="disposed"){
				document.getElementById("chat"+displayedChat).style.visibility = "hidden";
				document.getElementById("friendFrame"+displayedChat).style.visibility = "hidden";
			}
		
			document.getElementById("infopanel").innerHTML +="<div class=\"friendFrame\" id=\"friendFrame"+Name+"\" style=\"top:-10%; overflow:visible; position: absolute; width:65%;height:120%; display:inline-block;right:35%;z-index:30;\"><h1 style=\"display:inline-block; position: absolute; color: white; top: -15%; left: -3%;font-family: JuneBug2;\">"+Name+"&gt; </h1><h1 style=\"display:inline-block; position: absolute; color: white; top: -15%; left: 10%;font-family: JuneBug2;\">Personnels _</h1><div class=\"friendlimitingFrame\" id=\"friendlimitingFrame"+Name+"\" style=\"top:3%; overflow:auto; position: relative; width:92%;height:91%; display:inline-block; right: -6.3%;\"></div></div>";
			
		displayedChat=Name; //update displayed chat with the new chat

			document.getElementById("chatList").innerHTML +="<p id=\""+displayedChat+"\"><span onclick=\"chatSwt(&#39;"+displayedChat+"&#39;,displayedChat)\"style=\"cursor: pointer; background-color: #2196f3;color: white; padding: 5px;\">"+document.getElementById("title"+Name).innerHTML.substring(0, 6)+"</span><span  id=\"chatClose\" class=\"chatClose\" style=\"cursor: pointer;\">⊟</span></p>";

	
		document.getElementById("chatContainer").innerHTML +=" <div class=\"chatContent\" id=\"chat"+displayedChat+"\"><h1 style=\"position: absolute; color: white; top: 0%; left: 9%;font-family: JuneBug2;\">"+document.getElementById("title"+Name).innerHTML+"</h1><p style=\"color: white; font-family: JuneBug3;\">"+Desc+"</p><div class=\"form__group field\" style=\"bottom:1%; width:100%; position:absolute;left:2%;\"><input onchange=\"chatSubmit(true)\" type=\"input\" class=\"form__field\" placeholder=\""+window.username+"\" name=\"name\" id=\'name"+displayedChat+"\' required /><label for=\"name"+displayedChat+"\" class=\"form__label\" id=\"formLabel\">"+window.username+"</label></div><div class=\"limitingframe\" style=\"width:107% ;height:78%;top:2%; overflow:scroll; overflow-x: hidden; position:relative;\"><div class=\"chatUserContent\" id=\"chatUserContent"+displayedChat+"\" style =\"bottom: 3%;position: relative; overflow: hidden;\"><!--chat content to be inserted--></div></div></div>";
	
}





}




function chatJoin()
{
var CHANAME=document.getElementById("grabberValue").value
window.client.joinChanel(CHANAME)


}

function chatSwt(toChat,fromChat){
        if(toChat == fromChat) { 
     	    console.log("already on "+fromChat);
	    return;
        }
	console.log("switching to "+toChat);
	if (fromChat!="disposed") {
		document.getElementById("chat"+fromChat).style.visibility = "hidden"; 
		document.getElementById("friendFrame"+fromChat).style.visibility = "hidden";}
	document.getElementById("chat"+toChat).style.visibility = "visible";
	
	document.getElementById("friendFrame"+toChat).style.visibility = "visible";
	console.log("setting "+"friendFrame"+fromChat+"hidden and "+"friendFrame"+toChat+"visible")
	displayedChat=toChat;
}


//chatPut('topsmurfs','very competitive');
//chatPut('ultirtsTerminal','terminal');
