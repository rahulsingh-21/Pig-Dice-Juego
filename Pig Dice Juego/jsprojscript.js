var score,activePlayer,roundScore,playing=true;

start();

function start()
{
	score=[0,0];
	activePlayer=0;
	roundScore=0;
	document.querySelector('.dice').style.display='none';
	document.getElementById('score-0').textContent='0';
	document.getElementById('score-1').textContent='0';
	document.getElementById('current-0').textContent='0';
	document.getElementById('current-1').textContent='0';
	document.getElementById('name-0').textContent='Player 1';
	document.getElementById('name-1').textContent='Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
}

function changePlayer()
	{
		roundScore=0;
		activePlayer===1 ? activePlayer=0 :activePlayer=1;
		document.getElementById('current-0').textContent='0';
		document.getElementById('current-1').textContent='0';
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');
	}


document.querySelector('.btn-roll').addEventListener('click',function()
{
	if(playing)
	{
	var dice=Math.ceil(Math.random()*6);
	var diceDom=document.querySelector('.dice');
	diceDom.style.display='block';
	diceDom.src='dice-'+dice+'.png';

	
	if(dice!==1)
	{
		roundScore+=dice;
		document.querySelector('#current-'+activePlayer).textContent=roundScore;
	}
	else
	{
		changePlayer();
	}	
	}
	

});

document.querySelector('.btn-hold').addEventListener('click',function()
{
	if(playing)
	{
	score[activePlayer]+=roundScore;
	document.querySelector('#score-'+activePlayer).textContent=score[activePlayer];
	if(score[activePlayer]>=80)
	{
		playing=false;
		document.querySelector('#name-'+activePlayer).textContent='Winner!';
		document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
		document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
		document.querySelector('.dice').style.display='none';
	}
	else
	{
		changePlayer();
	}
	}
	
	
});

document.querySelector('.btn-new').addEventListener('click',start);