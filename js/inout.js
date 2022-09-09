//	時計の整形
function addZero(num) {
	return (num < 10) ? "0" + num : num;
}

//	時計
function showClock() {
	let nowTime = new Date();
	let nowYear = addZero(nowTime.getFullYear());
	let nowMonth = addZero(nowTime.getMonth() + 1);
	let nowDate = addZero(nowTime.getDate());
	let nowDayNum = nowTime.getDay();
	let dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	let nowDay = dayOfWeek[nowDayNum]
	let nowHour = addZero(nowTime.getHours());
	let nowMinute = addZero(nowTime.getMinutes());
	let nowSecond = addZero(nowTime.getSeconds());
	document.getElementById('date-area').innerHTML = nowYear + "/" + nowMonth + "/" + nowDate + " (" + nowDay + ")";
	document.getElementById('time-area').innerHTML = nowHour + ":" + nowMinute + ":" + nowSecond;
}
//	1秒ごとに時計を更新
setInterval('showClock()', 1000);

//	出勤退勤ボタン
function inoutClick() {
	let nowTime = new Date();
	let nowYear = addZero(nowTime.getFullYear());
	let nowMonth = addZero(nowTime.getMonth() + 1);
	let nowDate = addZero(nowTime.getDate());
	let nowHour = addZero(nowTime.getHours());
	let nowMinute = addZero(nowTime.getMinutes());
	let nowSecond = addZero(nowTime.getSeconds());
	let button = document.getElementById('in-out-button');
	let useDate = nowYear + "/" + nowMonth + "/" + nowDate + " " + nowHour + ":" + nowMinute + ":" + nowSecond;

	if (button.value == "出勤") {
		document.getElementById('work-start-date').innerHTML = useDate;
		button.value = "退勤"
	} else {
		let workStartDate = document.getElementById('work-start-date').textContent;
		//	勤務時間計算
		let workSec = Math.abs(new Date(useDate).getTime() - new Date(workStartDate)) / 1000;
		let workHour = Math.floor(workSec / 3600);
		let workMin = Math.floor(workSec % 3600 / 60);
		let workTotal = workHour + "時間" + workMin + "分"
		document.getElementById('work-end-date').innerHTML = useDate;
		document.getElementById('work-total-time').innerHTML = workTotal + "働きました";
		button.value = "出勤"
	}
}

//	休憩ボタン
function chillClick() {
	let nowTime = new Date();
	let nowYear = addZero(nowTime.getFullYear());
	let nowMonth = addZero(nowTime.getMonth() + 1);
	let nowDate = addZero(nowTime.getDate());
	let nowHour = addZero(nowTime.getHours());
	let nowMinute = addZero(nowTime.getMinutes());
	let nowSecond = addZero(nowTime.getSeconds());
	let button = document.getElementById('in-out-button');
	let useDate = nowYear + "/" + nowMonth + "/" + nowDate + " " + nowHour + ":" + nowMinute + ":" + nowSecond;
	let button = document.getElementById('chill-button');
	if (button.value == "休憩") {
		document.getElementById('chill-start-date').innerHTML = useDate;
		button.value = "休憩終了"
	} else {
		let chillStartDate = document.getElementById('work-start-date').textContent;
		//	勤務時間計算
		let chillSec = Math.abs(new Date(useDate).getTime() - new Date(chillStartDate)) / 1000;
		let chillHour = Math.floor(chillSec / 3600);
		let chillMin = Math.floor(chillSec % 3600 / 60);
		let chillTotal = chillHour + "時間" + chillMin + "分"
		document.getElementById('chill-end-date').innerHTML = useDate;
		document.getElementById('chill-total-time').innerHTML = chillTotal + "休憩しました";
		button.value = "休憩"
	}
}
