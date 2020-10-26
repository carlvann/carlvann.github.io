const date  = new Date(2020, 11,16);
const month = date.getMonth();
const numDay = date.getDate();
const day = date.getDay();
const year = date.getFullYear();
const startDay = new Date(year, month,1).getDay();
const lastTotalDays = new Date(year, month,0).getDate()
const nextDay = new Date(year, month +  1,0).getDay()
const lastDay = new Date(year, month + 1, 0).getDate()
console.log(lastDay)


const months = [
	'January',
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
	'December'
]


document.querySelector('.month').innerHTML = months[month];

let days= "";

for(let x = lastTotalDays - startDay +1; x <= lastTotalDays; x++){
	days += `<div>${x}</div>`;
	document.querySelector('.days').innerHTML = days;
}

for(let i = 1; i <= lastDay; i++){
	days += `<div>${i}</div>`;
	document.querySelector('.days').innerHTML = days;
}

if(nextDay < 6){
	for(let i = 1; i <= 6 - nextDay; i++){
		days += `<div>${i}</div>`;
		document.querySelector('.days').innerHTML = days;
	}
}
