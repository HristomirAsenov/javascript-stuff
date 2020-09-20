const models = require('../models');
const router = require('../routes/');
const utils = require('../utils');
const config = require('../config/config');

module.exports = (app) => {

    app.get('/api/auth', (req, res) => {
        const token = req.cookies[config.authCookieName];
		console.log(token);
        utils.jwt.verifyToken(token)
            .then(({ id }) => models.User.findById(id).populate('donatedTo'))
            .then(user => res.send(user))
            .catch((err) => res.status(401).send(err));
    });

    app.use('/api/user', router.user);

    app.use('/api/causes', router.causes);

    app.use('*', (req, res, next) => res.send('<h1> Something went wrong. Try again. :thumbsup: </h1>'));
};