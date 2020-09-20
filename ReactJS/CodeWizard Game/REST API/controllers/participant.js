const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        models.Participant.find({})
            .then((participants) => res.send(participants))
            .catch(next);
    },

    post: (req, res, next) => {
        const { participant } = req.body;
        models.Participant.create({ name: participant })
            .then((addedParticipant) => res.send(addedParticipant))
            .catch(next);
    },

    del: (req, res, next) => {

        const forDelete = req.params.id ? { _id: req.params.id } : {};  
        console.log(forDelete);

        models.Participant.remove(forDelete)
            .then((participants) => res.send(participants))
            .catch(next);
    }
};