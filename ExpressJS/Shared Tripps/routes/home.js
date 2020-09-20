const router = require('express').Router();
const handler = require('../handlers/home');
const isAuth = require('../utils/isAuth');

router.get('/', isAuth(true), handler.get.home);

module.exports = router;