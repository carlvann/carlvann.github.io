months = ['January',
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

date = new Date();
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

let days= "";

for(let x = lastTotalDays - startDay +1; x <= lastTotalDays; x++){
	days += `<div>${x}</div>`;
	document.querySelector('.days').innerHTML = days;
}

for(let i = 1; i <= endDate; i++){
	days += `<div>${i}</div>`;
	document.querySelector('.days').innerHTML = days;
}

if(endDay < 6){
	for(let i = 1; i <= 6 - nextDay; i++){
		days += `<div>${i}</div>`;
		document.querySelector('.days').innerHTML = days;
	}
}


function nextMonth(){
	document.querySelector('.prev-month').innerHTML = months[lastMonth +1];
	document.querySelector('.curr-month').innerHTML = months[todayMonth +1];
	document.querySelector('.next-month').innerHTML = months[nextMonth +1];
}

function prevMonth(){
	document.querySelector('.prev-month').innerHTML = months[lastMonth -1];
	document.querySelector('.curr-month').innerHTML = months[todayMonth -1];
	document.querySelector('.next-month').innerHTML = months[nextMonth -1];
}
