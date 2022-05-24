let graph = [];
let isVisited = [];
let row;
let col;
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

function BFS(xPos, yPos, count) {
	let queue = [[xPos, yPos, count]];
	while (queue.length !== 0) {
		let [curX, curY, curCount] = queue.shift();
		if (curX === row - 1 && curY === col - 1) return curCount;
		for (let i = 0; i < 4; i++) {
			const nextX = curX + dx[i];
			const nextY = curY + dy[i];
			if (nextX >= 0 && nextX < row && nextY >= 0 && nextY < col) {
				if (!isVisited[nextX][nextY] && graph[nextX][nextY] === 1) {
					isVisited[nextX][nextY] = true;
					queue.push([nextX, nextY, curCount + 1]);
				}
			}
		}
	}
	return -1;
}

function solution(maps) {
	row = maps.length;
	for (let i = 0; i < maps.length; i++) {
		const temp = [];
		const isVisitedTemp = [];
		for (let j = 0; j < maps[i].length; j++) {
			col = maps[i].length;
			temp.push(maps[i][j]);
			isVisitedTemp.push(false);
		}
		graph.push(temp);
		isVisited.push(isVisitedTemp);
	}
	isVisited[0][0] = true;
	return BFS(0, 0, 1);
}

console.log(solution([[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 1], [0, 0, 0, 0, 1]]));