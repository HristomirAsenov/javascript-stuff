const mongoose = require('mongoose');
const { Schema, model: Model } = mongoose;
const { String, Number } = Schema.Types;

const rankingSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    level: {
        type: Number,
        required: true
    },

    date: {
        type: String,
        required: true
    }
});

module.exports = new Model('Ranking', rankingSchema);