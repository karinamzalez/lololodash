var _ = require('lodash');

var worker = function(collection) {
  var overview = [],
      total = 0;
  var groupedOrders = _.groupBy(collection, 'article');

  _.forEach(groupedOrders, function (item, key) {
    key = parseInt(key);
    total = 0;
    if (item.length === 1) {
      total = item[0].quantity;
    } else {
      total = _.reduce(item, function(sum, item) {
          return sum + item.quantity;
      }, 0);
    }

    overview.push({
        article: key,
        total_orders: total
    });
  });

  overview = _.sortBy(overview, "total_orders").reverse();
  return overview;
};

module.exports = worker;
