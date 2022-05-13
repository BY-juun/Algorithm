function isMultipleSet(arr) {
	for (let x of arr) {
		if (arr.filter((value) => value === x).length > 1) return true;
	}
	return false;
}

function checkValidation(str) {
	for (let char of str) {
		if (char.charCodeAt() < "A".charCodeAt() || char.charCodeAt() > "Z".charCodeAt()) return false;
	}
	return true;
}

function parsing(str) {
	const arr = [];
	for (let i = 0; i < str.length - 1; i++) {
		const slicingString = str.slice(i, i + 2)
		if (checkValidation(slicingString)) arr.push(slicingString);
	}
	return arr;
}

function getSimilarity(arr1, arr2) {
	if (arr1.length === 0 && arr2.length === 0) return 65536;
	let same = [];
	let both = [];
	let temp1 = [...arr1];
	let temp2 = [...arr2];

	for (let x of temp1) {
		let findIdx = temp2.findIndex((value) => value === x);
		if (findIdx >= 0) {
			temp2[findIdx] = false;
			same.push(x);
		}
	}

	same = same.length;
	for (let i = 0; i < arr1.length; i++) {
		both.push(arr1[i]);
		let findIdx = arr2.findIndex((value) => value === arr1[i])
		if (findIdx >= 0) {
			arr2[findIdx] = false;
		}
		arr1[i] = false;
	}
	both = both.concat(arr2.filter((value) => value !== false));
	both = both.length;


	return Math.floor((same / both) * 65536)
}

function solution(str1, str2) {
	str1 = str1.toUpperCase();
	str2 = str2.toUpperCase();
	const parsing1 = parsing(str1);
	const parsing2 = parsing(str2);
	return getSimilarity(parsing1, parsing2);
}