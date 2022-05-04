let n, m;
let arr;
let answer = 0;
const solve = () => {
	let start = 0;
	let end = 0;

	let sum = arr[start];

	while (start < n && end < n) {
		if (sum < m)
			sum += arr[++end];
		else if (sum > m)
			sum -= arr[start++];
		else {
			answer++;
			sum += arr[++end]
		}
	}
};

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
	input.push(line);
}).on("close", function () {
	[n, m] = input[0].split(" ").map((value) => Number(value));
	arr = input[1].split(" ").map((value) => Number(value));
	solve();
	console.log(answer);
});
