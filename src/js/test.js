'use strict';

// let answer = prompt('какая компания придумала JS ?');

// if (answer === 'ECMAScript') {
//   alert('TRUE!!!!!')
// } else {
//   alert('FOOOOO!!!')
// }

// let number = prompt('input you number!');
// if(number === '0') {
//   alert `norm: ${number}`
// }
// else if(number < 1 ) {
//   alert(` min:${number}`)
// }
// else {
//   alert(`big :${number}`)
// }
// let userName = prompt('кто там?','');
// if(userName === 'Админ') {
//   let pass = prompt('Password')
//   if (pass === 'Я главный') {
//     alert('Hello')
//   }
//   else if (pass) {
//     alert('FALSE')
//   }
//   else {
//     alert('Отмена')
//   }
// }

// else if(userName) {
//   alert('я вас не знаю!!!')
// }
// else if(!userName){
//   alert('Отмена')
// }
// for (let i = 0; i < 5; ++i) {
//   console.log('++i:',i)
// }
// let num = 0;
// do {
// num = prompt('input number', 0)
// }
// while (num <= 100 && num)
let n = 10;
const arr = [2];
other: for (let i = 3; i <= n; i = i + 2) {
	// Для всех i...

	for (let j = 2; j < i; j++) {
		// проверить, делится ли число..

		if (i % j == 0) {
			continue other;
		} // не подходит, берём следующее
	}

	arr.push(i); // простое число
}

// function myFunc() {}
// let counter = 0;
// let counter2 = 0;

// const interval = setInterval(() => {
// 	console.log(++counter);
// }, 1000);

// const interval2 = setInterval(() => {
// 	console.log(--counter2);
// }, 1000);

let timer = document.querySelector('.wrapper-timer');
let counter = 0;
let interval = null;

function fullTime(time) {
	let min = Math.floor(time / 60);
	let sec = time % 60;
	return `${min <= 9 ? '0' + min: min}:${sec <= 9 ? '0' + sec : sec}`;
}

function startTime() {
  timer.style.color = 'green';
	if (interval === null) {
		timer.textContent = fullTime(counter);
		interval = setInterval(() => {
			counter++;
			timer.textContent = fullTime(counter);
			if (counter > 10) {
				timer.style.color = 'rgb(54, 203, 8)';
			}
		}, 1000);
  }
}

function stopTime() {
	timer.style.color = 'red';
	clearInterval(interval);
	interval = null;
	counter = 0;
}
