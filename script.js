const months = ['January',
'February',
'March',
'April',
'May',
'June',
'July',
'August',
'September',
'October',
'November',
'December']

let date = new Date()
const rootMonth = date.getMonth()
const rootYear = date.getFullYear()

function startUp(){
	today = date.getDate()
	todayWeek = date.getDay()
	todayMonth = date.getMonth()
	todayYear = date.getFullYear()
	startDay = new Date(todayYear, todayMonth, 1).getDay();
	endDay = new Date(todayYear, todayMonth + 1, 0).getDay();
	endDate = new Date(todayYear, todayMonth + 1, 0).getDate();
	lastTotalDays = new Date(todayYear, todayMonth,0).getDate()
	lastMonth = new Date(todayYear, todayMonth, 0).getMonth();
	nextMonth = new Date(todayYear, todayMonth + 1, 1).getMonth();



	document.querySelector('.prev-month').innerHTML = months[lastMonth];
	document.querySelector('.curr-month').innerHTML = months[todayMonth];
	document.querySelector('.next-month').innerHTML = months[nextMonth];
	document.querySelector('.curr-year').innerHTML = todayYear
	let days= "";

	for(let x = lastTotalDays - startDay +1; x <= lastTotalDays; x++){
		days += `<div class = "pastDays">${x}</div>`;
		document.querySelector('.days').innerHTML = days;
	}

	for(let i = 1; i <= endDate; i++){
		if(i == today  && rootMonth == todayMonth && rootYear == todayYear){
			days += `<div class = "today">${i}</div>`;
		}else{
			days += `<div>${i}</div>`;
		}
		document.querySelector('.days').innerHTML = days;
	}

	if(endDay < 6){
		for(let i = 1; i <= 6 - endDay; i++){
			days += `<div class = "upcomingDays">${i}</div>`;
			document.querySelector('.days').innerHTML = days;
		}
	}

}

function incMonth(){
	document.querySelector('.prev-month').innerHTML = months[lastMonth +1];
	document.querySelector('.curr-month').innerHTML = months[todayMonth +1];
	document.querySelector('.next-month').innerHTML = months[nextMonth +1];
	date.setMonth(todayMonth+1)
	startUp();
}

function subMonth(){
	document.querySelector('.prev-month').innerHTML = months[lastMonth -1];
	document.querySelector('.curr-month').innerHTML = months[todayMonth -1];
	document.querySelector('.next-month').innerHTML = months[nextMonth -1];
	date.setMonth(todayMonth-1)
	startUp();
}

function toggle(){
	let x = document.getElementBy
}

document.addEventListener('DOMContentLoaded', function() {
   startUp()
}, false);

function toggleOn(){
	document.getElementById('menu').style.width = "40%";
	document.getElementById('list').style.marginLeft = "0px";
	document.getElementById('close').style.marginLeft = "120px";
	document.getElementById('toggle').style.marginLeft = "-1000px";
}

function toggleOff(){
	document.getElementById('menu').style.width = "0%";
	document.getElementById('list').style.marginLeft = "-1000px";
	document.getElementById('close').style.marginLeft = "-1000px";
	document.getElementById('toggle').style.marginLeft = "0px";
}