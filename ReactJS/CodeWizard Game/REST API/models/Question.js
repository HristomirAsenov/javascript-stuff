const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const questionSchema = new Schema({

    question: {
        type: String,
        required: true
    },

    'aAnswer': {
        type: String,
        required: true
    },

    'bAnswer': {
        type: String,
        required: true
    },

    'cAnswer': {
        type: String,
        required: true
    },

    'dAnswer': {
        type: String,
        required: true
    },

    correct: {
        type: String,
        required: true
    },

    level: {
        type: Number,
        required: true,
        min: 1,
        max: 10
    },

    tag: {
        type: String,
        required: true
    },

    isUsed: {
        type: Boolean,
        default: false
    },

    creator: {
        type: ObjectId,
        ref: 'User'
    }

});

module.exports = new Model('Question', questionSchema);