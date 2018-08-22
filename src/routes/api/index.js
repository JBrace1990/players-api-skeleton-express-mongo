const { Router } = require('express');
const user = require('./user');

const router = new Router();

//router.use('/user/:userId', require("./user-login"));
router.use('/user/:userId', require('./user-login'));
router.use('/user', user);
router.use('/login', require('./login'));

module.exports = router;
