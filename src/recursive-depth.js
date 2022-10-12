const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, count = 0) {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] == 'object') {
        count++;
        return this.calculateDepth(arr.flat(1), count);
      }
    }
    return count + 1;
  }
}

module.exports = {
  DepthCalculator
};
