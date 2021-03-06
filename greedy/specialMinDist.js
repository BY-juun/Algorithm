let n, e;

let should = [];
let isVisited;



const getMin = (vertex) => {
	let min = Infinity;
	let idx = 0;
	for (let i = 0; i < vertex.length; i++) {
		if (min > vertex[i]) {
			min = vertex[i];
			idx = i;
		}
	}
	return idx;
};

function solve(arr, startPos, endPos) {
	if (startPos === endPos) return 0;
	let v = arr[startPos - 1];
	let count = 0;
	let end = v.length;
	let min = 0;
	let startV = v;
	while (count < end) {
		const idx = getMin(startV);
		min += startV[idx];
		const next = arr[idx];
		for (let i = 0; i < v.length; i++) {
			if (v[i] > next[i] + min) {
				v[i] = next[i] + min;
			}
		}
		startV = arr[idx];
		count++;
	}
	return v[endPos - 1];
}

function copyArray(arr) {
	let CopyArr = [];
	for (let x of arr) {
		let temp = [...x];
		CopyArr.push(temp);
	}
	return CopyArr;
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
	input.push(line);
}).on("close", function () {
	[n, e] = input[0].split(" ").map((value) => Number(value));
	input = input.slice(1);
	let arr;
	arr = Array.from({ length: n }, () => Array.from({ length: n }, () => Infinity));

	isVisited = Array.from({ length: n }, () => false);
	for (let i = 0; i < e; i++) {
		let temp = input[i].split(" ").map((value) => Number(value));
		arr[temp[0] - 1][temp[1] - 1] = temp[2];
		arr[temp[1] - 1][temp[0] - 1] = temp[2];
	}
	input[e].split(" ").map((value) => should.push(Number(value)));
	console.log(arr);
	console.log(should);
	let result1 = solve(copyArray(arr), should[0], should[1]) + solve(copyArray(arr), 1, should[0]) + solve(copyArray(arr), should[1], arr.length);
	let result2 = solve(copyArray(arr), should[1], should[0]) + solve(copyArray(arr), 1, should[1]) + solve(copyArray(arr), should[0], arr.length);
	const result = result1 > result2 ? result2 : result1;
	console.log(result === Infinity ? -1 : result);
});
