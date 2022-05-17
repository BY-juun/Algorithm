function solution(jobs) {
	var answer = 0;
	var originalLength = jobs.length;
	jobs.sort((a, b) => {
		if (a[0] !== b[0]) return a[0] - b[0];
		else return a[1] - b[1]
	});
	let curTime = jobs[0].reduce((acc, cur) => acc + cur, 0);
	answer += jobs[0][1];
	jobs = jobs.slice(1);

	let count = 1;
	let curPos = 0;
	let priorityQueue = [];

	while (count < originalLength) {
		if (curPos < jobs.length) {
			if (jobs[curPos][0] <= curTime) {
				priorityQueue.push(jobs[curPos]);
				curPos += 1;
				continue;
			}
		}
		if (priorityQueue.length !== 0) {
			priorityQueue.sort((a, b) => a[1] - b[1]);
			let nextJob = priorityQueue.shift();
			answer += curTime + nextJob[1] - nextJob[0];
			curTime += nextJob[1];
			count++;
		}
		else {
			let nextJob = jobs[0];
			answer += nextJob[1];
			curTime = nextJob[0] + nextJob[1];
			count++;
		}
	}

	answer = Math.floor(answer / originalLength);
	return answer;
}