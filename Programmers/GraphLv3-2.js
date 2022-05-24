function solution(n, results) {
	var answer = 0;

	let arr = Array.from({ length: n }, () => Array.from({ length: n }, () => 0))
	for (const [a, b] of results) {
		arr[a - 1][b - 1] = 1;
		arr[b - 1][a - 1] = -1;
	}

	for (let k = 0; k < n; k++) {
		for (let i = 0; i < n; i++) {
			for (let j = 0; j < n; j++) {
				if (i !== j && arr[i][j] === 0) {
					if (arr[i][k] === 1 && arr[k][j] === 1) {
						arr[i][j] = 1;
						arr[j][i] = -1;
					}

					if (arr[i][k] === -1 && arr[k][j] === -1) {
						arr[i][j] = -1;
						arr[j][i] = 1;
					}
				}
			}
		}
	}

	for (let i = 0; i < n; i++) {
		let check = true;
		for (let j = 0; j < n; j++) {
			if (i !== j && arr[i][j] === 0) {
				check = false;
				break;
			}
		}
		if (check) answer++;
	}
	return answer;
}