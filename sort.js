var _ = require("lodash");

var worker = function(itemsArray) {
   return _.sortBy(itemsArray, function(item) {
     return -item.quantity;
   });
};

module.exports = worker;
