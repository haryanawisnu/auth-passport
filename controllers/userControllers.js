var User = require('../models/user');
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
    let password = req.body.password;
    let email = req.body.email;
    User.create({
      username: username,
      password: password,
      email: email,
      loginStatus: false
    }, function(error, result) {
      if (result) {
        res.json(result);
      } else {
        res.send(`ERR input :\n ${error}`);
      }
    });
  },
  signin: (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;
    User.findOne({
      where: {
        username: username
      }
    }).then(user => {
      if (!user) {
        res.json({
          success: false,
          message: 'Authentication failed. User not found.'
        });
      } else if (user) {
        if (passwordHash.verify(password, user.password)) {
          res.json({
            success: true,
            message: 'Enjoy your token!',
            token: jwthelpers.sign(user)
          });
        } else {
          res.json({
            message: 'Authentication failed. Wrong password.'
          });
        }
      }
    })
  }
}
