// Задача 2

// Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию calculateEngravingPrice(message, pricePerWord) принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.

// перевести в масив

const calculateEngravingPrice = function (message, pricePerWord) {
  // твой код
  let total = 0;

  const worts = message.split(' ');
  //   console.log(worts.length);
  total = pricePerWord * worts.length;
  //   console.log(total);
  return total;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//     u,
//   ),
// );
// ); // 80

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
