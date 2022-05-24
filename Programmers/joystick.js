function UpOrDown(char) {
	const up = char.charCodeAt() - "A".charCodeAt();
	const down = "Z".charCodeAt() - char.charCodeAt() + 1;
	return up > down ? down : up;
}

function findNextPoint(curPoint, name) {
	let originalPoint = curPoint;
	curPoint = curPoint + 1 === name.length ? 0 : curPoint + 1;
	if (name[curPoint] !== "A") return curPoint;
	let count = 1;
	while (true) {
		curPoint = curPoint + 1 === name.length ? 0 : curPoint + 1;
		if (name[curPoint] !== "A") break;
		count++;
	}


	while (true) {
		originalPoint = originalPoint - 1 === -1 ? name.length - 1 : originalPoint - 1;
		if (name[originalPoint] !== "A") break;
		count--;
	}
	if (count > 0) return originalPoint;
	else return curPoint;
}

function solution(name) {
	var answer = 0;
	let curPoint = 0;
	let originalName = Array.from({ length: name.length }, () => "A");
	while (true) {
		answer += UpOrDown(name[curPoint]);
		originalName[curPoint] = name[curPoint];
		if (originalName.join("") === name) break;
		curPoint = findNextPoint(curPoint, name);
		answer += 1;
	}
	console.log(answer);
	return answer;
}

solution("JAN")