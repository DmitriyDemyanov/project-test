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
// console.log(isSquare([1, 4, 9, 16, 25, 36]));
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

// function setReducerHomeVersion(input) {
// 	const newArr = [];

// 	for (let i = 0; i < input.length; i++) {
// 		let count = 1;

// 		if (input[i] === input[i + 1]) {
// 			count++;
// 			// i = 5, c = 6, count = 2
// 			// i = 5, c = 7, count = 3
// 			// i = 5, c = 8, count = 4
// 			for (let c = i + 1; c < input.length; c++) {
// 				if (input[c] === input[c + 1]) {
// 					count++;
// 				} else {
// 					i = c;
// 					c = input.length;
// 				}
// 			}
// 		}

// 		newArr.push(count);
// 	}

// 	if (newArr.length > 1) {
// 		return setReducerHomeVersion(newArr);
// 	} else {
// 		return newArr[0];
// 	}
// }
// const input = [0, 4, 0, 4, 6, 8, 8, 8, 8, 0, 8, 5, 5, 7]; //output: 2
// console.log(setReducerHomeVersion(input));

// function setReducerHomeVersion(input) {
// 	let newArr = [];

// 	newArr = input.reduce((acc, el) => {
// 		if (el !== el [+1]) {
// 			console.log('el', el);
// 			console.log('[el + 1]', el[+1]);
// 			console.log(
// 				'____________________________________________________________'
// 			);
// 			acc.push(1);
// 		}
// 		return acc;
// 	}, []);
// 	console.log('ACC::::::', newArr);
// }

// function fizzbuzz(n) {
// 	const result = [];
// 	console.log('n', n);
// 	for (let i = 1; i <= n; ++i) {
// 		if (i % 5 === 0 && i % 3 === 0) {
// 			console.log('i % 5 && i % 3', i % 5 && i % 3);
// 			result.push('FizzBuzz');
// 		} else if (i % 5 === 0) {
// 			result.push('Buzz');
// 		} else if (i % 3 === 0) {
// 			result.push('Fizz');
// 		} else {
// 			result.push(i);
// 		}
// 	}
// 	// result.pop()
// 	return result;
// }

// console.log(fizzbuzz(10));

// function pairZeros(arr) {
// 	const result = [];
// 	let flag = true;

// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] === 0 && flag === true) {
// 			result.push(arr[i]);
// 			flag = false;
// 		} else if (arr[i] === 0 && flag === false) {
// 			flag = true;
// 		} else {
// 			result.push(arr[i]);
// 		}
// 	}

// 	return result;
// }

// console.log(pairZeros([1, 0, 1, 0, 2, 0, 0, 3, 0])); /// [1, 0, 1, 2, 0, 3, 0])

