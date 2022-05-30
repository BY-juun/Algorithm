function makeTimeFormant(num) {

	if (num >= 1000) {
		if (num % 100 >= 10) return String(Math.floor(num / 100)) + ":" + String(num % 100)
		else return String(Math.floor(num / 100)) + ":" + "0" + String(num % 100)
	}
	else {
		if (num % 100 >= 10) return "0" + String(Math.floor(num / 100)) + ":" + String(num % 100)
		else return "0" + String(Math.floor(num / 100)) + ":" + "0" + String(num % 100)
	}
}

function MinusTime(time, num) {
	if (Math.floor((time - num) / 100) === Math.floor(time / 100)) return time - num;
	else {
		return Math.floor(time / 100 - 1) * 100 + 59;
	}
}

function solution(n, t, m, timetable) {
	timetable =
		timetable
			.map((v) => {
				return Number(v.split("").filter((k) => k !== ":").join(""));
			})
			.sort((a, b) => a - b);

	let curTime = 900;
	let curN = 1;
	let line = [];
	while (true) {

		while (timetable.length !== 0) {
			if (timetable[0] <= curTime) line.push(timetable.shift());
			else break;
		}
		if (curN === n) {
			if (line.length < m) return makeTimeFormant(curTime);
			else { return makeTimeFormant(MinusTime(line[m - 1], 1)); }
		}
		if (line.length > m) line.splice(0, m);
		else line = [];
		curN += 1;
		curTime += t;
		if (curTime % 100 >= 60) curTime = curTime - 60 + 100;
	}
}

console.log(solution(2, 1, 2, ["09:00", "09:00", "09:00", "09:00"]));