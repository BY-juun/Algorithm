let n, e;

let isVisited;
let arr;


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

function solve(startPos) {
	let v = arr[startPos - 1];
	let count = 0;
	let end = v.length;
	let min = 0;
	let startV = v;
	isVisited[startPos - 1] = true;

	while (count < end) {
		const idx = getMin(startV);
		min += startV[idx];
		const next = arr[idx];
		for (let i = 0; i < v.length; i++) {
			if (v[i] > next[i] + min && !isVisited[i]) {
				v[i] = next[i] + min;
			}
		}
		startV = arr[idx];
		isVisited[idx] = true;
		count++;
	}
	console.log(v);
}


const readline = require("readline");
const { start } = require("repl");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
	input.push(line);
}).on("close", function () {
	[n, e] = input[0].split(" ").map((value) => Number(value));
	input = input.slice(1);
	let startPos = Number(input[0]);
	input = input.slice(1);
	arr = Array.from({ length: n }, () => Array.from({ length: n }, () => Infinity));

	isVisited = Array.from({ length: n }, () => false);
	for (let i = 0; i < e; i++) {
		let temp = input[i].split(" ").map((value) => Number(value));
		if (arr[temp[0] - 1][temp[1] - 1] > temp[2]) {
			arr[temp[0] - 1][temp[1] - 1] = temp[2];
			arr[temp[1] - 1][temp[0] - 1] = temp[2];
		}
	}
	solve(startPos);
});
