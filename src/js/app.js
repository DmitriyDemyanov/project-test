function countPeople(people) {
	const res = people.reduce(
		(acc,current) => {
			acc.sumAge += current.age;
			acc.sumEyes += current.eyes;
			return acc;
		},
		{
			sumAge: 0,
			sumEyes: 0,
		}
	);
	// console.log(res);
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

// function checkArray(el) {
// 	return el === true;
// }

// function logicalCalc(array, op) {
// 	if (op === 'AND') {
// 		return array.every((el) => el === true);
// 	}
// 	if (op === 'OR') {
// 		return array.find((el) => el === true);
// 	}

// 	let flagTrue = 0;
// 	let flagFalse = 0;
// 	for (let i = 0; i < array.length; i++) {
// 		if (array[i] === true) {
// 			flagTrue = flagTrue + 1;
// 			console.log('flagTrue', flagTrue);
// 		}
// 		if (array[i] === false) {
// 			flagFalse = flagFalse + 1;
// 			console.log('flagFalse', flagFalse);
// 		}
// 	}
// 	return flagTrue === 1 || flagFalse === 1;
// }

// console.log(logicalCalc([true, true, true, false], 'AND')); //false;
// console.log(logicalCalc([true, true, true, false], 'OR')); // true;
// console.log(logicalCalc([true, true, true, false, true], 'XOR'));
// logicalCalc([true, true, true, false, true], 'XOR'), true;

// filter
// reduce
// function logicalCalc(array, op) {
// 	if (op === 'AND') {
// 		return Boolean(!array.filter((el) => el === false).length);
// 	}
// 	if (op === 'OR') {
// 		return Boolean(array.filter((el) => el === true).length);
// 	}
// 	if (op === 'XOR') {
// 		return (
// 			array.filter((el) => el === true).length === 1 ||
// 			array.filter((el) => el === false).length === 1
// 		);
// 	}
// }

// console.log('and--->', logicalCalc([true, true, true, false], 'AND')); //false;
// console.log('or--->', logicalCalc([true, true, true, false], 'OR')); // true;
// console.log(
// 	'XOR--->',
// 	logicalCalc([true, true, true, false, false, false], 'XOR')
// ); // true;

// function logicalCalc2(array, op) {
// 	console.log(op);
// 	const res = array.reduce(
// 		(acc, current) => {
// 			if (current) {
// 				acc.trueCount++;
// 			} else {
// 				acc.falseCount++;
// 			}
// 			return acc;
// 		},
// 		{
// 			trueCount: 0,
// 			falseCount: 0,
// 		}
// 	);

// 	return res.trueCount === 1 || res.falseCount === 1;
// }

// console.log('and--->', logicalCalc2([true, true, true, false], 'AND')); //false;
// console.log('or--->', logicalCalc2([true, true, true, false], 'OR')); // true;
// console.log('XOR2--->', logicalCalc2([true, true, true, true, false], 'XOR')); // true;

// function logicalCalc3(array, op) {
// 	if (op === 'AND') {
// 		return array.every((el) => el);
// 	}
// 	if (op === 'OR') {
// 		return array.some((el) => el);
// 	}
// 	return (
// 		array.filter((el) => el).length === 1 ||
// 		array.filter((el) => !el).length === 1
// 	);
// }
// function first(arr, n = 1) {
// 	return arr.slice(0, n)
// }

// const arr = ['a','b','c','d','e'];

// first([...arr]) //['a']);
// first([...arr],2)// ['a', 'b']);

// function array(str) {
// 	const newArr = str.split(',');
// 	if (newArr.length <= 2) {
// 		return null;
// 	}
// 	newArr.shift();
// 	newArr.pop();
// 	return newArr.join(' ');
// }

// // console.log(array('1,2')); // '2');
// // console.log(array('1,2,3,4')); // '2 3');
// console.log('++++++=====++++++',array('1,2,3,4,5')); // '2 3 4');

// function uefaEuro2016(teams, scores) {
// 	if (scores[0] > scores[1]) {
// 		return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`;
// 	}
// 	if (scores[0] < scores[1]) {
// 		return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`;
// 	}
// 	return `At match ${teams[0]} - ${teams[1]}, teams played draw.`;
// }

// console.log(uefaEuro2016(['Germany', 'Ukraine'], [2, 0]));
// // 'At match Germany - Ukraine, Germany won!');

// console.log(uefaEuro2016(['Belgium', 'Italy'], [0, 2]));
// // 'At match Belgium - Italy, Italy won!');

// console.log(uefaEuro2016(['Portugal', 'Iceland'], [1, 1]));
// // 'At match Portugal - Iceland, teams played draw.');
// function differenceInAges(ages) {
// 	const maxAge = Math.max.apply(null, ages);
// 	console.log('>>>maxAge<<<>', maxAge);
// 	const minAge = Math.min.apply(null, ages);
// 	console.log('>>>minAge<<<>', minAge);
// 	const diff = maxAge - minAge;
// 	return [minAge, maxAge, diff];
// }

// console.log(differenceInAges([82, 15, 6, 38, 35])); // [6, 82, 76]);

// console.log(
// 	'filter __> ',
// 	[82, 15, 6, 38, 35].filter((el) => el > 30)
// );

// Array.prototype.myFilter = function (func) {
// 	const newArr = [];
// 	for (let i = 0; i < this.length; i++) {
// 		if (func(this[i])) {
// 			newArr.push(this[i]);
// 		}
// 	}
// 	return newArr;
// };

// console.log(
// 	'my filter ---> ',
// 	[82, 15, 6, 38, 35].myFilter((el) => el > 30)
// );

// console.log(
// 	'my filter ---> ',
// 	[872, 44, 6, 2, 5].myFilter((el) => el > 570)
// );

// const arr = [872, 44, 6, 2, 5];
// console.log(arr);
// function printArray(array) {

// 	return array.join(',');
// }

// var data = ['h', 'o', 'l', 'a'];
// console.log(printArray(data));

// 'h,o,l,a';

// let findAverage = function (findAverage) {
// 	const res = findAverage.reduce((acc, current) => {
// 		acc += current;
// 		return acc;
// 	}, 0);
// 	return res / findAverage.length;
// };
// findAverage([1, 3, 5, 7]);

// var ArrowFunc = function (arr) {
// 	return arr.map((el) => String.fromCharCode(el)).join('');   How response array function    *How to pass an array to a function*
// };

// function setReducer(input) {
// 	if (input.length === 1) {
// 		return input[0];
// 	} else {
// 		const checkArray = [];
// 		const result = [];
// 		for (let i = 0; i < input.length; i++) {
// 			if (!checkArray.some((el) => el === input[i])) {
// 				checkArray.push(input[i]);
// 				result.push(input.filter((el) => el === input[i]).length);
// 			}
// 		}
// 		return setReducer(result);
// 	}
// }

// const input = [0, 0, 4, 6, 8, 8, 0, 8, 5, 5, 7]; //output: 2
// console.log(setReducer(input));

// function setReducerHomeVersion(input) {
// 	const newArr = [];
// 	let count = 1;
// 	for (let i = 0; i < input.length; i++) {
// 		console.log(input[i]);
// 		// ecли число не равно следующему числу из списка то добавить к newArr единицу  newArr.push(1)
// 		// если число  равно следующему числу из списка (input[i] === input[i + 1]), то вкл перебор второй(let c) и не добовлять к newArr единицу
// 		for (let c = i + 1; input[c] === input[i]; c++) {
// 			// а добавить число количеств повторений этого перебора  (count++;) и вконце обнулить счетчик
// 			console.log();
// 			console.log('>>>>>input[c]',input[c]);
// 			console.log('--------input[i]',input[i]); //разобраться как сделать перебор до кол-ва повторов чисел. Например 4ре восьмёрки 4ре повтора, а не шесть!
// 			count++;
// 			console.log('count+++',count);
// 		}
// 		if (count !== 1) {
// 			newArr.push(count);
// 			count = 1;
// 		}
// 	}
// 	console.log('newArr',newArr);
// }

// function setReducer(input) {
// 	const newArr = [];
// 	let count = 1;
// 	let num = 1;

// 	for (let i = 0; i < input.length; i++) {

// 		if (input[i] !== input[i + 1]) {
// 			newArr.push(num);
// 			console.log('#####',newArr);
// 			console.log('i________________________________________________',i);
// 		} else {

// 			for (let c = i + 1; input[i] === input[c]; c++) {
// 				console.log("IIIIII",input[i]);
// 				console.log("CCCCCCCCCCCCCC",input[c]);
// 				count = count + 1;
// 				console.log('count_________', count);
// 			}

// 			newArr.push(count);
// 			count = 1;
// 		}

// 	}
// 	console.log('After=========', newArr);
// }

// const input = [0, 4, 0, 4, 6, 8, 8, 8, 8, 0, 8, 5, 5, 7]; //output: 2
// console.log(setReducer(input));
// function largest(n,array) {
// 	let res = [];
// 	array.sort((a, b) => a - b);

// 	res = array.slice(-n);
// 	return res;
// }

// console.log(largest(0,[10,9,8,7,6,5,4,3,2,1])); // [9, 10];

// function minMinMax(array) {
// 	const min = Math.min.apply(null, array);
// 	const res = [min];
// 	const max = Math.max.apply(null, array);

// 	for (let i = min + 1; i < max; i++) {
// 		if (!array.some((el) => el === i)) {
// 			res.push(i);
// 			break;
// 		}
// 	}

// 	res.push(max);
// 	return res;
// }

// console.log(minMinMax([-23, -22, -1, 4, 5, 24])); //[-23, -22, 24])
// console.log(minMinMax([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// function cupAndBalls(b, arr) {
// 	let pos = b;

// 	for (let i = 0; i < arr.length; i++) {
// 		const man = arr[i];
// 		const index = man.indexOf(pos);

// 		if (index === 0) {
// 			pos = man[1];
// 		}
// 		if (index === 1) {
// 			pos = man[0];
// 		}
// 	}

// 	return pos;
// }

// console.log(
// 	'oooo',
// 	cupAndBalls(2, [
// 		[1, 3],
// 		[1, 2],
// 		[2, 1],
// 		[2, 3],
// 	])
// ); ////           [3]

// function isSquare(arr) {
// 	if (arr.length === 0) {
// 		return undefined;
// 	}
// 	const newArr = []
// 	for (let i = 0; i < arr.length; i++) {
// 		newArr.push(Math.sqrt(arr[i]));

// 	}

// 	for (let i = 0; i < newArr.length; i++) {

// 		if (!Number.isInteger(newArr[i])) {
// 			return false;
// 			}
// 	}
// 	return true;
// }

// console.log(isSquare([1, 4, 9, 16, 25, 36])); //, true;

// Math.sqrt(16);
//Number.isInteger()

// function isSquare(arr) {
// 	if (arr.length === 0) {
// 		return undefined;
// 	}
// 	const newArr = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		newArr.push(Math.sqrt(arr[i]));
// 		if (!Number.isInteger(newArr[i])) {
// 			return false;
// 		}
// 	}
// 	return true;
// }
// // console.log(isSquare([1, 4, 9, 16, 25, 36]));
// console.log(
// 	input([
// 		['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
// 		['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
// 		['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
// 		['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
// 		['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
// 		['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
// 	])
// );
// [[], [], [], [], ['x'], []];
// function input(arrays) {
// 	const x = [];
// 	let count = 0;
// 	for (let i = 0; i < arrays.length; i++) {
// 		x.push(
// 			arrays[i].filter((el) => {
// 				if (el === 'x') {
// 					count++;
// 				}
// 				return el === 'x';
// 			})
// 		);
// 	}

// 	if (count !== 1) {
// 		return [];
// 	}

// 	const yCoord = x.findIndex((el) => el.length);
// 	const xCoord = arrays[yCoord].indexOf('x');

// 	return [yCoord, xCoord];
// }

// function nthSmallest(arr, pos) {
// 	const sort = arr.sort((a, b) => a - b);
// 	console.log('SORT',sort);
// 	return sort[pos -1];
// }

// console.log(nthSmallest([-102, -16, -1, -2, -367,8,11, -9], 5)); //, -2)

// function minSum(arr) {
// 	const sortArr = arr.sort((a, b) => a - b);
// 	let result = 0;
// 	for (let i = 0; sortArr.length; i++) {
// 		console.log('min: sort', sortArr[0]);
// 		console.log('max: sort', sortArr[sortArr.length - 1]);
// 		result += sortArr[0] * sortArr[sortArr.length - 1];
// 		sortArr.pop();
// 		sortArr.shift();
// 	}
// 	console.log(result);
// 	return result;
// }

// function minSum2(arr) {
// 	let res = 0;
// 	const sorted = arr.sort((a, b) => a - b);
// 	for (let i = 0; i < sorted.length / 2; i++) {
// 		res += sorted[0] * sorted[sorted.length - (i + 1)];
// 	}
// 	return res;
// }

// console.log(minSum([12, 6, 10, 26, 3, 24])); //, 342));
function boredom(staff) {
	console.log('staff::::::::',staff);
	const bored = {
		accounts: 1,
		finance: 2,
		canteen: 10,
		regulation: 3,
		trading: 6,
		change: 6,
		IS: 8,
		retail: 5,
		cleaning: 4,
		'pissing about': 25,
	};
	let count = 0;
	console.log(Object.entries(staff).reduce((acc, cur) => console.log('Test::::',cur[1])))
}

console.log(boredom({
	tim: 'IS',jim: 'finance',
	randy: 'pissing about',sandy: 'cleaning',andy: 'cleaning',
	katie: 'cleaning',laura: 'pissing about',saajid: 'regulation',
	alex: 'regulation',john: 'accounts',mr: 'canteen'
}))
	// 'i can handle this')