var _ = require('lodash');

var worker = function(item) {
  var results = {hot: [], warm: []};

  function hotTrue (item) {
    return item > 19;
  }

  _.forEach(item, function(temps, city) {
    if (_.every(temps, hotTrue)) {
      results.hot.push(city);
    } else if (_.some(temps, hotTrue)) {
      results.warm.push(city);
    }
  });
    return results;
};

module.exports = worker;
