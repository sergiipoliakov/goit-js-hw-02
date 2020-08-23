function formatString(string, maxLength = 40) {
  // Write code under this line
  let leters = string.split('');
  let length = leters.slice(0, maxLength);

  let stringLength = length.join('');

  const smolesString = leters.length > stringLength.length;
  if (smolesString) {
    stringLength += '...';
  }

  return stringLength;
}

// console.log(points);
// console.log(length);
// console.log(stringLength);

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
//'Vestibulum facilisis, purus nec pulvinar...'

console.log(
  formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30),
);
// 'Vestibulum facilisis, purus ne...'
