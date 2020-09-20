// Insert the Tripp model
const User = require('../users/User');
const { validationResult } = require('express-validator');
const Tripp = require('./Tripp');

module.exports = {
    get: {
        sharedTripps(req, res, next) {

            Tripp.find().lean().then((tripps) => {
                res.render('tripps/shared-tripps.hbs', {
                    isLoggedIn: req.user !== undefined,
                    userEmail: req.user ? req.user.email : '',
                    tripps
                });
            })
        },

        offerTripp(req, res, next) {
            console.log(res.locals);
            res.render('tripps/offer-tripp.hbs', {
                isLoggedIn: req.user !== undefined,
                userEmail: req.user ? req.user.email : ''
            })
        },

        detailsTripp(req, res, next) {
            const { id } = req.params;

            Tripp.findById(id).populate('buddies').lean().then((tripp) => {
                const currentUser = JSON.stringify(req.user._id);
                const availableSeats = ((tripp.seats) - tripp.buddies.length);
                res.render('tripps/details-tripp.hbs', {
                    isLoggedIn: req.user !== undefined,
                    userEmail: req.user ? req.user.email : '',
                    tripp,
                    isTheDriver: JSON.stringify(tripp.driver) === currentUser,
                    isAlreadyJoined: JSON.stringify(tripp.buddies).includes(currentUser),
                    isSeatsAvailable: availableSeats > 0,
                    availableSeats
                })
            });
        },

        closeTripp(req, res, next) {
            const { id } = req.params;
            Tripp.deleteOne({ _id: id }).then((deletedTripp) => {
                res.redirect('/tripp/shared-tripps.hbs');
            });
        },

        joinTripp(req, res, next) {
            const { id } = req.params;
            const { _id } = req.user;

            Promise.all([
                Tripp.updateOne({ _id: id }, { $push: { buddies: _id } }),
                User.updateOne({ _id }, { $push: { trippHistory: id } })
            ]).then(([updatedTripp, updatedUser]) => {
                res.redirect(`/tripp/details-tripp/${id}`);
            });
        }
    },

    post: {
        offerTripp(req, res, next) {
            const { directions, dateTime, carImage, seats, description } = req.body;

            const [startPoint, endPoint] = directions.split(' - ');
            const [date, time] = dateTime.split(' - ');
            const { _id } = req.user;

            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                console.log(errors.array()[0].msg);
                res.render('tripps/offer-tripp.hbs', {
                    isLoggedIn: req.user !== undefined,
                    userEmail: req.user ? req.user.email : '',
                    message: errors.array()[0].msg + ""
                })

                return;
            }

            Tripp.create({ startPoint, endPoint, date, time, carImage, seats, description, driver: _id }).then((createdTripp) => {
                res.redirect('/tripp/shared-tripps');
            });
        }
    }
}