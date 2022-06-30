function solution(begin, target, words) {
	let queue = [{ str: begin, count: 0 }];
	const wordCandidate = [];
	const isVisit = {};

	isVisit[begin] = true;
	for (let i = 0; i < words[0].length; i++) {
		wordCandidate.push([... new Set(words.map((v) => v[i]))]);
	}

	while (queue.length !== 0) {
		const { str: curWord, count } = queue.shift();
		if (curWord === target) return count;
		for (let i = 0; i < curWord.length; i++) {
			for (let j = 0; j < wordCandidate[i].length; j++) {
				let newWord = curWord.split("");
				newWord[i] = wordCandidate[i][j];
				newWord = newWord.join("");
				if (!isVisit[newWord] && words.includes(newWord)) {
					queue.push({ str: newWord, count: count + 1 });
					isVisit[newWord] = true;
				}
			}
		}
	}
	return 0;
}