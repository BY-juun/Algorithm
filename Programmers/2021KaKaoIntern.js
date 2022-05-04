const dx = [-1, 0, 0, 1, 1, -1, 1, -1];
const dy = [0, 1, -1, 0, 1, -1, -1, 1];
let check;
let isVisited;
let curPlace;

function getManhatanDist(Pos1, Pos2) {
	return Math.abs(Pos1.x - Pos2.x) + Math.abs(Pos1.y - Pos2.y);
}

function checkDist(startPos, curPos) {
	let dist = getManhatanDist(startPos, curPos)

	if (dist > 2) return;

	//if(check) return;
	if (curPlace[curPos.x][curPos.y] === "P" && dist !== 0) {

		check = true;
		return;
	}

	for (let i = 0; i < 4; i++) {
		let Dx = curPos.x + dx[i];
		let Dy = curPos.y + dy[i];
		if (Dx >= 0 && Dx < 5 && Dy >= 0 && Dy < 5) {
			if (isVisited[Dx][Dy] === false && curPlace[Dx][Dy] !== "X") {
				isVisited[Dx][Dy] = true;
				let newPos = { x: Dx, y: Dy };
				checkDist(startPos, newPos);
			}
		}
	}

}

function checkDistanceCal() {
	for (let i = 0; i < 5; i++) {
		for (let j = 0; j < 5; j++) {
			if (curPlace[i][j] === "P") {
				isVisited = Array.from({ length: 5 }, () => Array.from({ length: 5 }, () => false));
				isVisited[i][j] = true;
				checkDist({ x: i, y: j }, { x: i, y: j });
				if (check) return 0;
			}
		}
	}
	return 1;
}

function solution(places) {
	var answer = [];

	for (let place of places) {
		check = false;
		curPlace = [...place];
		answer.push(checkDistanceCal());
	}

	return answer;
}