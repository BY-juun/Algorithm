function solution(brown, yellow) {
	var answer = [];
	for (let col = 1; col <= yellow; col++) {
		if (yellow % col !== 0) continue;
		else {
			const row = yellow / col;
			if (row < col) continue;
			if (brown === (row + 2) * 2 + col * 2) return [row + 2, col + 2]
		}
	}
	return answer;
}