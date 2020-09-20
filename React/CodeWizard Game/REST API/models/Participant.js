const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String } = Schema.Types;

const participantSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

const Participant = new Model('Participant', participantSchema);

module.exports = Participant;