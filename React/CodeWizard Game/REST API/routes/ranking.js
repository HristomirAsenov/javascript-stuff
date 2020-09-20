const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.ranking.get);

router.post('/add', auth(), controllers.ranking.add);

module.exports = router;