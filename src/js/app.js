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

// console.log('[9,1,8,2,7,3,6,4]');
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function isFibo(a, b, f) {
// 	let x = a;
// 	let y = b;
// 	for (let i = 0; i < f; i++) {
// 		let d = x + y;
// 		if (d < f) {
// 			x = y ;
// 			y = d;
// 		}
// 		if (d === f) {
// 			return true;
// 		}
// 		if (d > f) {
// 			return  false;
// 		}
// 	}
// }
// console.log(isFibo(0, 1, 2)); //,true);)
// console.log(isFibo(1, 4, 10)); //,false))
// console.log(isFibo(100, 101, 301)); //,false);)
// console.log(isFibo(4, 5, 23)); //,true);)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const sumAverage = (arr) => {
// 	return Math.floor(
// 		arr.reduce((acc, cur) => {
// 			acc += cur.reduce((s, el) => (s += el), 0) / cur.length;
// 			return acc;
// 		}, 0)
// 	);
// };

// console.log(
// 	sumAverage([
// 		[3, 4, 1, 3, 5, 1, 4],
// 		[21, 54, 33, 21, 77],
// 	])
// ); //, 44))
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//___________________________________________________________________________________________________________
// function solve(arr) {
// 	const res = arr.filter((curr, i) => {
// 		return arr.every((el, idx) => idx <= i || el < curr);
// 	});
// 	return res;
// }

// function solve2(arr) {
// 	const res = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		let flag = true;
// 		let curr = arr[i];
// 		for (let c = i + 1; c < arr.length; c++) {
// 			if (curr < arr[c]) {
// 				flag = false;
// 				c = arr.length;
// 			}
// 		}
// 		if (flag) {
// 			res.push(curr);
// 		}
// 	}
// 	return res;
// }

// console.log(solve2([67, 54, 27, 85, 66, 88, 31, 24, 49])); //,[88,49]))

// function replaceAll(seq, find, replace) {
// 	if (!seq.length) {
// 		return [];
// 	}
// 	if (typeof seq === 'string') {
// 		return seq.toString().replaceAll(find, replace).split(',').toString();
// 	}
// 	if (typeof seq[0] === 'number') {
// 		return seq.map((el) =>
// 			el
// 				.toString()
// 				.replaceAll(find, replace)
// 				.split(',')
// 				.map((el) => el * 1)
// 		);
// 	}
// }

// console.log(replaceAll2([1, 2, 2, 31, 411315], 1, 2)); //, [2,2,2, 32]))
// console.log(replaceAll2('hello word', 'l', 'r')); //, [2,2,2]))
// // 12546
// function replaceAll2(seq, find, replace) {
// 	if (typeof seq === 'string') {
// 		return seq.toString().replaceAll(find, replace);
// 	}
// 	return seq.map((el) => {
// 		if (el !== undefined) {
// 			return +el.toString().replaceAll(find,replace)
// 		} else {
// 			return el;
// 		};
// 	});
// }

// function maxGap2(numbers) {
// 	let sortArr = numbers.sort((a,b) => b - a);
// 	let count = 0;
// 	for (let i = 0; i < sortArr.length; i++) {
// 		if (count < sortArr[i] - sortArr[i + 1]) {
// 			count = sortArr[i] - sortArr[i + 1];
// 		}
// 	}
// 	return count
// }

// function maxGap(numbers) {
// 	return numbers.sort((a,b) => b - a).reduce((acc,curr,i) => {
// 		const dif = curr - numbers[i + 1];
// 		return dif > acc ? dif : acc;
// 	}, 0)
// }
// console.log(maxGap([24,299,131,14,26,25]))//,168))
// console.log(maxGap([-54,37,0,64,-15,640,0]))//,576);)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//______________________________________________________________________________________________

// function multiplyAndFilter(array, multiplier) {
// 	return array.reduce((acc,cur) => {
// 		if (typeof cur === 'number') {
// 			acc.push(cur * multiplier);
// 		}
// 		return acc
// 	},[])
// }

// console.log(multiplyAndFilter([1, null, function(){}, 2.5, 'string', 10, undefined, {}, []], 3))//, [3,7.5,30]))
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function dominator(arr) {
// 	let obj = {};

// 	for (let i = 0; i < arr.length; i++) {
// 		if (obj[arr[i]] === undefined) {
// 			obj[arr[i]] = 0;
// 		}
// 		obj[arr[i]]++;
// 	}
// 	let res = Object.entries(obj).filter((el) => el[1] >= arr.length / 2)

// 	if (res.length === 1) {
// 		return +res[0][0];
// 	}
// 	return -1
// };
// console.log(dominator([3,4,3,2,3,1,3,3]));//,3))
// console.log(dominator([1,2,3,4,5]))//,-1);)
// console.log(dominator([1,1,1,2,2,2]))//,-1));
// console.log(dominator([1,1,1,2,2,2,2]))//,2));
//-----------------------------------------------------What dominates your array?----------------------=----------------------------------------------------------------------

// const findAll = (array, n) => {
// 	return array.reduce((acc,cur,ind) => {
// 		if (cur === n) {
// 			acc.push(ind);
// 		}
// 		return acc
// 	} ,[])
// };

// console.log(findAll([10, 16, 20, 6, 14, 11, 20, 2, 17, 16, 14], 16))//, [1, 9]);)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function shuffledArray(shuffled) {
// 	let flag = false;
// 	return shuffled.filter((el,ind) => {
// 		let sum = shuffled.reduce((acc,cur,index) => {
// 			if (index !== ind) {
// 				acc += cur
// 			}
// 			return acc;
// 		},0);

// 		if (el !== sum || flag === true) {
// 		}

// 		if (el === sum) {
// 			flag = true;
// 			return false;
// 		}
// 	}).sort((a,b) => a - b);
// }

// console.log(shuffledArray([1,-3,-5,7,2]));//,[-5, -3, 2, 7]))
// console.log(shuffledArray([2,-1,2,2,-1]))///,[-1, -1, 2, 2])
// console.log(shuffledArray([1, 12, 3, +0, 6, 2]))//,[1, 2, 3, 6]))
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//____________________________________________________________________________________________________________________________________________________________
// function arrayMash(array1, array2) {
// 	const res = [];
// 	for (let i = 0; i < array1.length; i++) {
// 		res.push(array1[i]);
// 		res.push(array2[i]);
// 	}
// 	return res;
// }
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function matchArrays(v,r) {
// 	return v.filter((el) => r.find((cur) => el === cur)).length;

// }

// console.log(matchArrays(['incapsulation','OOP','array'],
// 	['time','propert','paralelism','OOP']));//,1););
// console.log(matchArrays([1,2,3,4,5],
// 	[2,3,4,5,6]));//,4);)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Array.prototype.reverse = function() {
//   const arr = [];
// 	for (let i = 0; i < this.length; i++) {
//     arr.unshift(this[i])
//   }
//   this = arr;
// };

// function sortByValueAndIndex(array) {
// 	let res = array.sort(() => {

// 	} )
// }

///--------------------------------------------------------------------------------------------------------------------------------------

// function swap(string) {

// 	return string.split('').reduce((acc,cur,ind) => {
// 		if ( ["a", "e", "i","o","u"].includes(cur)) {
// 			acc.push(cur.toUpperCase())
// 		} else {
// 			acc.push(cur)
// 		}
// 		return acc
// 	},[]).join('')

// }
// console.log(swap("AbrAcAdAbrA"))//, "AbrAcAdAbrA");))
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function keepOrder(ary, val) {

// 	for (let i = 0; i < ary.length; i++) {
// 		if (ary[i] >= val) {
// 			return i
// 		}
// 	}
// 	return ary.length;
// }
// console.log(keepOrder([1, 1, 2, 2, 2], 2)); //, 2))
// console.log(keepOrder([1, 2, 3, 4, 7], 5)); //, 4))
// console.log(keepOrder([1, 2, 3, 4], 5))//, 4))

// function bandNameGenerator(str) {
// 	let res = str.split('');

// 	if (res[0] !== res[res.length - 1]) {
// 		return `The ${res[0].toUpperCase()}${str.slice(1)}`;
// 	}
// 	return `${res[0].toUpperCase()}${str.slice(1)}${str.slice(1)}`;
// }

// console.log(bandNameGenerator('sandles'))//, 'Sandlesandles')'//;)
// console.log(bandNameGenerator('knife'))//, 'The Knife');)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//_________________________________________________________________________________________________________________
// function avgArray(arr) {
// 	const res = [];

// 	for (let i = 0; i < arr[0].length; i++) {

// 		let sum = 0;
// 		for (let c = 0; c < arr.length; c++) {
// 			const currArray = arr[c];
// 			sum += currArray[i];
// 		}
// 		console.log('SUM',sum);

// 		res.push(sum / arr.length);
// 	}

// 	return res;
// }

// console.log(
// 	avgArray([
// 		[1, 2, 3, 4],
// 		[5, 6, 7, 8],
// 	])
// ); //, [3, 4, 5, 6]))

// function myArr(arr) {
// 	let sum = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		const currArray = arr[i];
// 		sum += currArray[0];
// 	}
// 	console.log('SUM', sum);
// }

//------------------------------------------------Average Array-------------------------------------------

// function repeats(arr) {
// 	const res = arr.reduce((acc, num) => {
// 		if (!acc[num]) {
// 			acc[num] = 0;
// 		}
// 		acc[num]++;
// 		return acc;
// 	}, {});
// 	return Object.entries(res).reduce((acc, [key, value]) => {
// 		if (value === 1) {
// 			acc += +key;
// 		}
// 		return acc;
// 	}, 0);
// // }

// console.log(repeats2([5, 17, 18, 11, 13, 18, 11, 13])); //,22);)

//как сравнить элемен со всеми кроме сомого эл.
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function findMissing(arr1,arr2) {

// }

// console.log(findMissing([4, 3, 3, 61, 8, 8], [8, 61, 8, 3, 4])); //, 3);)

//-------------------------------------------------------------------------

//_______________________________________________________________________________________________________________
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function removeNthElement(arr, n) {
//   // Fix it

//   var arrCopy = [...arr];
//   arrCopy.splice(n, 1);
// 	console.log('rrrr',arr)
//   return arrCopy;
// }

// console.log(removeNthElement([9, 7, 6, 9], 6))//, [7, 6, 9]);

// function pluck(objs, name) {
// 	return objs.reduce((acc, cur) => {
// 		acc.push(cur[name]);
// 		console.log(cur);
// 		return acc;
// 	}, []);
// }

// console.log(pluck([{a: 4}, {a: 6, b: 43}, {a: 7}, {b: 55}], 'a')); //, [1,2]))
// console.log(pluck([{a:1, b:3}, {a:2}], 'a')) // -> [3, undefined])
//---------------------------------------------------pluck----------------------------
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//_____________________________________________________________________________________________________________________________________
// function avg(a){
// 	return a.reduce((acc, el) => acc += el) / a.length
// }

// console.log(avg([0, 1, 2, 3, 4]))//, 2, "returns valid avg number");)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//_______________________________________________________________________________________________________________________________________________
// function allNonConsecutive(arr) {
// 	let res = [];
// 	for (let i = arr.length - 1; i >= 0; i--) {
// 		let obj = {i: 0, n: 0};
// 		console.log('I>>',i)
// 		console.log('arr[i]',arr[i])
// 		console.log('arr[i - 1]',arr[i - 1]);
// 		if (arr[i] !== arr[i - 1] + 1 && arr[i - 1] !== undefined) {
// 			obj.i = i;
// 			obj.n = arr[i];
// 			res.push(obj);
// 			console.log('obj[i]', obj[i]);
// 		}
// 	}
// 	return res.reverse()
//  }

// console.log(allNonConsecutive([1,2,3,4,6,7,8,10]));
// console.log('RESULT: [{i: 4, n:6}, {i: 7, n:10}]');
// // results, [{i: 4, n:6}, {i: 7, n:10}])
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function missingWord(nums,str) {
// 	const sortArr = [...nums].sort((a,b) => a - b);
// 	let res = str.replaceAll(' ','').split('').reduce((acc,curr,ind) => {
// 		sortArr.forEach(el => {
// 			if (el === ind) {
// 				acc += curr.toLowerCase()
// 			}
// 		})
// 		return acc
// 	},'');
// 	return res.length === 3 ? res : 'No mission today';
// }
// //Jenny the youngest detective
// // 'No mission today';
// console.log(
// 	missingWord([29, 31, 8], 'The quick Brown fox jumps over the lazy dog')
// ); //, "bay"))
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function cleanedCounts(data) {

// 	let res = [];
// 	let count = data[0];
// 	for (let i = 1; i <= data.length; i++) {
// 		res.push(count);
// 		if (count < data[i]) {
// 			count = data[i]
// 		}
// 	}

// 	return res
// }
// console.log('RES>>>>>>>>>>>>>>>>..',cleanedCounts([5,5,6,5,5,5,5,6]))//, [5,5,6,6,6,6,6,6], `cleanedCounts [5,5,6,5,5,5,5,6]` );)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function kookaCounter(laughing) {
// 	let res = laughing.replaceAll('a','');
// 	let count = 0;
// 	for (let i = 0; i < res.length; i++) {
// 		if (res[i] !== res[i + 1]) {
// 			count++
// 		}
// 	}
// 	return count
// }

// console.log(kookaCounter("HaHaHahahaHaHa"))//, 3);)
// console.log(kookaCounter(""))//, 2))
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//__________________________________________________________________________________________________________________________________________

// function pooRoulette(p) {
// 	let indexB = null;
// 	let count = 0;
// 	p.forEach((cur) => {
// 		cur.forEach((el, ind) => {
// 			if( el === 'B') {
// 				indexB = ind;
// 			}

// 		})
// 	} )
// 	for (let i =0; i < p.length; i++) {
// 		if (p[i][indexB] === '~') {
// 			count++
// 		}
// 		if (p[i][indexB] === 'B' && count === 3) {
// 			return "Get the wipes!"
// 		}
// 		if (p[i][indexB] !== '~' ) {
// 			count = 0
// 		}
// 		if (p[i][indexB] === 'B' && p[i][indexB + 1] === '~' && p[i][indexB + 2] === '~' && p[i][indexB + 3] === '~'
// 		) {
// 			return "You disgust me!"
// 		}
// 		for (let c = 0; c < p.length; c++) {

// 			if (p[i][c] === '~' && p[i][c + 1] === '~' && p[i][c + 2] === '~' && p[i][c + 3] === 'B'
// 		) {
// 			return "You disgust me!"
// 		}
// 		}
// 	}
// 	return "Calm before the storm"
// }
// console.log(pooRoulette([
// 	[ '1', '2', '3', '~', '~', '~', 'B'],
// 	[ 'o', '~', 'o', 'o', 'o', 'o', 'o'],
// 	[ 'o', '0', 'o', 'o', 'o', 'o', 'o'],
// 	[ 'o', '~', 'o', 'o', 'o', 'o', 'o'],
// 	[ 'o', '0', 'o', 'o', 'o', 'o', 'o'],
// 	[ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
// 	[ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
// 	]));//, "Get the wipes!");)
// // console.log(pooRoulette([
// // 	[ 'B', '~', '~', '~', 'o', 'o', 'o'],
// // 	[ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
// // 	[ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
// // 	[ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
// // 	[ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
// // 	[ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
// // 	[ 'o', 'o', 'o', 'o', 'o', 'o', 'o']
// // 	]));//, "You disgust me!");)
// // 	console.log(pooRoulette([
// //     [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
// //     [ 'o', 'o', '~', 'o', 'o', 'o', 'o'],
// //     [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
// //     [ 'o', 'o', '~', 'o', 'o', 'o', 'o'],
// //     [ 'o', 'o', '~', 'o', 'o', 'o', 'o'],
// //     [ 'o', 'o', 'B', 'o', '~', '~', '~'],
// //     [ 'o', 'o', 'o', 'o', 'o', 'o', 'o']
// //     ]))//, "Calm before the storm");)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function getVillainName(birthday){
//   const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
//   const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];

// 	const date = [birthday.getMonth(),birthday.getDate().toString().slice(-1)];
// 	console.log('date',date)
// 	console.log('may=>',m[date[0]])
// 	return `The ${m[date[0]]} ${d[date[1]]}`;
// }

// console.log(getVillainName(new Date("May 3"))) //"The Despicable Raisin"
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function withoutLast(arr) {
// let x = [...arr].pop();
// console.log('x',x)
//   return arr;
// }
//  console.log(withoutLast([ 34, 7, 77, 72, 99, 60, 87, 100, 22 ,3 ]));//,  [ 34, 7, 77, 72, 99, 60, 87 ]);)
//  console.log(withoutLast([6, 7, 8, 9]));//, [6, 7, 8]);)
//  console.log(withoutLast([]))
//----------------------------------------------Working with arrays I (and why your code fails in some katas)

// function vowelOne(s){
//  const vowels = ["a", "e", "i","o","u"];
//  return s.split('').reduce((acc, cur) => {
// 	if (vowels.includes(cur.toLowerCase())) {
// 		acc += '1'
// 	} else {
// 		acc += '0'
// 	}
// 	return acc
//  },'')
// }

// console.log( vowelOne( "vowelOne" ));//, "01010101" );)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//_____________________________________________________________________________________________________________________________
// function cubeVolume(h, r) {
// return 3.14 * Math.pow(r, 2) * h
// }

// console.log(cubeVolume( 3, 7 ));//27? cubeVolume(11,5);    //353.55

// //v = p*r2 * h
//----------------------------------------------Volume of the Largest Cube that Fits Inside a Given Cylinder

// function add(...x) {
// 	return Math.round(x.reduce((acc,cur,ind) => acc+= cur / (ind + 1) ,0))
// }
// console.log(add(4, -3, -2));//, 2);
// console.log(add(-1, -2, -3, -4));//,-4);)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// var mispelled = function (word1, word2) {
// 	let arr1 = word1.split('');
// 	let arr2 = word2.split('');
// 	let count = 0;
// 	let length = arr1.length >= arr2.length ? arr1.length : arr2.length;

// 	if (arr1.length === arr2.length) {
// 		for (let i = 0; i < length; i++) {
// 			if (arr1[i] === arr2[i]) {
// 				count++;
// 			}
// 		}
// 		return count === arr1.length || count + 1 === arr1.length;
// 	}

// 	if (arr1.length !== arr2.length) {
// 		if (arr1[0] !== arr2[0]) {
// 			arr1 = arr1.reverse();
// 			arr2 = arr2.reverse();
// 		}
// 		for (let i = 0; i < length; i++) {
// 			if (arr1[i] === arr2[i]) {
// 				count++;
// 			}
// 		}
// 		return count === length - 1;
// 	}
// };

// function misspelled(w1, w2) {

// }

// console.log(mispelled('versed', 'versedh')); //, true
//    arrayOfArrays = [
// 			[1, 2, 3, 4, 5, 6],
// 			[7, 7, 7, -7, 7, 7],
// 			[1, 1, 1, 1, 1, 1],
// 		];
// 		// expected = [1, 2, 3, 11, 12, 13, -6, 8, 8, 1, 1, 1];
// Mispelled word
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function addingShifted(arrayOfArrays,shift) {
// 	const newArr = [];
// 	console.log('<><><><>',arrayOfArrays[0].length)
// 	// for (let i = 0; i < )
// // }

// console.log(addingShifted(arrayOfArrays,3))

// function validParentheses(parenStr) {
// 	let count = 0;
// 	for (let i = 0; i < parenStr.length; i++) {
// 		if (parenStr[i] === '(') {
// 			count++
// 		}
// 		if (parenStr[i] === ')') {
// 			count--;
// 		}
// 		if (count < 0 ) {
// 			return false
// 		}
// 	}
// 	return count === 0
// }

// console.log(validParentheses(')('));//true
//_=+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function sortEmotions(arr, order) {
// 	const settings = {
// 		':D': 5,
// 		':)': 4,
// 		':|': 3,
// 		':(': 2,
// 		T_T: 1,
// 	};
// 	const multiple = order ? 1 : -1;
// 	return arr.sort((a, b) => {
// 		return (settings[b] - settings[a]) * multiple;
// 	});
// }

// console.log(sortEmotions([':)', 'T_T', ':)', ':D', ':D'], false)); //, [ ':D', ':D', ':)', ':)', 'T_T' ]))
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++SORT+++++++++++++++++++++++++++++++++++++++++++++
// function deepCount(a) {
// 	let count = a.length;
// 	const idx = a.findIndex((el) => Array.isArray(el));
// 	if (idx !== -1) {
// 		count = count + deepCount(a[idx]);
// 	}
// 	return count;
// }
// // console.log(deepCount([1, 2, [3, 4, [5, [1,2,3,4,5]]]]))//, 7, "Expected 7"))

// function sortByValueAndIndex(array){

// return array.sort((a,b) =>  {

// 	if ((array.indexOf(a)+ 1)* a >  (array.indexOf(b)+ 1)* b ) {
// 		console.log('array.indexOf(a)+ 1)* a',(array.indexOf(a)+ 1)* a)
// 		console.log('array.indexOf(a)+ 1)* b',(array.indexOf(b)+ 1)* b)
// 		console.log('____________________________________________________')
// 		return 1
// 	}
// 	if ((array.indexOf(a)+ 1)* a <  (array.indexOf(b)+ 1)* b ) {
// 		return -1
// 	}
// 	return 0
// })
// }

// console.log(sortByValueAndIndex([ 23, 2, 3, 4, 5 ]))
//-------------------------------------------------------Sort an array by value and index ???

// function myLanguages(results) {
// 	return Object.entries(results).sort((a,b) => b[1] - a[1]).reduce((acc, cur) => {
// 		if(cur[1] >= 60) {
// 			acc.push(cur[0])
// 		}
// 		return acc
// 	},[])
// }

// console.log(myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93}));//, ["Dutch", "Greek", "Hindi"]))
// console.log('>>>',myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}));//, ["Ruby", "Python"]))
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// var naughty = [
// 	{ name: 'Warrior reading this kata', wasNice: true },
// 	{ name: 'xDranik', wasNice: false },
// 	{ name: 'Santa', wasNice: true }
// ];
// var nice = [
//   {name: 'Santa', wasNice: true},
//   {name: 'Warrior reading this kata', wasNice: true}
// ];

// function getNiceNames(people){
// 	return people.reduce((acc, cur) => {
// 		if (cur.wasNice === true) {
// 			acc.push(cur.name)
// 		}
// 		return acc
// 	},[])
// }

// console.log(getNiceNames(naughty))
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const map = ['_id', 'name', 'isActive', 'balance'];
// const users = [
// 	{
// 		_id: '5d220b10e8265cc978e2586b',
// 		isActive: true,
// 		balance: 2853.33,
// 		age: 20,
// 		name: 'Buckner Osborne',
// 		gender: 'male',
// 		company: 'EMPIRICA',
// 		email: 'bucknerosborne@empirica.com',
// 		phone: '+1 (850) 411-2997',
// 		registered: '2018-08-13T04:28:45 -03:00',
// 		nestedField: {total: 300},
// 	},
// 	{
// 		_id: '5d220b10144ef972f6c2b332',
// 		isActive: true,
// 		balance: 1464.63,
// 		age: 38,
// 		name: 'Rosalie Smith',
// 		gender: 'female',
// 		company: 'KATAKANA',
// 		email: 'rosaliesmith@katakana.com',
// 		phone: '+1 (943) 463-2496',
// 		registered: '2016-12-09T05:15:34 -02:00',
// 		nestedField: {total: 400},
// 	},
// 	{
// 		_id: '5d220b1083a0494655cdecf6',
// 		isActive: false,
// 		balance: 2823.39,
// 		age: 40,
// 		name: 'Estrada Davenport',
// 		gender: 'male',
// 		company: 'EBIDCO',
// 		email: 'estradadavenport@ebidco.com',
// 		phone: '+1 (890) 461-2088',
// 		registered: '2016-03-04T03:36:38 -02:00',
// 		nestedField: {total: 200},
// 		'nestedField.total': 200,
// 	},
// ];

// function getUsers(users, map) {
// 	return users.reduce((acc, current) => {
// 		let obg = {};
// 		map.forEach((el) => {
// 			obg[el] = current[el];
// 		});
// 		acc.push(obg);
// 		return acc;
// 	}, []);
// }

// // console.log(getUsers(users,map))++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // ask about reverse?

// function sort(users, balance, order) {
// 	let res = [...users];
// 	// let str = balance.slice(0, balance.indexOf("."));
// 	// let second = balance.slice(balance.indexOf(".") + 1, balance.length);

// 	const [str, second] = balance.split('.');

// 	// console.log('balance',Object.values(balance).some((el) => el === '.'))

// 	if (second) {
// 		if (order === 'desc') {
// 			return res.sort((a, b) => b[str][second] - a[str][second]);
// 		}
// 		return res.sort((a, b) => a[str][second] - b[str][second]);
// 	} else {
// 		if (order === 'desc') {
// 			return res.sort((a, b) => {
// 				if (a[balance] > b[balance]) {
// 					return 1;
// 				}
// 				if (a[balance] < b[balance]) {
// 					return -1;
// 				}
// 				return 0;
// 			});
// 		}
// 		return res.sort((a, b) => {
// 			if (a[balance] < b[balance]) {
// 				return 1;
// 			}
// 			if (a[balance] > b[balance]) {
// 				return -1;
// 			}
// 			return 0;
// 		});
// 	}
// }
// const u = {
// 	name: 'aaa',
// 	nested: {
// 		total: {
// 			currency: '$',
// 		},
// 	},
// };
// // nested.total.currency
// function sort2(users, key, order) {
// 	return [...users].sort((user1, user2) => {
// 		const key1 = resolveNestedValue(user1, key);
// 		const key2 = resolveNestedValue(user2, key);
// 		const multiple = order === 'asc' ? 1 : -1;
// 		let res = 0;
// 		if (key1 > key2) {
// 			res = 1;
// 		}
// 		if (key1 < key2) {
// 			res = -1;
// 		}
// 		return res * multiple;
// 	});
// }

// function resolveNestedValue(obj, key) {
// 	const keys = key.split('.');
// 	if (keys.length === 1 || key in obj) {
// 		return obj[key];
// 	}
// 	return resolveNestedValue(obj[keys[0]], keys.slice(1).join('.'));
// }

// console.log('S2: ', sort2(users, 'nestedField.total', 'desc'));
// // console.log(resolveNestedValue(u, 'nested.total.currency'));

// // console.log("USERS:::", users);
// // console.log("desc====", sort(users, "balance", "desc"));
// // console.log("asc", sort(users, "balance", "asc"));
// // console.log("asc by name", sort(users, "name", "asc"));
// // console.log("desc by name", sort(users, "name", "desc"));
// // console.log("<><nestedField.total><>", sort(users, "nestedField.total", "asc"));

// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function debounce(callback, delay) {
// 	// ....
// }

// debounce();
// function getAge() {
// 	const age = 22;
// 	return age + 3;
// }

// function getName() {
// 	const name = 'Anna';
// 	const res = `I'm ${name} and I'm ${getAge()} years old`;
// 	return res;
// }

// function sayHello() {
// 	return 'Hello. ' + getName();
// }

// console.log(sayHello());
function removeSmallest(numbers) {
  let res = [...numbers];
  const ind = res.splice(res.indexOf(Math.min.apply(null, res)), 1);
  return res;
}

console.log(removeSmallest([5, 3, 2, 1, 4])); //, [5, 3, 2, 4], "Wrong result for [5, 3, 2, 1, 4]"))
console.log(removeSmallest([2, 2, 1, 2, 1])); //, [2, 2, 2, 1], "Wrong result for [2, 2, 1, 2, 1]"))
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//   let image = [
// 		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 		[0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
// 		[0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
// 		[0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
// 		[0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
// 		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// ];
// 	 var image2 = [
// 			[0, 0, 0, 0],
// 			[0, 1, 1, 0],
// 			[0, 1, 1, 0],
// 			[0, 0, 0, 0],
// 		];

// function countIslands(image) {
// 	let index_X_min = 0;
// 	let index_Y_min = 0;

// 	let index_X_max = 0;
// 	let index_Y_max = 0;

// 	return image.reduce((acc,current,ind) => {

// 		for (let i = 0; i < current.length; i++) {

// 			if (current[i] === 1 && current[i - 1] === 0 && current[i + 1] === 0) {
// 				acc++;
// 				index_Y_min = ind - 1;
// 				index_X_min = i - 1;
// 				console.log('idex_X_min',index_X_min);

// 				if (image[ind - 1][i - 1] === 0 && image[ind + 1][i + 1] === 0) {
// 					acc++;

// 					console.log('idex_Y_min', index_Y_min);
// 				}
// 			}
// 		}

// 		return acc;
// 	},0);
// };

// // console.log(countIslands(image));  //  2
// // console.log(countIslands(image2));  //  1
// function findIncorrectValue(tree) {
// 	const res = [];
// 	for (let i = 0; i < 1; i++) {
// 		if (tree[0] !== tree[1] + tree[2]) {
// 			res.push(i);
// 			res.push(tree[0] - tree[2]);
// 			return res;
// 		}
// 	}
// 	for (let c = 1; c < tree.length; c++) {
// 		console.log('tree[c]',tree[c]);
// 		console.log('tree[c + 2]', tree[c + 2]);
// 		console.log(' tree[c + 3]',tree[c + 3]);
// 		console.log('___________________________________')
// 		if (tree[c] !== tree[c + 2] + tree[c + 3]) {
// 			res.push(c + 2);
// 			res.push(tree[c] - tree[c + 3]);
// 			return res
// 		}
// 	}
// 	return res
// }

// console.log(
// 	findIncorrectValue([19, 9, 10, 5, 5, 4, 6, 2, 2, 1, 4, 1, 3, 2, 4])
// ); //, [3, 4], "First node on level 2 should be 4");)
// console.log(findIncorrectValue([27, 13, 15, 6, 7, 5, 9]))//, [2,14], "Root's rightchild should be 14");)

function scoreboard(string) {
  const number = ["nil", "one", "two", "three", "four", 'five', 'six', 'seven', 'eight','nine'];

 return string.split(" ").slice(-2).reduce((acc, current) => {

    number.forEach((el, ind) => {

    if(el === current) {
      acc.push(ind);
    }
   })

   return acc
  }, []);
}
console.log(scoreboard("The score is four one")); //, [4,0], "Should return: [4,1]"))

function getAges(sum,difference){
  if(sum < 0 || difference < 0) {
    return null
  }
 let x = (sum + difference) / 2;
 let y = sum - x;

return [x,y]
};

console.log(getAges(24 , 4 ))//, [14,10]);)