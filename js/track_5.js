// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.Функция проверяет ее на содержание слов spam и sale.Если нашли зарещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false.Слова в строке могут быть в произвольном регистре.

const checkForSpam = function (message) {
  // твой код
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true






// function checkForSpam(str) {
//     'use strict';
//     // Write code under this line
//     let words = str.split(' ');
  
//     const wordToFind = 'sale';
//     const wordToFind2 = 'spam';
//     let message = '';
  
//     for (const word of words) {
//       // console.log(word);
//       const isLowerCase = word.toLowerCase();
    
//       console.log(isLowerCase);
//       if (isLowerCase.includes(wordToFind)) {
//         message = true;
//         break;
//       } else if (isLowerCase.includes(wordToFind2)) {
//         message = true;
//         break;
//       }
      
//      message = false;
//     }
//     // console.log(isLowerCase);
//     // console.log(message);
//     return message;
//   }
  
//   console.log(checkForSpam('Latest technology spam news sale')); // false
  
//   console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
//   console.log(checkForSpam('Get best sale offers  now!')); // true
  
//   console.log(checkForSpam('[SPAM] How to  earn fast money?')); // true
  
