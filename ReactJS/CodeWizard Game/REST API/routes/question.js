const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.question.get);

router.post('/', auth(), controllers.question.post);

router.put('/:id', auth(), controllers.question.put);

router.delete('/:id', auth(), controllers.question.delete);

module.exports = router;