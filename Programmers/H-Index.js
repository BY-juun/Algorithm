function solution(citations) {
	var answer = 0;
	let cur = 0;
	var next = 0;
	citations.sort((a, b) => a - b);
	for (const h of citations) {
		if (citations.filter((v) => v >= h).length >= h) cur = h;
		else {
			next = h;
			break;
		}
	}
	for (let i = cur; i < next; i++) {
		if (citations.filter((v) => v >= i).length >= i) answer = i;
		else break;
	}
	return answer;
}