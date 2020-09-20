const controllers = require('../controllers');
const router = require('express').Router();

router.get('/', controllers.participant.get);

router.post('/', controllers.participant.post);

router.delete('/:id?', controllers.participant.del);

module.exports = router;