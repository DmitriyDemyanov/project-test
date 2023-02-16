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

function setReducerHomeVersion(input) {
	const newArr = [];

	for (let i = 0; i < input.length; i++) {
		let count = 1;

		if (input[i] === input[i + 1]) {
			count++;
			// i = 5, c = 6, count = 2
			// i = 5, c = 7, count = 3
			// i = 5, c = 8, count = 4
			for (let c = i + 1; c < input.length; c++) {
				if (input[c] === input[c + 1]) {
					count++;
				} else {
					i = c;
					c = input.length;
				}
			}
		}

		newArr.push(count);
	}

	if (newArr.length > 1) {
		return setReducerHomeVersion(newArr);
	} else {
		return newArr[0];
	}
}
const input = [0, 4, 0, 4, 6, 8, 8, 8, 8, 0, 8, 5, 5, 7]; //output: 2
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

function fizzbuzz(n) {
	const result = [];
	console.log('n', n);
	for (let i = 1; i <= n; ++i) {
		if (i % 5 === 0 && i % 3 === 0) {
			console.log('i % 5 && i % 3', i % 5 && i % 3);
			result.push('FizzBuzz');
		} else if (i % 5 === 0) {
			result.push('Buzz');
		} else if (i % 3 === 0) {
			result.push('Fizz');
		} else {
			result.push(i);
		}
	}
	// result.pop()
	return result;
}

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

// console.log(isFlush(['10D','4D','QD','KD','5D'])); //true );)

function formatDuration(seconds) {
	if (seconds === 0) {
		return 'now';
	}

	let res = [];
	let date = '';
	const days = Math.floor(seconds / 86400);
	console.log('DAYS:',days);
	
	const hour = Math.floor((seconds % days) / 3600); ;
	console.log('hour:', hour);
	const sec = Math.floor((seconds % 3600) % 60);
	console.log('sec:',Math.round(sec));
	
	const min = Math.floor((seconds % 3600) / 60);
	console.log('min:', Math.round(min));


	if (days) {
		res.push(`${days} ${convert(days, 'day')}`);
	}
	if (hour) {
		res.push(`${hour} ${convert(hour, 'hour')}`);
	}
	if (min) {
		res.push(`${min} ${convert(min, 'minute')}`);
	}

	if (sec) {
		res.push(`${sec} ${convert(sec, 'second')}`);
	} else if (!sec) {
		return (date = res.join(', '));
	}

	let ind = res.join(', ').lastIndexOf(',');
	date = res.join(', ');
	let startStr = date.slice(0, ind); 
	let finishStr = date.slice(ind + 1);
	console.log('DATE:',date);
	console.log('Ind:',ind);
	console.log('startStr:',startStr);
	console.log('finishStr:', finishStr);
	
	return `${startStr} and ${finishStr}`;
}

function convert(time, str) {
	if (time !== 1) {
		return `${str}s`;
	}
	return str;
}

console.log(formatDuration(1433669)); // "1 hour, 1 minute and 2 seconds");)

