var _ = require('lodash');
var worker = function(notAnalyzed) {
  var average,
      underperform,
      overperform;
  notAnalyzed = _.sortBy(notAnalyzed, "income");

  average = _.reduce(notAnalyzed, function(sum, num) {
      return sum + num.income;
  }, 0);

  average = average / notAnalyzed.length;

  underperform = _.filter(notAnalyzed, function (num) {
      return num.income <= average;
  });

  overperform = _.filter(notAnalyzed, function (num) {
      return num.income > average;
  });

  return {
      average: average,
      underperform: underperform,
      overperform: overperform
  };
};


module.exports = worker;
