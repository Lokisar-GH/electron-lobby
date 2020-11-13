function lobbyFlush(battleid, type, natType, founder, ip, port, maxPlayer, passworded, rank, mapHesh, engineName, engineVersion, map, title, gameName, channel)
{
	console.log("joined battle"+title)
	document.getElementById("lobbyContent").style.visibility = "hidden"; //hide lobby page once user goes to prebattle panel
	document.getElementById("prebattle").style.visibility = "visible";
	document.getElementById("pregameTitle").innerHTML ="❱ "+title;
    document.getElementById("hostSays").innerHTML ="afk 3sec for dinnar";
    
    document.getElementById('exitGem').setAttribute( "onclick", "exitGem("+window.nowinBattle+")" );
}

function exitGem(bID)
{
    window.client.leaveBattle();
    document.getElementById("lobbyContent").style.visibility="visible"
    document.getElementById("prebattle").style.visibility="hidden"
    chatSwt("main", bID)
    chatLeave(bID)
    
}

function donutPut()
{
document.getElementById("prebattle").innerHTML +="<div class=\"chart-container\" style=\"position: relative; width:50%\"><canvas id=\"mapPoll\"></canvas></div>"

var ctx = document.getElementById("mapPoll");
window.mapPoll = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Blue'],
        datasets: [{
            label: '# of Votes',
            data: [1,1],
            backgroundColor: [
                'rgba(255, 255, 255, 0.2)',
                'rgba(255, 255, 255, 0.4)',
		'rgba(255, 255, 255, 0.6)',
		'rgba(255, 255, 255, 0.8)',
		'rgba(255, 255, 255, 1)',
            ],
            borderColor: [
                'rgba(255, 255, 255, 0.2)',
                'rgba(255, 255, 255, 0.4)',
                'rgba(255, 255, 255, 0.6)',
                'rgba(255, 255, 255, 0.8)',
                'rgba(255, 255, 255, 1)',

            ],
            borderWidth: 1
        }]
    },
    options: {
    legend: {
     onClick: (e, i) => {
      console.log(i.text+" clicked");
    },
            display: true,
            labels: {
                fontColor: 'rgba(255, 255, 255,1)',
                fontSize: 12,
            }
        },



        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

};



function pollPut(pollName)
{
var newPoll = document.createElement('div');
newPoll.className="prebattlePolls";
newPoll.style="height:10%; width:100%; position:relative;";
newPoll.innerHTML = "<div id=\"theBar\" style=\"height:80%; width:80%; position:absolute;\"><div id=\" "+pollName+"yesYesYes\" style=\"left:0%; height:30%; width:50%; position:absolute;background-color: #FFFFFF\"></div><div id=\""+pollName+"noU\" style=\"right:0; height:30%; width:50%; position:absolute; overflow:hidden\"><span style=\"position: absolute; top: -50%; color: white; font-size:2vw;\">///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////<span></span></span></div></div><p style=\"left:0%;top:10%; position:absolute;color: #FFFFFF\">Satisfying: changing battle name to A?</p>";

document.getElementById("prebattle").appendChild(newPoll);

}


function donutUpdate()
{

	window.mapPoll.data.datasets[0].data[2] = 80;
	window.mapPoll.data.labels[2] = "Newly Added";
	window.mapPoll.update();
    window.mapPoll.data.datasets[0].data[1] = 80;
    window.mapPoll.update();

}


function donutEvent(event, array)
{
if(array[0]){
        console.log('0 clicked')
    }
	
	if(array[1]){
        console.log('1 clicked')
    }
    if(array[2]){
        console.log('2 clicked')
    }
    if(array[3]){
        console.log('3 clicked')
    }
    if(array[4]){
        console.log('4 clicked')
    }


}



























function pollUpdate()
{


}
