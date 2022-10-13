const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (!(arguments[0] instanceof Date) || Object.keys(date).includes('toString')) {
    throw Error('Invalid date!');
  }

  let month = date.getMonth() + 1;
  const season = {
    'winter': [12, 1, 2],
    'spring': [3, 4, 5],
    'summer': [6, 7, 8],
    'fall': [9, 10, 11]
  };

  for (var key in season) {
    if (season[key].includes(month)) {
      return key;
    }
  }
}

module.exports = {
  getSeason
};
