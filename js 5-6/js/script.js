
var wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);
var headerTimer = document.createElement('div');
headerTimer.classList.add('header_timer');
wrapper.appendChild(headerTimer);
var mainDisplay = document.createElement('p');
mainDisplay.classList.add('main_display');
mainDisplay.innerHTML = '00:00:00.00';
headerTimer.appendChild(mainDisplay);
var timerButtons = document.createElement('div');
timerButtons.classList.add('timer_buttons');
wrapper.appendChild(timerButtons);
var startButton = document.createElement('button');
startButton.classList.add('start_button')
startButton.innerHTML = 'START';
startButton.addEventListener('click', startTimer);
timerButtons.appendChild(startButton);
var pauseButton = document.createElement('button');
pauseButton.classList.add('pause_button')
pauseButton.innerHTML = 'PAUSE';
pauseButton.addEventListener('click', pauseTimer)
timerButtons.appendChild(pauseButton);
var clearButton = document.createElement('button');
clearButton.classList.add('clear_button')
clearButton.innerHTML = 'CLEAR';
clearButton.addEventListener('click', clearTimer)
timerButtons.appendChild(clearButton);

var miliseconds1 = 0;
var miliseconds2 ='';
var seconds1 = 0;
var seconds2 ='';
var minutes1 = 0;
var minutes2 ='';
var hours1 = 0;
var hours2 ='';
var clockTimer;

function startTimer(){
	if(miliseconds1 <= 99){miliseconds1++;}

	if(miliseconds1 > 99){
		seconds1++;
		miliseconds1 = 0;
	}

	if (seconds1 > 59){
		minutes1++;
		seconds1 = 0;
	}

	if (minutes1 > 59){
		hours1++;
		minutes1 = 0;
	}

	if (hours1 > 23){hours1 = 0;}

	if(miliseconds1 < 10){
		miliseconds2 = '0'+ miliseconds1;
	}else{miliseconds2 = miliseconds1;}

	if (seconds1 < 10){
		seconds2 = '0'+ seconds1;
	} else {seconds2 = seconds1;}

	if (minutes1 < 10){
		minutes2 = '0'+ minutes1;
	} else {minutes2 = minutes1;}

	if (hours1 < 10){
		hours2 = '0'+ hours1;
	} else {hours2 = hours1;}

	mainDisplay.innerHTML = hours2 + ':' + minutes2 + ':' + seconds2 + '.' + miliseconds2;
	clockTimer = setTimeout(startTimer, 10); 
	startButton.style.margin = '-10000px';
	pauseButton.style.margin = '0px';

}

function pauseTimer(){
	clearTimeout(clockTimer);
	pauseButton.style.margin = '-10000px';
	startButton.style.margin = '0px';
	startButton.innerHTML = 'CONT..';

}

function clearTimer() {
	clearTimeout(clockTimer);
	startButton.style.margin = '0px';
	startButton.innerHTML = 'START';
	miliseconds1 = 0;
	seconds1 = 0;
	minutes1 = 0;
	hours1 = 0;
	mainDisplay.innerHTML = '00:00:00.00';
}
