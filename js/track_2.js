// Задача 2

// Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию calculateEngravingPrice(message, pricePerWord) принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.

const calculateEngravingPrice = function (message, pricePerWord) {
  // твой код
  let total = 0;

  // перевести в масив
  const worts = message.split(' ');

  total = pricePerWord * worts.length;

  return total;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); // 160

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
);
//

// Автопроверка домашних заданий по JavaScript

// Задача 2 / 9

// Модуль: 2

// const calculateEngravingPrice = (message = '', pricePerWord = 0) => {
//   let total = 0;

//   const worts = message.split(' ');

//   total = pricePerWord * worts.length;

//   return total; // Write code in this line
// };

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// ); // 80

//console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160

//console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240

//console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120

//console.log(calculateEngravingPrice('Uno', 100)); // 100
