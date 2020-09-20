const router = require('../routes/');

module.exports = (app) => {

    app.use('/api/user', router.user);

    app.use('/api/questions', router.question);

    app.use('/api/participants', router.participant);

    app.use('/api/ranking', router.ranking);

    app.use('*', (req, res, next) => res.send({message: "invalid route"}))
};