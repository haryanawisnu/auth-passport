var User = require('../models/user');
var passwordHash = require('password-hash');
var jwthelpers = require('../helpers/jwtHelpers');

module.exports = {
  getall: (req, res, next) => {
    User.find().exec(function(err, result) {
      if (result) {
        res.json(result);
      } else {
        res.send(`ERR getall :\n ${err}`);
      }
    });
  },
  signup: (req, res, next) => {
    let username = req.body.username;
    var password = passwordHash.generate(req.body.password);
    let email = req.body.email;
    User.create({
      username: username,
      password: password,
      email: email
    }, function(error, result) {
      if (result) {
        res.json(result);
      } else {
        res.send(`ERR input :\n ${error}`);
      }
    });
  },
  signin: (username, password, cb) => {
    User.findOne({
      username: username
    }).exec(function(err, result) {
      if (!result) {
        cb({
          success: false,
          message: 'Authentication failed. User not found.',
          error: err
        });
      } else if (result) {
        if (passwordHash.verify(password, result.password)) {
          cb(null, {
            success: true,
            message: 'Enjoy your token!',
            token: jwthelpers.sign(result)
          });
        } else {
          cb(null, {
            message: 'Authentication failed. Wrong password.'
          });
        }
      }
    })
  }
}
