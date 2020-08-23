// function findLongestWord(string = '') {
//   // Write code under this line
//   let words = string.split(' ');
//   let longestWord = words[0];

//   for (const word of words) {
//     const islongest = word.length > longestWord.length;
//     if (islongest) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

// function findLongestWord(string = '') {
//   // Write code under this line
//   let words = string.split(' ');
//   let longestWord = words[0];
//   for (const word of words) {
//     const isLongest = word.length > longestWord.length;
//     if (isLongest) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// // 'jumped'

// function formatString(string, maxLength = 40) {
//   // Write code under this line
//   let leters = string.split('');
//   let length = leters.slice(0, maxLength);

//   let stringLength = length.join('');

//   const smolesString = leters.length > stringLength.length;
//   if (smolesString) {
//     stringLength += '...';
//   }

//   return stringLength;
// }

// // console.log(points);
// // console.log(length);
// // console.log(stringLength);

// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // 'Curabitur ligula sapien, tincidunt non.'

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// //'Vestibulum facilisis, purus nec pulvinar...'

// console.log(
//   formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30),
// );
// // 'Vestibulum facilisis, purus ne...'

// function checkForSpam(str) {
//   'use strict';
//   // Write code under this line
//   let words = str.split(' ');

//   const wordToFind = 'sale';
//   const wordToFind2 = 'spam';
//   let message = '';

//   for (const word of words) {
//     // console.log(word);
//     const isLowerCase = word.toLowerCase();

//     console.log(isLowerCase);
//     if (isLowerCase.includes(wordToFind)) {
//       message = true;
//       break;
//     } else if (isLowerCase.includes(wordToFind2)) {
//       message = true;
//       break;
//     }

//    message = false;
//   }
//   // console.log(isLowerCase);
//   // console.log(message);
//   return message;
// }

// console.log(checkForSpam('Latest technology spam news sale')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers  now!')); // true

// console.log(checkForSpam('[SPAM] How to  earn fast money?')); // true

// function mapArray(array) {
//   'use strict';

//   const numbers = [];
//   console.log(new Array(array.length));
//   for (let i = 0; i < array.length; i += 1) {
//     Write code under this line
//     console.log(array[i] * 10);

//     numbers.push(array[i] * 10);
//   }
//   return numbers;
// }

// console.log(mapArray([-2, 0, 2]));
// // [-20, 0, 20]

// console.log(mapArray([-2.5, 0, 2.5]));
// // [-25, 0, 25]

// function filterArray(array) {
//   'use strict';
//   // const numbers = [];
//   const newArray = [];
//   let number = 0;

//   const numbers = [];
//   console.log(new Array(array.length));
//   for (let i = 0; i < array.length; i += 1) {
//     // Write code under this line
//     console.log(array[i] * 10);
//     // numbers.push(array[i] * 10);
//   }
//   return numbers;
// }

// function filterArray(array) {
//   'use strict';
//   const numbers = [];

//   for (const element of array) {
//     if (Number.isFinite(element)) {
//       numbers.push(element);
//     }
//   }

//   return numbers;
// }

// console.log(filterArray([-2, 0, 2]));
// // [-2, 0, 2]

// console.log(filterArray([1, NaN, Infinity]));
// // [1]

// console.log(filterArray([0, -0, 100, '100']));
// // [0, 0, 100]

// console.log(filterArray([undefined, false, null, [], 1]));
// // [1]

// console.log(filterArray([{}, () => {}, 2]));
// // [2]

// function reduceArray(array) {
//   'use strict';
//   let total = 0;
// console.log(array);
// Write code under this line
// for (let i = 0; i < array.length; i += 1) {
// for (const element of array) {
//   total += element;
// }
// for (let i = 0; i < array.length; i += 1) {
// console.log(i);
// console.log(array[1]);
// total = array[0] + array[array.length];

//   return total;
// }

// console.log(reduceArray([1, 2, 3]));
// // 6

// console.log(reduceArray([-2, 0, 2]));
// // 0

// console.log(reduceArray([1, 2, 2.5]));
// // 5.5

// function isLoginValid(login, min = 4, max = 16) {
//   // Write code under this line
//   return min <= login.length && login.length <= max;
// }

// function isLoginUnique(allLogins, login) {
//   'use strict';
//   // Write code under this line

//   return allLogins.includes(login) ? false : true;
// }

// function addLogin(allLogins, login) {
//   'use strict';
//   const SUCCESS = 'Логин успешно добавлен!';
//   const REFUSAL = 'Такой логин уже используется!';
//   const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
//   let message;
//   // Write code under this line

//   if (isLoginValid(login) !== true) {
//     // console.log(login);
//     message = ERROR;
//   } else if (isLoginUnique(allLogins, login) !== true) {
//     message = REFUSAL;
//     // console.log(login);
//   } else {
//     allLogins.push(login);
//     message = SUCCESS;
//     // console.log(login);
//   }
//   return message;
// }
// // console.log(isLoginValid);
// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// console.log(addLogin(logins, 'Ajax'));
// // 'Логин успешно добавлен!'

// console.log(addLogin(logins, 'robotGoogles'));
// // 'Такой логин уже используется!'

// console.log(addLogin(logins, 'Zod'));
// // 'Ошибка! Логин должен быть от 4 до 16 символов'

// console.log(addLogin(logins, 'jqueryisextremelyfast'));
// // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(logins);
