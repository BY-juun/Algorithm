const combination = [];

function getComb(curArr, targetLength) {
	if (curArr.length === targetLength) {
		combination.push(curArr);
		return;
	}
	for (let i = 0; i < targetLength; i++) {
		if (!curArr.includes(i)) getComb([...curArr, i], targetLength);
	}
}

function getFatigue(combination, limit, dungeons) {
	let curFatigue = limit;
	let result = 0;
	combination.forEach((comb) => {
		if (curFatigue >= dungeons[comb][0]) {
			result++;
			curFatigue -= dungeons[comb][1]
		}
		else return result;
	})
	return result;
}

function solution(k, dungeons) {
	var answer = -1;
	getComb([], dungeons.length);
	combination.forEach((comb) => {
		const result = getFatigue(comb, k, dungeons);
		answer = answer < result ? result : answer
	})

	return answer;
}