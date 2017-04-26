var express = require('express');
var router = express.Router();
var controllers = require('../controllers/userControllers');
/* GET users listing. */
router.post('/signup', controllers.signup);
router.post('/signin', controllers.signin);
router.get('/users', controllers.getall); //admin only

module.exports = router;
