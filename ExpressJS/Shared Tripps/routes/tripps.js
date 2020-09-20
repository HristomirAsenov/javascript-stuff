const router = require('express').Router();
const handler = require('../handlers/tripps');
const isAuth = require('../utils/isAuth');
const validations = require('../utils/validator');

router.get('/shared-tripps', isAuth(), handler.get.sharedTripps);
router.get('/offer-tripp', isAuth(), handler.get.offerTripp);
router.get('/details-tripp/:id', isAuth(), handler.get.detailsTripp);
router.get('/close-tripp/:id', isAuth(), handler.get.closeTripp);
router.get('/join-tripp/:id', isAuth(), handler.get.joinTripp);

router.post('/offer-tripp', isAuth(), validations, handler.post.offerTripp);


module.exports = router;