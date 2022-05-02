function solution(n, lost, reserve) {
	var answer = 0;
	const students = Array.from({ length: n + 2 }, () => 1);
	for (const x of lost) students[x] -= 1;
	for (const x of reserve) students[x] += 1;
	for (let i = 1; i < n + 1; i++) {
		if (students[i] === 0) {
			if (students[i - 1] === 2) {
				students[i] += 1;
				students[i - 1] -= 1;
			}
			else if (students[i + 1] === 2) {
				students[i] += 1;
				students[i + 1] -= 1;
			}
		}
	}
	for (const student of students) {
		answer += student > 0 ? 1 : 0;
	}
	answer -= 2;
	return answer;
}