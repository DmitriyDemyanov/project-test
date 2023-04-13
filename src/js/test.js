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

// other:
// for (let i = 2; i <= n; i++) { // Для всех i...

//   for (let j = 2; j < i; j++) { // проверить, делится ли число..
//     console.log('i',i);
//     console.log('j',j);
//     if (i % j == 0) continue other  // не подходит, берём следующее
//   }

  // alert( i ); // простое число
// }

for (let i = 2; i <= n; i++) {
  if (n % i !== 0) {

  }
  alert( i )
}