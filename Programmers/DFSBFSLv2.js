let answer = 0;

function solution(numbers, target) {

	Recursion(0, 0, numbers, target)
	return answer;
}


function Recursion(total, idx, numbers, target) {
	if (idx === numbers.length) {
		if (total === target) answer++;
		return;
	}
	Recursion(total + numbers[idx], idx + 1, numbers, target)
	Recursion(total - numbers[idx], idx + 1, numbers, target);
}