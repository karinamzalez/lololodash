var _ = require("lodash");

var worker = function(users){
  var filtered = _.filter(users, { active: true });
  return filtered;
};

module.exports = worker;
