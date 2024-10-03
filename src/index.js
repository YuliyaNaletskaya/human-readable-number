module.exports = function toReadable (number) {

  if (number === 0) return 'zero';

  single_digit = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  double_digit = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  below_hundred = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  function addToReadable(number) {
    let word = "";
    word = single_digit[number] + ' ';
    if (number < 10) {
      } else if (number < 20) {
          word = double_digit[number - 10] + ' ';
      } else if (number < 100) {
          word = below_hundred[(number - number % 10) / 10 - 2] + ' ' + addToReadable(number % 10);
      } else if (number < 1000) {
        word = single_digit[Math.trunc(number / 100)] + ' hundred ' + addToReadable(number % 100);
      } else if (number < 1000000) {
          word = addToReadable(parseInt(number / 1000)).trim() + ' thousand ' + addToReadable(number % 1000);
      } else if (number < 1000000000) {
          word = addToReadable(parseInt(number / 1000000)).trim() + ' million ' + addToReadable(number % 1000000);
      } else {
          word = addToReadable(parseInt(number / 1000000000)).trim() + ' billion ' + addToReadable(number % 1000000000);
      }
    return word.trim();
    };

  return addToReadable(number);
}
