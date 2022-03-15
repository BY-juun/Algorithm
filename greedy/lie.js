let know;
let arr = [];
let parents;
let v = [];

function Find(x) {
	if (parents[x] === x) return x;
	return x = Find(parents[x]);
}

function Union(x, y) {
	x = Find(x);
	y = Find(y);
	parents[x] = y;
}
function solve() {
	for (let j = 0; j < arr.length; j++) {
		let num;
		let prev;
		for (let i = 0; i < arr[j].length; i++) {
			if (i >= 1) {
				prev = num;
				num = arr[j][i];
				Union(prev, num);
			}
			else {
				num = arr[j][i];
			}
			//	v[j].push(num);
		}
	}

	let answer = 0;
	for (let x of arr) {
		let check = 0;
		for (let i = 0; i < arr.length; i++) {
			for (let j = 0; j < know.length; j++) {
				if (Find(x[i]) === Find(know[j])) {
					check = 1;
					break;
				}
			}
			if (check === 1) break;
		}
		if (check === 0) answer++;
	}
	console.log(answer);
}

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
	input.push(line);
}).on("close", function () {
	let [n, m] = input[0].split(" ").map((value) => Number(value));
	parents = Array.from({ length: n + 1 }, (v, i) => i);
	input = input.slice(1);
	know = input[0].split(" ").map((value) => Number(value));
	know.shift();
	input = input.slice(1);
	for (let x of input) {
		let temp = x.split(" ").map((value) => Number(value));
		temp.shift();
		arr.push(temp);
	}
	solve();
	process.exit();
});
