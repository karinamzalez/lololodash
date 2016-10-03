var _ = require('lodash');

var worker = function (input) {
  var mytemplate = "Hello <%= name %> (logins: <%= login.length %>)";
  return _.template(mytemplate)(input);
};

module.exports = worker;
