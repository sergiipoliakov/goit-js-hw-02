// Напиши скрипт со следующим функционалом:

// При загрузке страницы пользователю предлагается в prompt ввести число. Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
// Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока пользователь не нажмет Cancel в prompt.
// После того как пользователь прекратил ввод нажав Cancel, если массив не пустой, необходимо посчитать сумму всех элементов массива и записать ее в переменную total. Используй цикл for или for...of. После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.
// 🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не обязательно. Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt записывать в массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt.

let input;
const numbers = [];
let total = 0;

const addNumbers = function () {
  input = prompt('Введите число', 'только число');
  Number(input);
  while (input) {
    if (isNaN(input)) {
      input = prompt('Было введено не число, попробуйте еще раз');
    } else {
      numbers.push(Number(input));
      input = prompt('Введите число', 'только число');
    }
  }
  for (const number of numbers) {
    total += number;
  }
  console.log(numbers);
  console.log(`Общая сумма чисел равна: [${total}]`);
  alert(`Общая сумма чисел равна: [${total}]`);

  return total;
};
addNumbers();

// Автопроверка домашних заданий по JavaScript

// Задача 6 / 9

// Модуль: 2

//   function mapArray(array) {
//     'use strict';

//     const numbers = [];
//     console.log( new Array(array.length));
//     for(let i = 0; i < array.length; i += 1) {
//       // Write code under this line
//       console.log(array[i] * 10);
//       numbers.push(array[i] * 10);
//     }
//     return numbers;
//   }

//   console.log(mapArray([-2, 0, 2, ]));
//   // [-20, 0, 20]

//   console.log(mapArray([-2.5, 0, 2.5]));
//   // [-25, 0, 25]
