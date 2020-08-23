// Задание 4
// Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.

// Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40 - ка символов и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.

const formatString = function (string) {
  // твой код

  let leters = string.split('');
  let maxStringLength = leters.slice(0, 40);
  // console.log(maxStringLength.length);

  let newStringLength = maxStringLength.join('');
  // console.log(newStringLength);

  const ifSringLess = leters.length > newStringLength.length;
  // console.log(ifSringLess);

  if (ifSringLess) {
    newStringLength += '...';
  }
  // console.log(newStringLength);

  return newStringLength;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка

// Автопроверка домашних заданий по JavaScript

// Задача 4 / 9

// Модуль: 2

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
