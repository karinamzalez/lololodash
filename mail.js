var _ = require('lodash');

var worker = function(array) {
  return _.chain(array)
  .sortBy()
  .value()
  .map(function(item) {
    return item.toUpperCase() + "CHAINED";
  });
};

module.exports = worker;
