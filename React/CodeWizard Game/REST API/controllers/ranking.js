const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        models.Ranking.find().sort({ level: 'desc' })
            .then((ranking) => {
                res.send(ranking);
            })
            .catch(next);
    },

    add: (req, res, next) => {

        const { name, level } = req.body;
        const date = new Date().toString().slice(0, 24)

        models.Ranking.create({ name, level: Number(level), date })
            .then((createdRanking) => {
                res.send({ success: true, createdRanking })
            })
            .catch(next);
    }
}