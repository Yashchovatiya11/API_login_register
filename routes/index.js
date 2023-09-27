var express = require('express');
var router = express.Router();


// var user = require('../controller/usercontroller');

// router.post('/register',user.register_user);

// router.post('/login',user.login_user);
// router.post('/logout',user.logout_user);


var {register_user, login_user, logout_user } = require('../controller/usercontroller');

router.post('/register',register_user);

router.post('/login',login_user);
router.post('/logout',logout_user);

module.exports = router;
