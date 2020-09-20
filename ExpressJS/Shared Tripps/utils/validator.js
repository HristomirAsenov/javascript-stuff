const { body } = require('express-validator');
const { Error } = require('mongoose');

module.exports = [
    body('directions')
        .custom((value) => {
            if (!value.includes(' - ')) {
                throw new Error('The directions input field should includes " - " between the start and end point');
            }

            return true;
        }),

    body('dateTime')
        .custom((value) => {
            if (!value.includes(' - ')) {
                throw new Error('The dateTime input field should includes " - " between the date and time');
            }

            return true;
        })        
];