function solution(n, arr) {
	let graph = Array.from({ length: n }, () => Array.from({ length: n }, () => Infinity));
	for (const x of arr) {
		const [from, to, weight] = x;
		graph[from - 1][to - 1] = weight;
	}

	for (let stopOver = 0; stopOver < n; stopOver++) {
		for (let i = 0; i < n; i++) {
			for (let j = 0; j < n; j++) {
				if (i !== j) {
					if (graph[i][stopOver] !== Infinity && graph[stopOver][j] !== Infinity) {
						graph[i][j] = Math.min(graph[i][stopOver] + graph[stopOver][j], graph[i][j]);
					}
					if (graph[j][stopOver] !== Infinity && graph[stopOver][i] !== Infinity) {
						graph[j][i] = Math.min(graph[stopOver][i] + graph[j][stopOver], graph[j][i]);
					}
				}
			}
		}
	}
	console.log(graph);
}

solution(4, [[1, 2, 4], [2, 1, 3], [3, 1, 5], [1, 4, 6], [2, 3, 7], [3, 4, 4], [4, 3, 2]])
