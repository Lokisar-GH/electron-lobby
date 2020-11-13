timerFrame=0;
function inputGrabber(heading="unifiedInputField",subHeading="Things typed will be retrieved by the caller",exampleInput="main",callback)
{	
	if (window.grabbing)
	{
		return;
	}
	window.grabbing=true;
window.timer3=setInterval(grabberArise, 0.5);
	document.getElementById('grabberValue').setAttribute('onchange',callback+'();inputReleaser();');
	document.getElementById("inputGrabber").style.visibility = "visible";
	document.getElementById("grabberTitle").innerHTML = heading;
	document.getElementById("grabberSubTitle").innerHTML = subHeading;
	document.getElementById("exampleForm").innerHTML = exampleInput;
}

function inputReleaser()
{

	if (window.releasing)
	{
		return;
	}
	window.releasing=true;
	document.getElementById("grabberValue").value="";
	window.timer3=setInterval(grabberDel, 0.5);
}

function grabberDel(){
console.log("grabber deactivating"+timerFrame)
	document.getElementById("grabberMask").style.opacity=0.7-0.007*2*timerFrame;
	document.getElementById("grabberBG").style.opacity=0.7-0.007*2*timerFrame;
	document.getElementById("grabberBG").style.right=0-2*timerFrame+"%";
	if (timerFrame >= 50) {
		
		clearInterval(window.timer3);
		timerFrame=0;
		document.getElementById("inputGrabber").style.visibility = "hidden";

		window.releasing=false;
	}
	timerFrame++;


}

function grabberArise(){
console.log("grabber active")
	document.getElementById("grabberMask").style.opacity=0.007*2*timerFrame;
	document.getElementById("grabberBG").style.opacity=0.007*2*timerFrame;
	document.getElementById("grabberBG").style.right=-100+2*timerFrame+"%";
	if (timerFrame >= 50) {
			window.grabbing=false;
		clearInterval(window.timer3);
		timerFrame=0
	}
	timerFrame++;


}


