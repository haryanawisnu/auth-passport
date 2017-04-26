var jwt = require('jsonwebtoken');

module.exports = {
  sign: function(value) {
    var token = jwt.sign(JSON.stringify(value), 'secret');
    return token;
  }
}
