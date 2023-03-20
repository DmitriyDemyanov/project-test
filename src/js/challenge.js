function missingNumber(arr) {
	let sum = 0;
	let expected = 0;

	for (let i = 0; i < arr.length + 1; i++) {
		// console.log('IIIIIIIII>>>', i);

		expected += i + 1;
		// console.log('expected', expected);
		// console.log('before', sum);
		// console.log('arr[i]',arr[i]);
		if (arr[i]) {
			sum += arr[i];
		}
	}
	console.log('SUM', sum);

	return expected - sum;
}

const testArr2 = [1, 2, 3, 4, 5, 7, 8, 9, 10]; // 55
const testArr = [
	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
	23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 34, 35, 36, 37, 38, 39, 40, 41, 42,
	43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61,
	62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
	81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99,
	100,
];

console.log('Answer: ', missingNumber(testArr));
console.log('Answer3: ', missingNumber3(testArr));

function missingNumber3(arr) {
	let res = arr.filter((el, ind) => el !== ind + 1);
	return res[0] - 1;
}

function compare(arr1, arr2) {
	for (let i = 0; i < arr1.length; i++) {
		if (isNaN(arr1[i]) !== isNaN(arr1[i])) {
			return '811';
		} else if (typeof arr1[i] === 'object' || typeof arr2[i] === 'object') {
			console.log('obj', Object.entries(arr1[i])[0][1]);
			console.log('obj', Object.entries(arr2[i])[0][1]);
			if (
				Object.entries(arr1[i])[0][0] !== Object.entries(arr2[i])[0][0] ||
				Object.entries(arr1[i])[0][1] !== Object.entries(arr2[i])[0][1]
			) {
				return false;
			}
		} else if (arr1[i] !== arr2[i]) {
			return '911';
		}
	}
	return true;
}

const arr_1 = [
	NaN,
	'man',
	{
		name: 'ME',
		hobbies: ['baseball', 'football'],
	},
	9,
	10,
];
const arr_2 = [
	NaN,
	'man',
	{
		name: 'ME',
		hobbies: ['baseball', 'football'],
	},
	9,
	10,
];
const arr_3 = [1, 2, 3, 4, 5, 6, 8, 9, 10];

// console.log('Compare: ', compare(arr_1, arr_2));
// console.log(compare2(arr_1, arr_2));

// function compare2(arr1, arr2) {

//   return arr1.every((cur) => c)
// }

function isEqual(a, b) {
	if (
		a !== null &&
		b !== null &&
		typeof a === 'object' &&
		typeof b === 'object'
	) {
		return Object.entries(a).every(([key, value]) => isEqual(value, b[key]));
		// const entries = Object.entries(a);
		// return entries.every(([key, value]) => value === b[key]);
	}
	if (typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b)) {
		return true;
	}
	return a === b;
}

function isEqual2(a, b) {
	console.log(JSON.stringify(a));
	console.log(JSON.stringify(b));
	return JSON.stringify(a) === JSON.stringify(b);
}

console.log('isEqual: ', isEqual2(arr_1, arr_2));
