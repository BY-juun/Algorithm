function findAllVirusPos(board) {
	const virusPos = [];
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			if (board[i][j] === 2) virusPos.push([i, j]);
		}
	}
	return virusPos;
}

const comb = [];

function Combination(arr, curArr, curIdx, target) {
	//조합 찾기
	if (curArr.length === target) return comb.push(curArr);
	if (curIdx >= arr.length) return;

	Combination(arr, [...curArr, arr[curIdx]], curIdx + 1, target);
	Combination(arr, [...curArr], curIdx + 1, target);
}

function CopyBoard(board, virusCase) {
	const newBoard = [];
	for (let i = 0; i < board.length; i++) {
		const row = [];
		for (let j = 0; j < board.length; j++) {
			if (board[i][j] === 2) {
				if (virusCase.find((v) => v[0] === i && v[1] === j)) row.push(board[i][j]);
				//비활성화일때는 -1을 새로운 board에 삽입
				else row.push(-1)
			}
			else row.push(board[i][j]);
		}
		newBoard.push(row);
	}
	return newBoard;
}

function CheckSpread(board) {
	//가능한 모든 공간에 바이러스가 퍼졌는지 확인
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board.length; j++) {
			if (board[i][j] === 0) return false;
		}
	}
	return true;
}

function spreadVirus(board, virusCase) {
	const dx = [-1, 0, 0, 1];
	const dy = [0, -1, 1, 0];
	//처음부터 퍼트릴 공간이 없을 수도 있기 때문에, 맨 처음 한번 체크
	if (CheckSpread(board)) return 0;

	//BFS 방식으로 바이러스 퍼트리기, 이때, time 값을 갖는 객체를 이용해 time checking
	while (virusCase.length !== 0) {
		const Case = virusCase.shift();
		const [x, y] = Case.pos;
		const curTime = Case.time;
		for (let k = 0; k < 4; k++) {
			const Dx = x + dx[k];
			const Dy = y + dy[k];
			if (Dx >= 0 && Dy >= 0 && Dx < board.length && Dy < board.length) {
				if (board[Dx][Dy] === 0 || board[Dx][Dy] === -1) {
					board[Dx][Dy] = curTime + 1;
					virusCase.push({ pos: [Dx, Dy], time: curTime + 1 })
				}
			}
		}
		if (CheckSpread(board)) return curTime + 1;
	}
	return -1;
}

function solution(n, m, board) {
	let answer = Number.MAX_SAFE_INTEGER
	let canSpread = false;

	//모든 바이러스의 위치 구하기
	const virusPos = findAllVirusPos(board);

	//모든 바이러스의 위치로부터 조합할 수 있는 경우의 수 찾기
	Combination(virusPos, [], 0, m);

	//각 경우의 수에 대해 테스트
	comb.forEach((virusCase) => {
		//새로운 board setting -> 활성 바이러스 / 비활성 바이러스 구분
		const newBoard = CopyBoard(board, virusCase);

		//바이러스 퍼트리기
		const spreadTime = spreadVirus(newBoard, virusCase.map((v) => { return { pos: v, time: 0 } }));

		//퍼트릴 수 없는 경우에는 정답 체크 x
		if (spreadTime !== -1) {
			answer = spreadTime < answer ? spreadTime : answer
			canSpread = true;
		}
	})

	//퍼트릴 수 있는 경우가 하나도 없을 때는 -1 출력
	if (!canSpread) console.log(-1);
	else console.log(answer);
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
	input.push(line);
}).on("close", function () {
	const [n, m] = input[0].split(" ").map(Number);
	const board = [];
	input.slice(1).forEach((v) => {
		board.push(v.split(" ").map(Number));
	})
	solution(n, m, board);
});