// function toNumberArray(stringarray) {
// 	const res = [];
// 	for (let i = 0; i < stringarray.length; i++) {
// 		console.log(stringarray[i]);
// 		res.push(stringarray[i] * 1);
// 	}
// 	console.log(res);
// 	return res
// }
// console.log(toNumberArray(["1.1","2.2","3.3"]))// [1.1,2.2,3.3]);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//function howManyGifts(maxBudget, gifts) {
//	const arr = gifts.sort((a,b) => a - b);
//	let res = 0;
//	for (let i = 0; i < arr.length; i++) {
//		if (res + arr[i] > maxBudget) {
//			return i
//		} else {
//			res = res + arr[i];
//		}
//	}
//
//	return arr.length
//}
//console.log(howManyGifts(20, [4, 2, 4, 6,13, 1])); //, 4);)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function flyBy(lamps, drone) {
// 	let arrayLamps = lamps.split('');
// 	let length = drone.length;
// 	if (drone.length > lamps.length) {
// 		length = lamps.length;
// 	}
// 	for (let i = 0; i < length; i++) {
// 		arrayLamps.splice(i, 1, 'o');
// 	}
// 	return arrayLamps.join('');
// }
// console.log(flyBy('x','=T')); //, 'oooxxxxxx');)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function search(budget,prices) {
// 	const newArr = prices.reduce((acc,el) => {
// 		if (el <= budget) {
// 			acc.push(el);
// 		}
// 		return acc.sort((a,b) => a - b)
// 	},[]);
// 	return newArr.join(',');
// }
// console.log(search(14, [7, 3, 23, 9, 14, 20, 7])); // "3,7,7,9,14"));
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function partlist(arr) {
// 	const result = [];
// 	for (let i = 0; i < arr.length - 1; i++) {
// 		let el1 = arr.slice(0, i + 1).join(' ');
// 		let el2 = arr.slice(i + 1).join(' ');
// 		let res = [el1, el2];
// 		result.push(res);
// 	}
// 	return result;
// }

// console.log(partlist(['I', 'wish', 'I', "hadn't", 'come'])); //  [["cdIw", "tzIy xDu rThG"], ["cdIw tzIy", "xDu rThG"], ["cdIw tzIy xDu", "rThG"]])

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function isSortedAndHow(array) {
// 	let flagDes = true;
// 	let flagInc = true;
// 	let numDes = array[0];
// 	let numInc = array[0];
// 	for (let i = 1; i < array.length; i++) {
// 		if (numDes <= array[i]) {
// 			numDes = array[i];
// 		} else if (numDes > array[i]) {
// 			flagDes = false;
// 		}
// 		if (numInc >= array[i]) {
// 			numInc = array[i];
// 		} else if (numInc < array[i]) {
// 			flagInc = false;
// 		}
// 		if (flagInc === false && flagDes === false) {
// 			return 'no';
// 		}
// 	}
// 	return flagDes ? 'yes, ascending' : 'yes, descending';
// }

// console.log(isSortedAndHow([1, 2, 3, 4, 5, 6, 7, 8, 9])); //, 'yes, descending');
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function array(array) {
// 	const newArray = [];
// 	 for (let i = 0; i < array.length; i++) {
// 		 newArray.push(`${i + 1}: ${array[i]}`);
// 	}
// 	return newArray;
//  };

// console.log(array(['a','b','c'])); //, ['1: a', '2: b', '3: c'];
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function sortByLength(input) {
// 	return input.sort((a, b) => a.length - b.length);
// }
// console.log('sortByLength:', sortByLength(['Beg', 'Life', 'I', 'To'])); //, ['I', 'To', 'Beg', 'Life'];
// // Sort array by string length
// //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function isFlush(cards) {
// 	let res = [];
// 	for (let i = 0; i < cards.length; i++) {
// 		console.log(cards[i].slice(-1));
// 		res.push(cards[i].slice(-1));
// 	}
// 	console.log('res=====', res);
// 	const result = res.filter((el) => el === res[0]).length;
// 	console.log('result::', result);

// 	return result === cards.length;
// }

// console.log(isFlush(['10D', '4D', 'QD', 'KD', '5D'])); //true );)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function formatDuration(seconds) {
// 	if (seconds === 0) {
// 		return 'now';
// 	}
// 	if (seconds === 1) {
// 		return '1 second';
// 	}

// 	let res = [];
// 	let date = '';

// 	const years = Math.floor(seconds / (60 * 60 * 24 * 365));
// 	console.log('YEARS:', years);

// 	seconds -= years * (60 * 60 * 24 * 365);

// 	const days = Math.floor(seconds / (60 * 60 * 24));
// 	console.log('DAYS:', days);

// 	seconds -= days * (60 * 60 * 24);

// 	const hour = Math.floor(seconds / (60 * 60));
// 	console.log('hour:', hour);

// 	seconds -= hour * (60 * 60);

// 	const min = Math.floor(seconds / 60);
// 	console.log('min:', Math.round(min));

// 	seconds -= min * 60;

// 	const sec = Math.floor(seconds % 60);
// 	console.log('sec:', Math.round(sec));

// 	if (years) {
// 		res.push(`${years} ${convert(years, 'year')}`);
// 	}
// 	if (days) {
// 		res.push(`${days} ${convert(days, 'day')}`);
// 	}
// 	if (hour) {
// 		res.push(`${hour} ${convert(hour, 'hour')}`);
// 	}
// 	if (min) {
// 		res.push(`${min} ${convert(min, 'minute')}`);
// 	}

// 	if (sec) {
// 		res.push(`${sec} ${convert(sec, 'second')}`);
// 	}

// 	let ind = res.join(', ').lastIndexOf(',');
// 	date = res.join(', ');
// 	let startStr = date.slice(0, ind);
// 	let finishStr = date.slice(ind + 1);
// 	console.log('DATE:', date);
// 	console.log('startStr:', startStr);
// 	console.log('finishStr:', finishStr);

// 	return `${startStr} and${finishStr}`;
// }

// function convert(time, str) {
// 	if (time !== 1) {
// 		return `${str}s`;
// 	}
// 	return str;
// }
// или поставить 	let finishStr = date.slice(ind + 2); если без and,
//или return `${startStr} and${finishStr}`; если с and в любом случае!
//return (date = res.join(', '));
// console.log(formatDuration(120)); // "1 hour, 1 minute and 2 seconds");)
//Human readable duration format
//----------------------------------------------------------------------------------------------

// function last(x) {
// 	return x.split(' ').sort((a, b) => {
// 		if (a[a.length - 1] > b[b.length - 1]) {
// 			return 1;
// 		}
// 		if (a[a.length - 1] < b[b.length - 1]) {
// 			return -1;
// 		}
// 		return 0;
// 	});
// }

// console.log('>>>>>>>>>>>', last('take me to semynak')); // ['take', 'me', 'semynak', 'tot']);)
//----------------------------------------------------------------------------------------------------

// function sumOfMinimums(arr) {
// 	return arr.reduce(
// 		(acc, current) => (acc += Math.min.apply(null, current)),
// 		0
// 	);
// }

// console.log(
// 	sumOfMinimums([
// 		[7, 9, 8, 6, 2],
// 		[6, 3, 5, 4, 3],
// 		[5, 8, 7, 4, 5],
// 	])
// ); // 9));)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Object.defineProperty(Array.prototype, 'numberOfOccurrences', {
// 	value: function numberOfOccurrences(element) {
// 		return this.filter((el) => el === element).length;
// 	},
// });

// const myArr = [5,8,7,4,5];
// console.log('<>',[7,9,8,6,2,7].numberOfOccurrences(7));
// [6,3,5,4,3].numberOfOccurrences(6);
// myArr.numberOfOccurrences(5);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function convertHashToArray(hash) {
// 	return Object.entries(hash).sort((a,b) => {
// 		if (a[0] > b[0]) {
// 			return 1;
// 		}
// 		if (a[0] < b[0]) {
// 			return -1;
// 		}
// 		return 0
// 	});

// }

// console.log(
// 	convertHashToArray({name: 'Jeremy', age: 24, role: 'Software Engineer'})
// ); //[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]))
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ entries

// function rowSumOddNumbers(n) {
// 	let index = n * (n - 1) - 1;
// 	let res = index + 1;
// 	for (let i = 0; i < n; i++) {
// 		res += index + 2;
// 	}
// 	return res
// };

// console.log(rowSumOddNumbers(42));// 74088));
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function array(array) {

// 	 const res = array.reduce((acc,current) => {
// 		 if (Array.isArray(current)) {
// 			 console.log('Current:',current)
// 			 console.log('ACC:',acc);
// 			current.map((el) => acc.push(el));
// 			console.log(acc);
// 			return acc;
// 		} else {
// 			 acc.push(current);
// 			 return acc;
// 		}
// 	}

// 		,[])
// 	return res
// }

// console.log(array([7,[1,2,3],["a","b","c"],[1,2,3]])); // [1, 2, 3, "a", "b", "c", 1, 2, 3]);)
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function hasSurvived(attackers, defenders) {
// 	let pointAttack = 0;
// 	let pointDefend = 0;

// 	let totalAttack = 0;
// 	let totalDef = 0;

// 	let length =
// 		attackers.length > defenders.length ? attackers.length : defenders.length;

// 	for (let i = 0; i < length; i++) {
// 		if (attackers[i] !== undefined) {
// 			totalAttack += attackers[i];
// 			if (attackers[i] > defenders[i]) {
// 				pointAttack++;
// 			}
// 		}

// 		if (defenders[i] !== undefined) {
// 			totalDef += defenders[i];
// 			if (defenders[i] > attackers[i]) {
// 				pointDefend++;
// 			}
// 		}
// 	}

// 	if (pointAttack === pointDefend && totalAttack === totalDef) {
// 		return true;
// 	}

// 	return pointAttack === pointDefend
// 		? totalAttack < totalDef
// 		: pointAttack < pointDefend;
// }

// console.log(
// 	hasSurvived(
// 		[64, 34, 43, 83, 53, 21, 95, 49, 45, 56],
// 		[19, 94, 41, 41, 100, 84, 66, 34, 78, 63]
// 	)
// ); // true);)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function sortByLength (array) {
// 	return array.sort((a,b) => {
// 		if (a.length > b.length) {
// 		 return 1
// 		}
// 		if (a.length < b.length) {
// 			return -1;
// 		}
// 		return 0
//  })
// };
// console.log(sortByLength(["","Moderately","Brains","Pizza"]));//["", "Pizza", "Brains", "Moderately"])
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function stantonMeasure(input) {
// 	const ind = input.filter((el) => el === 1);
// 	console.log('INDEX:',ind)
// 	return input.filter((el) => el === ind.length).length
// }

// console.log(stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2])); //3))

// function smallEnough(a,limit) {
// 	return a.every((el) => el <= limit);
//  }

// console.log(smallEnough([101,45,75,105,99,107],107));// true);)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function adjacentElementsProduct(array) {
// 	const res = [];
// 	for (let i = 0; i < array.length - 1; i++) {
// 		res.push(array[i] * array[i + 1]);
// 	}
// 	console.log('RESULT:',res)
// 	return Math.max.apply(null, res);
// }

// console.log(adjacentElementsProduct([4,12,3,1,5, 50]));//, 48)//;)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function pendulum(values) {
// 	const res = [];
// 	const sortArr = values.sort((a,b) => a - b);
// 	console.log('SORT:',sortArr);
// 	for (let i = 0; i < sortArr.length; i++) {
// 		if (i % 2 === 0) {
// 			console.log('TTTTTTT2',i)
// 			res.unshift(sortArr[i]);
// 		} else {
// 			console.log('IND1',i);
// 			res.push(sortArr[i]);
// 		}
// 	}
// 	console.log('RESULT:',res)
// 	return res
// }
// //The Poet And The Pendulum
// console.log(pendulum([33,38,38,36,43,48,32,40,47,50,33]));//,[50, 47, 40, 38, 33, 32, 33, 36, 38, 43, 48]));
// //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++???????????????????????????????????????????????????????????

// function oddOrEven(array) {
// 	let res = 0;
// 	array.forEach((el) => (res += el));
// 	console.log(res);
// 	if (res % 2 === 0) {
// 		return 'even'
// 	}
// 	return 'odd';
// }

// console.log(oddOrEven([-1023, 1, -2])); //, 'even'))
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function tidyNumber(n) {
// 	const res = n.toString().split('');
// 	for (let i = 0; i < res.length; i++) {
// 		if (res[i] > res[i + 1]) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

// console.log(tidyNumber(2789));//,true))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function moveTen(s) {
// 	let res = [];
// 	let arrayS = s.split('');
// 	console.log(arrayS)
// 	let arrayNumber = arrayS.reduce((acc,current) => {
// 		//
// 		if (current.charCodeAt() + 10 > 122) {
// 		  acc.push(current.charCodeAt() + 10 - 122 + 96)
// 		} else {
// 			acc.push(current.charCodeAt() + 10);
// 		}
// 		return acc
// 	},[])
// 	res = arrayNumber.reduce((acc,current) => {
// 		console.log('####',current+'')
// 		acc.push(String.fromCharCode(current + ''));
// 		return acc;
// 	},[])
// 	return res.join('');
//  }

// console.log(moveTen('testcase'));//, 'docdmkco');
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function fireFight(s) {
// 	return s
// 		.split(' ')
// 		.map((el) => {
// 			if (el === 'Fire') {
// 				return '~~';
// 			}
// 			return el;
// 		})
// 		.join(' ');
// }

// console.log(
// 	fireFight(
// 		'Fire Deck Engine Sail Deck Fire Fire Fire Rudder Fire Boat Fire Fire Captain'
// 	)
// ); //,'~~ Deck Engine Sail Deck ~~ ~~ ~~ Rudder ~~ Boat ~~ ~~ Captain'));

// function consecutive(arr) {
// 	let count = 0;
// 	const res = arr.sort((a,b) => a - b);
// 	for (let i = 0; i < res.length - 1; i++) {
// 		if (res[i + 1] - res[i] !== 1) {
// 			count += res[i + 1] - res[i] -1;
// 		}
// 	}
// 	return count;
// }

// console.log(consecutive([4,8,6,10]));//,2);)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function arithmeticSequenceElements(a, d, n) {
// 	let res = [a];
// 	for (let i = 0; i < n - 1; i++) {
// 		res.push((a += d));
// 	}
// 	return res.join(', ');
// }
// console.log(arithmeticSequenceElements(1,-3,10)); // "1, -2, -5, -8, -11, -14, -17, -20, -23, -26"))

// function bitMarch(n) {
// 	let res = [0, 0, 0, 0, 0, 0, 0, 0];
// 	const result = [];

// 	res.fill(1, res.length - n);

// 	console.log('=====<<<<<<<<', result);

// 	for (let i = 0; i < res.length - n; i++) {

// 		if (res[0] === 0) {
// 			let arr = [...res];
// 			res.shift();
// 			res.push(0);
// 			console.log('<><><><>', res);
// 			result.push(arr);
// 			console.log('=====>>', result);
// 		}
// 	}
// 	result.push(res);
// 	return result;
// }

// console.log('!!!!!!!!!!!!!!!!!!!!!!!!!', bitMarch(3));

// const r = [
// 	[0, 0, 0, 0, 0, 1, 1, 1],
// 	[0, 0, 0, 0, 1, 1, 1, 0],
// 	[0, 0, 0, 1, 1, 1, 0, 0],
// 	[0, 0, 1, 1, 1, 0, 0, 0],
// 	[0, 1, 1, 1, 0, 0, 0, 0],
// 	[1, 1, 1, 0, 0, 0, 0, 0],
// ];
// new Array(8).fill(0)
//Odd March Bits 8 bits

// function min(arr, toReturn) {
// 	const val = [...arr].sort((a, b) => a - b);
// 	const num = val[0];
// 	console.log('num:', num);
// 	if (toReturn === 'value') {
// 		return val[0];
// 	}
// 	return arr.findIndex((el) => el === num);
// }

// console.log(min([2, 3, 4, 1, 5], 'index')); //, 0))

// function gordon(a) {
// 	const vowels = ['e', 'i', 'o', 'u'];
// 	let arr = a.split('');
// 	let result = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] === 'a' || arr[i] === 'A') {
// 			result.push('@');
// 		}
// 		else if (arr[i] === ' ') {
// 			result.push('!!!! ');
// 		}
// 		else if (vowels.find((el) => el === arr[i])) {
// 			result.push('*');
// 		} else  {
// 			result.push(arr[i]);
// 		}
// 	}
// 	return `${result.join('').toUpperCase()}!!!!`;
// }

// console.log(gordon('What feck damn cake')); // 'WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!');)
//____________________________________________________________________________________________________________
// function maxProduct(numbers, size) {
// 	const sortArr = numbers.sort((a, b) => b - a);
// 	let res = 1;
// 	for (let i = 0; i < size; i++) {
// 		res = res * sortArr[i];
// 	}
// 	return res;
// }

// console.log(maxProduct([13, 12, -27, -302, 25, 37, 133, 155, -14], 5)); //, 247895375))
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function duckShoot(ammo,aim,ducks) {
// 	let luckyShoot = Math.floor(ammo * aim);
// 	let res = ducks.split('');
// 	let array = [];
// 	for (let i = 0; i < res.length; i++) {
// 		if (res[i] === '2' && luckyShoot !== 0) {
// 			array.push('x');
// 			luckyShoot--
// 		}
// 		else {
// 			array.push(res[i]);
// 		}
// 	}
// 	return array.join('');
// }

// console.log(duckShoot(6,0.41,'|~~~~~22~2~~~~~|'));// '|~~~~~XX~2~~~~~|'))
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function maxTriSum(numbers) {
// 	const [a, b, c] = [...new Set(numbers.sort((a, b) => b - a))];
// 	return a + b + c;
// }

// console.log(maxTriSum([3, 2, 6, 8, 2, 3])); //17))
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function flattenAndSort(array) {
// 	const result = array.reduce((acc,current) => {
// 		current.forEach(element => acc.push(element));
// 		return acc
// 	},[]);
// 	return result.sort((a,b) => a - b);
// }

// console.log(flattenAndSort([[3,2,1],[7,9,8],[6,4,5]]));// [1, 2, 3, 4, 5, 6, 7, 8, 9]))
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function removeRotten(bagOfFruits) {
// 	if (!Array.isArray(bagOfFruits)) {
// 		return [];
// 	}
// 	let res = [];
// 	for (let i = 0; i < bagOfFruits.length; i++) {
// 		res.push(bagOfFruits[i].replace('rotten', '').toLowerCase());
// 	}
// 	return res;
// }

// console.log(
// 	removeRotten([
// 		'apple',
// 		'banana',
// 		'kiwi',
// 		'rottenBanana',
// 		'melone',
// 		'rottenOrange',
// 	])
// );

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//_________________________________________________________________________________________________________________________

// function spacify(str) {
// 	return str.replace(/(\d)/gi, '$1 ').trim();
// }
// return str.replace(/([a-z])/g, '$1 ');
// const spacify2 = ($) => $.replace(/./g, (e) => e + ' ').trim();

// console.log(spacify('hello world')); //'h e l l o   w o r l d');)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function divCon(x) {
// 	let num = 0;
// 	let str = 0;
// 	for (let i = 0; i < x.length; i++) {
// 		if (typeof x[i] === 'string') {
// 			str += +x[i];
// 		} else {
// 			num += x[i];
// 		}
// 	}
// 	return num - str
// }

// console.log(divCon(['3',6,6,0,'5',8,5,'6',2,'0'])); // 13);)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function assert(name, arr) {
// 	const result = [];
// 	if (name === 'head') {
// 		return arr[0];
// 	}
// 	if (name === 'last') {
// 		return arr[arr.length - 1];
// 	}

// 	if (name === 'tail') {
// 		const [a, ...rest] = arr;
// 		return rest;
// 	}
// 	if (name === 'init') {
// 		return arr.slice(0, arr.length - 1);
// 	}
// 	return result;
// }

// console.log(assert('last', [7, 2])); //, 2);))
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function getNewNotes(salary, bills) {
// 	const allBills = bills.reduce((acc,current) => acc += current,0);
// 	if (salary <= allBills) {
// 		return 0;
// 	}
// 		return Math.floor((salary - allBills) / 5);
// }

// console.log(getNewNotes(2300, [590, 1500, 45, 655, 150]));//, 1139)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function factory(x) {
// 	let counter = 0;

// 	function multiple(myArray) {
// 		return myArray.reduce((acc, current) => {
// 			acc.push(current * x);
// 			counter++;
// 			return acc;
// 		}, []);
// 	};

// 	return multiple;
// }

// const myArray = [1, 2, 3];

// const threes = factory(3);
// const fives = factory(5);

// console.log(threes(myArray));
// console.log(fives(myArray));
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function calc(x) {
// 	let res = '';
// 	for (let i = 0; i < x.length; i++) {
// 		res += x[i].charCodeAt();
// 	}
// 	let num = res
// 		.replaceAll('7', '1')
// 		.split('')
// 		.reduce((acc, current) => (acc += +current), 0);
// 	const num1 = res.split('').reduce((acc, current) => (acc += +current), 0);
// 	return num1 - num;
// }

// console.log(calc('ABC')); //, //6);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function isNice(arr) {
// 	return arr.reduce((acc,current) => {
// 		if (acc === false) {
// 			return acc;
// 		}
// 		if (
// 			arr.some((el) => el === current + 1 || el === current - 1)
// 		) {
// 			return true;
// 		}
// 		return false;
// 	}, true);
// }

// console.log(isNice([7, 11, 6, 3, 4, 9, 10])); //false))
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//_____________________________________________________________________________________________________________________________________
// function gimme(triplet) {
// 	const res = [...triplet].sort((a,b) => a - b);
// 	return triplet.findIndex((el) => el === res[1]);
// }

// console.log(gimme([3,2,1])); //1
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function outed(meet, boss) {
// 	const res = Object.entries(meet);
// 	const value = res.reduce((acc, user) => {
// 		if (user[0] === boss) {
// 			acc += user[1] * 2;
// 		} else {
// 			acc += user[1];
// 		}
// 		return acc;
// 	}, 0);
// 	return value / res.length <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
// }
// //The Office I - Outed
// console.log(
// 	outed(
// 		{"tim":8,"jim":6,"randy":5,"sandy":4,"andy":4,"katie":0,"laura":7,"saajid":1,"alex":6,"john":7,"mr":0},
// 		'john'
// 	)
// ); //'Get Out Now!');

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const solution = (mtrx) => {

// 	let arrow = 0;
// 	let target = 0;
// 	for (let i = 0; i < mtrx.length; i++) {
// 		if (mtrx[i].filter((el) => el === '>' || el === 'x').length === 2) {
// 			arrow = mtrx[i].indexOf('>');
// 			target = mtrx[i].indexOf('x');
// 			return arrow < target
// 		}
// 	}
// 	return false;
// };

// console.log(solution([
// 	[' ',' ',' ',' ',' '],
// 	[' ',' ',' ',' ',' '],
// 	[' ',' ',' ',' ',' '],
// 	[' ',' ','>',' ','x'],
// 	[' ',' ','',' ',' ']
// ]));//, true);)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//_______________________________________________________________________________________________________________

// function alternate(n, firstValue, secondValue) {
// 	const res = [];
// 	if (n === 0) {
// 		return [];
// 	}
// 	for (let i = 0; i < n; i++) {
// 		if (res.length % 2 !== 0) {
// 			res.push(secondValue);
// 		} else {
// 			res.push(firstValue);
// 		}
// 	}
// 	return res;
// }

// console.log(alternate(5,true,false)); // [true, false, true, false, true])
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++;

// const list1 = [
// 	{
// 		firstName: 'Noah',
// 		lastName: 'M.',
// 		country: 'Switzerland',
// 		continent: 'Europe',
// 		age: 19,
// 		language: 'C',
// 	},
// 	{
// 		firstName: 'Anna',
// 		lastName: 'R.',
// 		country: 'Liechtenstein',
// 		continent: 'Europe',
// 		age: 52,
// 		language: 'JavaScript',
// 	},
// 	{
// 		firstName: 'Ramon',
// 		lastName: 'R.',
// 		country: 'Paraguay',
// 		continent: 'Americas',
// 		age: 29,
// 		language: 'Ruby',
// 	},
// 	{
// 		firstName: 'George',
// 		lastName: 'B.',
// 		country: 'England',
// 		continent: 'Europe',
// 		age: 81,
// 		language: 'C',
// 	},
// ];

//  const answer = {C: 2, JavaScript: 1, Ruby: 1};

// function countLanguages(list) {
// 	return list1.reduce((acc, {language}) => {
// 		console.log('U', language);
// 		if (!acc[language]) {
// 			acc[language] = 0;
// 		}
// 		acc[language] += 1;
// 		return acc;
// 	}, {});
// }
// console.log(countLanguages(list1));
//Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages
//-----------------------------------------------------------------------------------------------------

// function evenNumbers(array,number) {

// 	return array.reduceRight((acc,cur) => {
// 		if (acc.length !== number && cur % 2 === 0) {
// 			acc.unshift(cur);
// 		}
// 		return acc
// 	},[]);

// }
// console.log(evenNumbers([1,2,3,4,5,6,7,8,9,12],3));// [4, 6, 8]);)
// function evenNumbers(array, number) {
// 	const res = [];
// 	for (let i = array.length; i >= 0; i--) {
// 		if (array[i] % 2 === 0) {
// 			res.unshift(array[i]);
// 		}
// 		if (res.length === number) {
// 			return res
// 		}
// 	}

// }
// //Even numbers in an array
//console.log(evenNumbers([1,2,3,4,5,6,7,8,9,12],3));// [4, 6, 8]);)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const bingo = [2,7,9,14,15]

// function bingo(a) {
// 	const un = Array.from(new Set(a));
// 	if (un.filter((el) => el === 2 || el === 7 || el === 9 || el === 14 || el === 15).length === 5) {
// 		return 'WIN'
// 	}
// 	return 'LOSE'
// }

// console.log(bingo([21,13,2,7,5,14,7,15,9,9,10]));//, "WIN"));
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function duplicates(array) {
// 	return array.reduce((acc,current) => {

// 		if (array.filter((el) => el === current)) {

// 		}
// 		return acc
// 	},0)
// }

// function duplicates(array) {

// }

// console.log(duplicates([0, 0, 0, 0, 0, 0, 0])); //,4 ))
//Find all pairs (retired)
//---------------------------------------------------------------
//________________________________________________________________

// const list1 = [
// 	{
// 		firstName: 'Sofia',
// 		lastName: 'I.',
// 		country: 'Argentina',
// 		continent: 'Americas',
// 		age: 35,
// 		language: 'Java',
// 	},
// 	{
// 		firstName: 'Lukas',
// 		lastName: 'X.',
// 		country: 'Croatia',
// 		continent: 'Europe',
// 		age: 35,
// 		language: 'Python',
// 	},
// 	{
// 		firstName: 'Madison',
// 		lastName: 'U.',
// 		country: 'United States',
// 		continent: 'Americas',
// 		age: 32,
// 		language: 'Ruby',
// 	},
// ];

// function greetDevelopers(list) {
// 	const res = list1.reduce((acc, current) => {
// 		current.greeting = `Hi ${current.firstName}, what do you like the most about ${current.language}`;
// 		acc.push(current);
// 		return acc;
// 	}, []);
// 	return res;
// }

// console.log(greetDevelopers(list1));

//{ firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
//     greeting: 'Hi Sofia, what do you like the most about Java?'
//   },
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function meeting(x) {
// 	const idx = x.findIndex((el) => el === 'O');
// 	return idx === -1 ? 'None available!' : idx;
//  }

// console.log(meeting(['X','O','X','X','X','X']));//, 0))
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function dropCap(n) {
// 	let res = n.split(' ');
// 	const arr = res.map(el => {
// 		if (el.length > 2) {
// 			return el[0].toUpperCase() + el.substring(1).toLowerCase();
// 		}
// 		else {
// 			return el
// 		}
// 	});
// 	return arr.join(' ');
// }

// console.log(dropCap('T axdaYFDZXGRy EMLQPJGHZq TxBF rO')); //,"Random Caps Craziness"))
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function insertDash(num) {
/*
	let str = '';
	let res = num.toString().split('');
	for (let i = 0; i < res.length; i++) {
		if (res[i] % 2 !== 0 && res[i + 1] && res[i + 1] % 2 !== 0) {
			str += `${res[i]}-`;
		} else {
			str += res[i];
		}
	}
	return str;
	*/
// 	let prev = null;
// 	return num
// 		.toString()
// 		.split('')
// 		.reduce((acc, curr) => {
// 			if (prev && prev % 2 && curr % 2) {
// 				acc += '-';
// 			}
// 			acc += curr;
// 			prev = curr;
// 			return acc;
// 		}, '');
// }

// console.log(insertDash(1454793)); //,'4547-9-3'))

// var capitals = function (word) {
// 		const arr = []
// 		let res = word.split('');
// 		for (let i = 0; i < res.length; i++){
// 			if (res[i].charCodeAt() > 64 && res[i].charCodeAt() < 91) {
// 				arr.push(i);
// 			}
// 		}
// 	return arr;
// 	};
// var capitals = function (word) {
// 	return word.split('').reduce((acc,current,ind) => {
// 		if (current.charCodeAt() > 64 && current.charCodeAt() < 91) {
// 			acc.push(ind);
// 		}
// 		return acc
// 	},[])
// };
// console.log(capitals('MAzQtLZohe'));//, [0,3,4,6] );)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//___________________________________________________________________________________________________

// 	function maxDiff(list) {
// 		if (list.length < 2) {
// 			return 0;
// 		}
// 		const res = list.sort((a,b) => b - a);
// 		return res[0] - res[res.length - 1];
// };

// console.log(maxDiff([]));
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  let input = [
// 		'Dasher Tonoyan',
// 		'Dancer Moore',
// 		'Prancer Chua',
// 		'Vixen Hall',
// 		'Comet Karavani',
// 		'Cupid Foroutan',
// 		'Donder Jonker',
// 		'Blitzen Claus',
// ];

// function sortReindeer(reindeerNames) {
// 	return reindeerNames.sort((a,b) => {
// 		const [firstDeerName, firstDeerLastName] = a.split(" ");
// 		const [secondDeerName,secondDeerLastName] = b.split(" ");
// 		if (firstDeerLastName > secondDeerLastName) {
// 			return 1;
// 		}
// 		if (firstDeerLastName < secondDeerLastName) {
// 			return -1;
// 		} else {
// 			return 0;
// 		}
// 	})
// }

// console.log(sortReindeer(input));

// let output = [
// 	'Prancer Chua',
// 	'Blitzen Claus',
// 	'Cupid Foroutan',
// 	'Vixen Hall',
// 	'Donder Jonker',
// 	'Comet Karavani',
// 	'Dancer Moore',
// 	'Dasher Tonoyan',
// ];
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function nthChar(words){
// 	return words.reduce((acc,current,index) => {
// 		acc += current[index];
// 		return acc
//  },'')
// }
// console.log(nthChar(['yoda','best','has'])); // 'yes'))
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function arrayLeaders(numbers) {
// 	const res = [];
// 	for (let i = 0; i < numbers.length; i++) {
// 		let sum = 0;
// 		for (let c = i + 1; c < numbers.length; c++) {
// 			sum += numbers[c];
// 		}
// 		if (numbers[i] > sum) {
// 			res.push(numbers[i]);
// 		}
// 	}
// 	return res;
// }

// console.log(arrayLeaders([16, 17, 4, 3, 5, 2])); // [17,5,2]))
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//_____________________________________________________________________________________________

// function save(sizes,hd) {
// 	let sum = 0;
// 	let res = [];
// 	for (let i = 0; i < sizes.length; ++i) {
// 		sum += sizes[i];
// 		if (sum <= hd) {
// 			res.push(sizes[i]);
// 		}
// 	}
// 	return res.length;
// }
// //Computer problem series #1: Fill the Hard Disk Drive
// console.log(save([4,4,4,3,3],11)); // 2)))
// //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// var list1 = [
// 	{
// 		firstName: 'Noah',
// 		lastName: 'M.',
// 		country: 'Switzerland',
// 		continent: 'Europe',
// 		age: 19,
// 		language: 'JavaScript',
// 	},
// 	{
// 		firstName: 'Maia',
// 		lastName: 'S.',
// 		country: 'Tahiti',
// 		continent: 'Oceania',
// 		age: 28,
// 		language: 'JavaScript',
// 	},
// 	{
// 		firstName: 'Shufen',
// 		lastName: 'L.',
// 		country: 'Taiwan',
// 		continent: 'Asia',
// 		age: 35,
// 		language: 'HTML',
// 	},
// 	{
// 		firstName: 'Sumayah',
// 		lastName: 'M.',
// 		country: 'Tajikistan',
// 		continent: 'Asia',
// 		age: 30,
// 		language: 'CSS',
// 	},
// ];

// function countDevelopers(list) {
// 	return list.reduce((acc, {continent, language}) => {
// 		console.log('continent',continent);
// 		console.log('language',language);
// 		if (continent === 'Europe' && language === 'JavaScript') {
// 			acc ++
// 		}
// 			return acc;
// 	}, 0);
// }

// console.log(countDevelopers(list1));
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let a = [13, 64, 15, 17, 88];
// let b = [23, 14, 53, 17, 80];

// function getLargerNumbers(a, b) {
// 	const res = [];
// 	for (let i = 0; i < a.length; i++) {
// 		if (a[i] >= b[i]) {
// 			res.push(a[i])
// 		} else {
// 			res.push(b[i]);
// 		}
// 	}
// 	return res
// }

// console.log(getLargerNumbers(a, b));
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function consecutiveOnes(nums) {
//    	const res = [];
// 		let count = 1;
// 		for (let i = 0; i < nums.length; i++) {
// 			if (nums[i] === nums[i + 1] && nums[i] !== 0) {
// 				count++;
// 			} else if (nums[i] !== nums[i + 1] && count !== 1) {
// 				res.push(count);
// 				count = 1;
// 			}
// 		}
// 	res.sort((a,b) => b - a);
// 	if (res.length === 0 && nums.filter(el => el === 0).length !== 0) {
// 		return 1
// 	}
// 		return res[0];
// };
// //ONE ONe One one
// console.log(consecutiveOnes([0,0,0,0,1]));//, 1); //, 3))
//--------------------------------------------------------------------------------------------------------------------

// function scoreTest(str,right,omit,wrong) {
// 	let good = 0;
// 	let noGood = 0;
// 	let bad = 0;
// 	for (let i = 0; i < str.length; i++) {
// 		if (str[i] === 0) {
// 			good++
// 		}
// 		if (str[i] === 1) {
// 			noGood++;
// 		} if (str[i] === 2) {
// 			bad++;
// 		}
// 	}
// 	return good * right + (noGood * omit) -( bad * wrong);
// }

// console.log(scoreTest([0, 0, 0, 0, 2, 1, 0], 2, 0, 1)); //9)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// var list1 = [
// 	{
// 		firstName: 'Noah',
// 		lastName: 'M.',
// 		country: 'Switzerland',
// 		continent: 'Europe',
// 		age: 19,
// 		language: 'C',
// 		meal: 'vegetarian',
// 	},
// 	{
// 		firstName: 'Anna',
// 		lastName: 'R.',
// 		country: 'Liechtenstein',
// 		continent: 'Europe',
// 		age: 52,
// 		language: 'JavaScript',
// 		meal: 'standard',
// 	},
// 	{
// 		firstName: 'Ramona',
// 		lastName: 'R.',
// 		country: 'Paraguay',
// 		continent: 'Americas',
// 		age: 29,
// 		language: 'Ruby',
// 		meal: 'vegan',
// 	},
// 	{
// 		firstName: 'George',
// 		lastName: 'B.',
// 		country: 'England',
// 		continent: 'Europe',
// 		age: 81,
// 		language: 'C',
// 		meal: 'vegetarian',
// 	},
// ];

// function orderFood(list) {
// 	return list.reduce((acc,{ meal }) => {
// 		console.log('meal',meal);
// 		console.log('acc[meal]',acc[meal]);
// 		if (!acc[meal]) {
// 			acc[meal] = 1;
// 		}
// 		else {
// 			acc[meal] += 1
// 		}
// 		return acc
// 	} ,{})
// }

// console.log(orderFood(list1));
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function matrix(array) {
// 	const result = [];
// 	for (let i = 0; i < array.length; i++) {
// 		let res = [];
// 		console.log('array[i][i]', array[i][i]);

// 		array[i].forEach((el, ind) => {
// 			console.log('length',ind);
// 			if (ind === i && el < 0) {
// 				res.push(0)
// 			}
// 			 else if (ind === i && el >= 0) {
// 				res.push(1);
// 			} else {
// 				res.push(el);
// 			}
// 		})
// 		result.push(res)
// 	}
// 	return result
// }

// console.log(
// 	matrix([
// 		[1,1,-5,5],
// 		[2,-4,11,2],
// 		[3,1,-1,4],
// 		[2,-6,8,10],
// 	]));
// // 	[
// // 		[1, 1, -5, 5],
// // 		[2, 0, 11, 2],
// // 		[3, 1, 0, 4],
// // 		[2, -6, 8, 1],
// // 	]
// // );
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//______________________________________________________________________________________________________________

// function divisibleByThree(str) {
// 	let res = 0;
// 	str.split('').forEach((el) => (res += +el)) % 3 === 0;
// 	return res % 3 === 0;
// }

// console.log(divisibleByThree('19254')); //, true);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// var list1 = [
// 	{
// 		firstName: 'Harry',
// 		lastName: 'K.',
// 		country: 'Brazil',
// 		continent: 'Americas',
// 		age: 22,
// 		language: 'JavaScript',
// 		githubAdmin: 'yes',
// 	},
// 	{
// 		firstName: 'Kseniya',
// 		lastName: 'T.',
// 		country: 'Belarus',
// 		continent: 'Europe',
// 		age: 49,
// 		language: 'Ruby',
// 		githubAdmin: 'no',
// 	},
// 	{
// 		firstName: 'Jing',
// 		lastName: 'X.',
// 		country: 'China',
// 		continent: 'Asia',
// 		age: 34,
// 		language: 'JavaScript',
// 		githubAdmin: 'yes',
// 	},
// 	{
// 		firstName: 'Piotr',
// 		lastName: 'B.',
// 		country: 'Poland',
// 		continent: 'Europe',
// 		age: 128,
// 		language: 'JavaScript',
// 		githubAdmin: 'no',
// 	},
// ];
// function findAdmin(list, lang) {
// 	return list.reduce((acc,current) => {
// 		if (current.githubAdmin === 'yes' && current.language === lang) {
// 			acc.push(current);
// 		}
// 		return acc
// 	},[])
// }

// console.log(findAdmin(list1, 'JavaScript'));
// var list2 = [
// 	{
// 		firstName: 'Mariami',
// 		lastName: 'G.',
// 		country: 'Georgia',
// 		continent: 'Europe',
// 		age: 29,
// 		language: 'Python',
// 	},
// 	{
// 		firstName: 'Mia',
// 		lastName: 'H.',
// 		country: 'Germany',
// 		continent: 'Europe',
// 		age: 39,
// 		language: 'Ruby',
// 	},
// 	{
// 		firstName: 'Maria',
// 		lastName: 'I.',
// 		country: 'Greece',
// 		continent: 'Europe',
// 		age: 32,
// 		language: 'C',
// 	},
// ];
// var list1 = [
// 	{
// 		firstName: 'Daniel',
// 		lastName: 'J.',
// 		country: 'Aruba',
// 		continent: 'Americas',
// 		age: 42,
// 		language: 'JavaScript',
// 	},
// 	{
// 		firstName: 'Kseniya',
// 		lastName: 'T.',
// 		country: 'Belarus',
// 		continent: 'Europe',
// 		age: 22,
// 		language: 'JavaScript',
// 	},
// 	{
// 		firstName: 'Hanna',
// 		lastName: 'L.',
// 		country: 'Hungary',
// 		continent: 'Europe',
// 		age: 65,
// 		language: 'JavaScript',
// 	},
// ];
// function isSameLanguage(list) {
// 	const lang = list[0].language;
// 	return list.filter((el) => el.language === lang).length === list.length;
// }

// console.log(isSameLanguage(list1));
// console.log(isSameLanguage(list2));
// var list1 = [
// 	{
// 		firstName: 'Mark',
// 		lastName: 'G.',
// 		country: 'Scotland',
// 		continent: 'Europe',
// 		age: 22,
// 		language: 'JavaScript',
// 	},
// 	{
// 		firstName: 'Victoria',
// 		lastName: 'T.',
// 		country: 'Puerto Rico',
// 		continent: 'Americas',
// 		age: 30,
// 		language: 'Python',
// 	},
// 	{
// 		firstName: 'Emma',
// 		lastName: 'B.',
// 		country: 'Norway',
// 		continent: 'Europe',
// 		age: 19,
// 		language: 'Clojure',
// 	},
// ];
// var list2 = [
// 	{
// 		firstName: 'Kseniya',
// 		lastName: 'T.',
// 		country: 'Belarus',
// 		continent: 'Europe',
// 		age: 29,
// 		language: 'JavaScript',
// 	},
// 	{
// 		firstName: 'Amar',
// 		lastName: 'V.',
// 		country: 'Bosnia and Herzegovina',
// 		continent: 'Europe',
// 		age: 32,
// 		language: 'Ruby',
// 	},
// ];
// function getFirstPython(list) {

// 	for (let i = 0; i < list.length; i++) {
// 		if (list[i].language === 'Python') {
// 			return `${list[i].firstName}, ${list[i].country}`;
// 		}
// 	}
// 	return 'There will be no Python developers';
// }

// console.log(getFirstPython(list1)); //, 'Victoria, Puerto Rico'));
// console.log(getFirstPython(list2)); //, 'There will be no Python developers');
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// var list1 = [
// 	{
// 		firstName: 'Sofia',
// 		lastName: 'I.',
// 		country: 'Argentina',
// 		continent: 'Americas',
// 		age: 35,
// 		language: 'Java',
// 	},
// 	{
// 		firstName: 'Lukas',
// 		lastName: 'X.',
// 		country: 'Croatia',
// 		continent: 'Europe',
// 		age: 35,
// 		language: 'Python',
// 	},
// 	{
// 		firstName: 'Madison',
// 		lastName: 'U.',
// 		country: 'United States',
// 		continent: 'Americas',
// 		age: 32,
// 		language: 'Ruby',
// 	},
// ];

// var list2 = [
// 	{
// 		firstName: 'Sofia',
// 		lastName: 'I.',
// 		country: 'Argentina',
// 		continent: 'Americas',
// 		age: 35,
// 		language: 'Java',
// 	},
// 	{
// 		firstName: 'Lukas',
// 		lastName: 'X.',
// 		country: 'Croatia',
// 		continent: 'Europe',
// 		age: 35,
// 		language: 'Python',
// 	},
// ];
// function isRubyComing(list) {
// 	return list.some((el) => el.language === 'Ruby');
// }
// console.log(isRubyComing(list1));//, true));
// console.log(isRubyComing(list2))//, false));
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// var list1 = [
// 	{
// 		firstName: 'Maria',
// 		lastName: 'Y.',
// 		country: 'Cyprus',
// 		continent: 'Europe',
// 		age: 30,
// 		language: 'Java',
// 	},
// 	{
// 		firstName: 'Victoria',
// 		lastName: 'T.',
// 		country: 'Puerto Rico',
// 		continent: 'Americas',
// 		age: 70,
// 		language: 'Python',
// 	},
// ];
// var list2 = [
// 	{
// 		firstName: 'Noa',
// 		lastName: 'A.',
// 		country: 'Israel',
// 		continent: 'Asia',
// 		age: 20,
// 		language: 'Ruby',
// 	},
// 	{
// 		firstName: 'Andrei',
// 		lastName: 'E.',
// 		country: 'Romania',
// 		continent: 'Europe',
// 		age: 21,
// 		language: 'C',
// 	},
// ];
// function getAverageAge(list) {
// 	let age = 0;
// 	list.forEach((el) => (age += el.age));
// 	return Math.round(age / list.length);
// }

// console.log(getAverageAge(list1))//, 50));
// console.log(getAverageAge(list2))//, 21));
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function getEvenNumbers(numbersArray) {
// 	return numbersArray.filter((el) => el % 2 === 0);
// }

// console.log(getEvenNumbers([1,2,3,6,8,10]));//, [2,6,8,10]))
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function sortByValueAndIndex(array) {
// 	const res = [];

// 	for (let i = 0; i < array.length; i++) {
// 		console.log('array.slice====', array.slice(i + 1));
// 		console.log('array[i]', array[i]);
// 		let newArr = array.slice(i + 1);
// 		let num = array[i];
// 		for (let c = 0; c < newArr.length; c++) {
// 			console.log(' newArr', newArr);
// 			console.log('c + 2', c + 2);
// 			if (array[i] * (i + 1) >= newArr[c] * (c + 2)) {
// 				num = array[i];
// 			} else {
// 				num = array[c];
// 			}
// 		}
// 		res.push(num);
// 		console.log('res.push', res);
// 	}
// 	return res;
// }

// console.log(sortByValueAndIndex([26, 2, 3, 4, 5])); // expected = [2, 3, 4, 5, 26];

// Sort an array by value and index
//------------------------------------------------------------------------------------------------------------

// function doubleEveryOther(a) {
// 	return a.map((el,ind) => {
// 		if ((ind + 1) % 2 === 0) {
// 			return el * 2;
// 		}
// 		else {
// 			return el
// 		}
// 	})
// }

// console.log(doubleEveryOther([1,2,3,4]));//, [1,4,3,8] ))
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function scrollingText(text) {
// 	let str = text.toUpperCase();
// 	let res = [str];

// 	for (let i = 1; i < text.length; i++) {
// 		str = str.slice(1) + str[0];
// 		res.push(str);
// 	}

// 	return res;
// }

// console.log(scrollingText('abcdefg')); // ["ABC","BCA","CAB"]))
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

