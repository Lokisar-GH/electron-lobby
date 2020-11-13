function frdPut(page="main",name,battle){
	document.getElementById("friendlimitingFrame"+page).innerHTML +="<div class=\"userCard\" id=\"userCard"+page+name+"\" ><div style=\"position: absolute; height: 100%; top: 0; left:0%; width:1.6%; background-color: white;display:inline-block\"></div><span style=\"font-family: JuneBug2\">"+name+"</span><br><span>In "+battle+"<br> For: -\\- hr  -\\-min</span></div>";
}

function frdEliminate(page="main",name)
{
console.log("trying to remove"+ "userCard"+page+name+"")
	document.getElementById("userCard"+page+name).parentNode.removeChild(document.getElementById("userCard"+page+name));
	console.log("MP btn called!")


}
frdPut("main",'userA','A\'s gem');

