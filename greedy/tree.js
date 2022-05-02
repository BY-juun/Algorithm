let n, m, k, c;
let graph = [];
let answer = 0;
const growDirX = [0, 1, 0, -1];
const growDirY = [-1, 0, 1, 0];
const pickDirX = [-1, 1, -1, 1];
const pickDirY = [-1, 1, 1, -1];

const clean = () => {
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (graph[i][j].fire === true) {
				graph[i][j].spend -= 1;
				if (graph[i][j].spend === 0) {
					graph[i][j].fire = false;
					graph[i][j].num = 0;

				}
			}
		}
	}
}

const grow = () => {
	let countGraph = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			let count = 0;
			for (let dir = 0; dir < 4; dir++) {
				const DirX = i + growDirX[dir];
				const DirY = j + growDirY[dir];
				if (DirX >= 0 && DirY >= 0 && DirX < n && DirY < n) {
					if (graph[DirX][DirY].num >= 1 && graph[i][j].num >= 1) count++;
				}
			}
			countGraph[i][j] = count;
		}
	}

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			graph[i][j].num += countGraph[i][j];
		}
	}
}

const spread = () => {
	let countGraph = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			let count = 0;
			if (graph[i][j].num >= 1) {
				for (let dir = 0; dir < 4; dir++) {
					let DirX = i + growDirX[dir];
					let DirY = j + growDirY[dir];
					if (DirX >= 0 && DirY >= 0 && DirX < n && DirY < n)
						if (graph[DirX][DirY].num === 0 && graph[DirX][DirY].fire === false) count++;
				}
				for (let dir = 0; dir < 4; dir++) {
					let DirX = i + growDirX[dir];
					let DirY = j + growDirY[dir];
					if (DirX >= 0 && DirY >= 0 && DirX < n && DirY < n)
						if (graph[DirX][DirY].num === 0 && graph[DirX][DirY].fire === false) countGraph[DirX][DirY] += Math.floor(graph[i][j].num / count);
				}
			}
		}
	}
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			graph[i][j].num += countGraph[i][j];
		}
	}
}

const pick = () => {
	let max = Number.MIN_SAFE_INTEGER;
	let pickX = 0;
	let pickY = 0;

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			let count = 0;
			if (graph[i][j].num === -1) continue;
			if (graph[i][j].num === 0 && graph[i][j].fire === false) continue;
			for (let dir = 0; dir < 4; dir++) {
				for (let dist = 1; dist <= k; dist++) {
					let DirX = i + dist * pickDirX[dir];
					let DirY = j + dist * pickDirY[dir];
					if (DirX >= 0 && DirY >= 0 && DirX < n && DirY < n) {
						if (graph[DirX][DirY].num === -1) break;
						else if (graph[DirX][DirY].num === 0 && graph[DirX][DirY].fire === false) break;
						else if (graph[DirX][DirY].num >= 1) {
							count += graph[DirX][DirY].num;
						}
					}
				}
			}
			if (graph[i][j].num >= 1) count += graph[i][j].num;
			if (count > max) {
				max = count;
				pickX = i;
				pickY = j;
			}
		}
	}

	answer += max;

	graph[pickX][pickY].fire = true;
	graph[pickX][pickY].spend = Number(c) + 1;
	graph[pickX][pickY].num = 0;

	//if (fired) return;

	for (let dir = 0; dir < 4; dir++) {
		for (let dist = 1; dist <= k; dist++) {
			let DirX = pickX + dist * pickDirX[dir];
			let DirY = pickY + dist * pickDirY[dir];
			if (DirX >= 0 && DirY >= 0 && DirX < n && DirY < n) {
				const Num = graph[DirX][DirY].num;
				const isFire = graph[DirX][DirY].fire;
				if (Num === -1) break;
				graph[DirX][DirY].fire = true;
				graph[DirX][DirY].spend = Number(c) + 1;
				graph[DirX][DirY].num = 0;
				if (Num === 0 && isFire === false) break;
			}
		}
	}

}

const solve = () => {
	for (let i = 0; i < m; i++) {
		clean();
		grow();
		spread();
		pick();
		// console.log("------------------------------------------------");
		// console.log(graph);
	}
}

const { Dir } = require("fs");
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout, });
let input = [];
rl.on("line", function (line) {
	input.push(line);
}).on("close", function () {
	[n, m, k, c] = input[0].split(" ");
	input = input.slice(1);
	for (let x of input) {
		let temp = x.split(" ").map((value) => {
			return {
				num: Number(value),
				fire: false,
				spend: 0,
			}
		});
		graph.push(temp);
	}
	solve();
	console.log(answer);
	process.exit();
});
