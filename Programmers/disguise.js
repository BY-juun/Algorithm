function solution(clothes) {
	const obj = {}
	for (const cloth of clothes) {
		const [name, kind] = cloth;
		if (!obj[kind]) obj[kind] = [name];
		else obj[kind].push(name);
	}
	const keys = Object.keys(obj);
	let result = 1;
	for (const key of keys) {
		result *= (obj[key].length + 1)
	}
	return result - 1;
}