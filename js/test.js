// const calculateEngravingPrice = (message = '', pricePerWord = 0) =>
//   pricePerWord * message.split(' ').length;
// // Write code in this line

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// );

function findLongestWord(string = '') {
  // Write code under this line
  let longestWord = '';
  let longWord = 0;
  let numberOfWord = 0;
  const words = string.split(' ');
  for (const word of words) {
    numberOfWord = word.length;
  }
  return numberOfWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
