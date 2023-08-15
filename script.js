const playBtn = document.querySelector('#play');
const resetBtn = document.querySelector('#reset');
const hoursNum = document.querySelector('#hours').querySelector('.num');
const minutesNum = document.querySelector('#minutes').querySelector('.num');
const secondsNum = document.querySelector('#seconds').querySelector('.num');
const millisecondsNum = document.querySelector('#milliseconds').querySelector('.num');

let timerPlay = false;
let timerId = null;
let date = null;

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

const changeTime = () => {
	const currentDate = new Date();
	
	const currentMilliseconds = currentDate.getTime();
	const millisecondsTime = date.getTime();
	const timerMilliseconds = currentMilliseconds - millisecondsTime;
	
	date = currentDate;
	
	const newMilliseconds = timerMilliseconds + milliseconds + seconds * 1000 + minutes * 1000 * 60 + hours * 1000 * 3600;
	
	const timerDate = new Date(newMilliseconds);
	
	milliseconds = timerDate.getMilliseconds();
	seconds = timerDate.getSeconds();
	minutes = timerDate.getMinutes();
	hours = timerDate.getHours() - 4;
	
	const millisecondsString = String(milliseconds);
	const secondsString = String(seconds);
	const minutesString = String(minutes);
	const hoursString = String(hours);
	switch(millisecondsString.length) {
		case 1: millisecondsNum.textContent = `0 0 ${millisecondsString}`;
		break;
		case 2:millisecondsNum.textContent = `0 ${millisecondsString[0]} ${millisecondsString[1]}`;
		break;
		case 3: millisecondsNum.textContent = `${millisecondsString[0]} ${millisecondsString[1]} ${millisecondsString[2]}`;
		break;
		default:
		break;
	}
	
	
	secondsNum.textContent = secondsString.length === 2 ? `${secondsString[0]} ${secondsString[1]}` : `0 ${secondsString[0]}`;
	minutesNum.textContent = minutesString.length === 2 ? `${minutesString[0]} ${minutesString[1]}` : `0 ${minutesString[0]}`;;
	hoursNum.textContent = hoursString.length === 2 ? `${hoursString[0]} ${hoursString[1]}` : `0 ${hoursString[0]}`;;
	
			if(timerPlay) {
				requestAnimationFrame(changeTime);
			}
}

playBtn.addEventListener('click', () => {
	if(!timerPlay) {
		timerPlay = true;
		date = new Date();
		playBtn.textContent = 'Остановить';
		requestAnimationFrame(changeTime);
	}
	else {
		timerPlay = false;
	}
});

resetBtn.addEventListener('click', () => {
hours = 0;
minutes = 0;
seconds = 0;
milliseconds = 0;

millisecondsNum.textContent = '0 0 0';
secondsNum.textContent = '0 0';
minutesNum.textContent = '0 0';
hoursNum.textContent = '0 0';
})
