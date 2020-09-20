const models = require('../models');

module.exports = {
    get: (req, res, next) => {

        const { level, tag, sortBy } = req.query;

        const key = level ? 'level' : tag ? 'tag' : undefined;
        const value = req.query[key];

        const filterData = isNaN(Number(value)) ? value : Number(value);

        const criteria = sortBy === "Descending" ? "desc" : 'asc'
        const filterObj = (key && value) ? { [key]: filterData } : {}

        models.Question
            .find(filterObj)
            .sort({ level: criteria })
            .then((questions) => res.send(questions))
            .catch(next);
    },

    post: (req, res, next) => {
        const { question, correct, aAnswer, bAnswer, dAnswer, cAnswer, level, tag } = req.body;
        const { _id } = req.user;

        models.Question.create({ question, correct, aAnswer, bAnswer, cAnswer, dAnswer, level, creator: _id, tag })
            .then((createdQuestion) => {
                return Promise.all([
                    models.User.updateOne({ _id }, { $push: { questions: createdQuestion } }),
                    models.Question.findOne({ _id: createdQuestion._id })
                ]);
            })
            .then(([userObj, questionObj]) => {
                res.send(questionObj);
            })
            .catch(next);
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { state } = req.body;

        const isUsed = state !== undefined ? state : true;
        
        models.Question.updateOne({ _id: id }, { isUsed })
            .then((updatedQuestion) => res.send({ success: true }))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.Origami.deleteOne({ _id: id })
            .then((removedOrigami) => res.send(removedOrigami))
            .catch(next)
    }
};