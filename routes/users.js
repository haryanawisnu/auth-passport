var express = require('express');
var router = express.Router();
var controllers = require('../controllers/userControllers');
var jwthelpers = require('../helpers/jwtHelpers');
var passport = require('passport');

router.post('/signup', controllers.signup);
router.post('/signin', passport.authenticate('local', {
  session: false
}), function(req, res) {
  var user = req.user;
  res.send(user);
});
router.get('/users', jwthelpers.login, controllers.getall); //login first

module.exports = router;
