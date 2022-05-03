function checkBalance(p) {
	let stack = [];
	let check = 0;
	for (let pair of p) {
		if (pair === '(') stack.push("(");
		else if (pair === ")") {
			if (stack.length >= 1) stack.pop();
			else {
				check = 1;
				break;
			}
		}
	}
	if (!check) return true;
	return false;
}

function getU(p) {
	let count = 0;
	let returnString = "";
	let returnIdx = 0;
	for (let x of p) {
		if (x === "(") {
			count++;
			returnString += "(";
			returnIdx++;
		}
		else if (x === ")") {
			count--;
			returnString += ")";
			returnIdx++;
		}
		if (count === 0) return [returnString, returnIdx];
	}
	return "";
}

function solve(p) {
	if (p.length <= 0) return "";
	let u, idx;
	[u, idx] = getU(p);
	p = p.slice(idx, p.length);
	if (checkBalance(u)) {
		return u + solve(p);
	} else {
		let cutStr = u.slice(1).slice(0, -1);
		let nextStr = "";
		for (let x of cutStr) {
			if (x === "(") nextStr += ")";
			else nextStr += "(";
		}
		return "(" + solve(p) + ")" + nextStr;
	}
}

function solution(p) {
	var answer = '';
	if (checkBalance(p)) return p;
	answer = solve(p);

	return answer;
}