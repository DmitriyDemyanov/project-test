function countPeople(people) {
	const res = people.reduce(
		(acc, current) => {
			acc.sumAge += current.age;
			acc.sumEyes += current.eyes;
			return acc;
		},
		{
			sumAge: 0,
			sumEyes: 0,
		}
	);
	console.log(res);
	return res;
}

countPeople([
	{
		age: 32,
		eyes: 1,
	},
	{
		age: 22,
		eyes: 2,
	},
	{
		age: 45,
		eyes: 2,
	},
	{
		age: 55,
		eyes: 14,
	},
	{
		age: 12,
		eyes: 2,
	},
	{
		age: 13,
		eyes: 1,
	},
	{
		age: 75,
		eyes: 2,
	},
	{
		age: 22,
		eyes: 3,
	},
]);

// function arrayMadness(a, b) {
// 	// const fixedB = b.slice(0, a.length);
// 	// console.log('fixedB', fixedB);
// 	let sumSquares = a.reduce((acc, current) => {
// 		acc += current ** 2;
// 		console.log('acc ** 2======', acc);
// 		return acc;
// 	}, 0);
// 	let sumCubes = b.reduce((acc, current, index) => {
// 		acc += current ** 3;
// 		console.log('acc ** 3 index', index);
// 		console.log('acc ** 3======', acc);
// 		return acc;
// 	}, 0);
// 	console.log('sumSquares', sumSquares);
// 	console.log('sumCubes', sumCubes);
// 	return sumSquares > sumCubes;
// }

// console.log(arrayMadness([1, 2, 3, 4, 5], [2, 2, 2, 2, 2, 2, 1, 1, 1]));

function checkArray(el) {
	return el === true;
}

function logicalCalc(array, op) {
	if (op === 'AND') {
		return array.every((el) => el === true);
	}
	if (op === 'OR') {
		return array.find((el) => el === true);
	}

	let flagTrue = 0;
	let flagFalse = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i] === true) {
			flagTrue = flagTrue + 1;
			console.log('flagTrue', flagTrue);
		}
		if (array[i] === false) {
			flagFalse = flagFalse + 1;
			console.log('flagFalse', flagFalse);
		}
	}
	return flagTrue === 1 || flagFalse === 1;
}

console.log(logicalCalc([true, true, true, false], 'AND')); //false;
console.log(logicalCalc([true, true, true, false], 'OR')); // true;
console.log(logicalCalc([true, true, true, false, true], 'XOR'));
// logicalCalc([true, true, true, false, true], 'XOR'), true;

// filter
// reduce
