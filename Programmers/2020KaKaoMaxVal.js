let totalArr = [];
let expArr = [];
let combinations = [];

function getCombination(idx, obj) {
	if (idx === expArr.length) {
		combinations.push(obj);
	}
	for (let i = 1; i <= expArr.length; i++) {
		let tempObj = { ...obj }
		if (!tempObj[i]) {
			tempObj[i] = expArr[idx];
			getCombination(idx + 1, { ...tempObj });
		}
	}
}

function calculate(num1, num2, expression) {
	if (expression === "+") return num1 + num2;
	else if (expression === "-") return num1 - num2;
	else if (expression === "*") return num1 * num2;
}

function solution(expression) {
	var answer = [];
	let temp = ""
	for (let char of expression) {
		if (char.charCodeAt() >= "0".charCodeAt() && char.charCodeAt() <= "9".charCodeAt())
			temp += char;
		else {
			totalArr.push(temp);
			totalArr.push(char);
			expArr.push(char);
			temp = "";
		}
	}

	if (temp !== "") totalArr.push(temp);

	expArr = [...new Set(expArr)];

	getCombination(0, {});

	for (let combination of combinations) {
		let tempArr = [...totalArr]
		for (let i = 1; i <= expArr.length; i++) {
			while (true) {
				const findIndex = tempArr.findIndex((value) => value === combination[i])
				if (findIndex < 0) break;
				tempArr[findIndex - 1] = calculate(Number(tempArr[findIndex - 1]), Number(tempArr[findIndex + 1]), tempArr[findIndex]);
				tempArr.splice(findIndex, 2);
			}
		}
		answer.push(Math.abs(tempArr[0]));
	}

	return Math.max(...answer);
}