var express = require('express');
var router = express.Router();
var controllers = require('../controllers/userControllers');
var passport = require('passport');
/* GET users listing. */
router.post('/signup', controllers.signup);
router.post('/signin', passport.authenticate('local', {
  session: false
}), function(req, res) {
  var user = req.user;
  res.send(user);
});
router.get('/users', controllers.getall); //login first

module.exports = router;
