let n;
let arr;
const solve = () => {
	let dp = Array.from({ length: n }, () => 0);
	for (let i = 0; i < dp.length; i++) {
		const leftArr = arr.slice(0, i);
		const rightArr = arr.slice(i + 1).reverse();
		const left = findMaxIncrease(arr[i], leftArr);
		const right = findMaxIncrease(arr[i], rightArr);
		dp[i] = left + right + 1;
	}
	console.log(Math.max(...dp));
};

const findMaxIncrease = (pivot, arr) => {
	const temp = arr.filter((value) => value < pivot);
	if (temp.length === 0) return 0;
	let length = Array.from({ length: temp.length }, () => 1);
	for (let i = 0; i < temp.length; i++) {
		for (let j = 0; j < i; j++) {
			if (temp[j] < temp[i]) {
				length[i] = Math.max(length[i], length[j] + 1);
			}
		}
	}
	return length[temp.length - 1];
}


const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
	input.push(line);
}).on("close", function () {
	n = Number(input[0]);
	arr = input[1].split(" ").map((value) => Number(value));
	solve();
});
