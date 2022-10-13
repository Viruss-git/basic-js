const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error(`'arr' parameter must be an instance of the Array!`);
  }


  let newArray = [];

  function doubleNext(data) {
    newArray.push(data, data);
  }
  function doublePrev(data) {
    newArray.push(data, data);
  }

  function discardPrev() {
    newArray.pop();
  }

  for (let i = 0; i < arr.length; i++) {

    switch (arr[i]) {
      case '--double-next':
        doubleNext(arr[i + 1]);
        break;

      case '--double-prev':
        if (arr[i - 2] == '--double-next') {
          console.log('Contine...1');
        } else if (arr[i - 2] == '--discard-next') {
          console.log('Contine...2');
        } else {
          doublePrev(arr[i - 1]);
        }
        break;

      case '--discard-next':
        i = i + 1;
        break;

      case '--discard-prev':
        if (arr[i - 2] == '--discard-next') {
          console.log('Contine...3');
        } else if (arr[i - 2] == '--double-next') {
          newArray.pop();
          newArray.pop();
        } else {
          discardPrev();
        }
        break;

      default:
        newArray.push(arr[i]);
        break;
    }

  }

  return newArray;


}

module.exports = {
  transform
};
