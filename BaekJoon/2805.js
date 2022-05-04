let N, M;
let trees;

const solve = () => {
	let [start, end] = [0, Math.max(...trees)];
	let mid
	let cutLength
	while (start <= end) {
		mid = Math.floor((start + end) / 2);
		cutLength = 0;
		trees.forEach((value) => {
			if (value >= mid) cutLength += (value - mid);
		})
		if (cutLength >= M)
			start = mid + 1;
		else
			end = mid - 1;
	}
	console.log(end);
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
	input.push(line);
}).on("close", function () {
	[N, M] = input[0].split(" ");
	trees = input[1].split(" ").map((value) => Number(value));
	solve();
});
